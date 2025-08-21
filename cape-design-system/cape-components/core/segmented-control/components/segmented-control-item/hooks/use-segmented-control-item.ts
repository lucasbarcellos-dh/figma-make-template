import type { CSSProperties, MouseEventHandler } from 'react';
import { useCombinedClassName } from '../../../../common/hooks';
import styles from '../../../segmented-control.module.scss';
import type { SegmentedControlItemProps } from '../type';
import { useSegmentedControlContext } from '../../../hooks/use-segmented-control-context';

export interface UseSegmentedControlItemReturnType {
  rootProps: {
    className?: string;
    style?: CSSProperties;
    'aria-selected': boolean;
    'aria-controls': string;
    'data-active'?: boolean;
    'data-value'?: string;
    onClick?: MouseEventHandler<HTMLElement>;
  };
  contentProps: {
    className?: string;
  };
}

export const useSegmentedControlItem = ({
  className = '',
  value,
  onClick,
  ...restProps
}: SegmentedControlItemProps): UseSegmentedControlItemReturnType => {
  const { activeItem, setActiveItem } = useSegmentedControlContext();
  const valueString = value?.toString() || '';

  const handleOnClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    // Not using valueString here because user could pass in null or undefined
    if (!value) return;

    setActiveItem(valueString);
    onClick?.(event);
  };

  return {
    rootProps: {
      ...restProps,
      className: useCombinedClassName({
        className: styles.item,
        overrideClassName: className,
      }),
      'aria-controls': `cape-segmented-control-item-${valueString}`,
      'aria-selected': valueString === activeItem,
      'data-active': (value && valueString === activeItem) || undefined,
      'data-value': (value && valueString) || undefined,
      onClick: handleOnClick,
    },
    contentProps: {
      className: styles.content,
    },
  };
};

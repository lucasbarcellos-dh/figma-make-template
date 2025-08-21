import { useCombinedClassName, useControllableState } from '../../common/hooks';
import styles from '../card.module.scss';
import type { CardProps } from '../type';

interface UseCardReturnType {
  rootProps: {
    className?: string;
    'data-variant': CardProps['variant'];
    'data-disabled': CardProps['disabled'];
    'data-interactive': boolean;
    'data-selected'?: boolean;
    'aria-pressed'?: boolean | 'true' | 'false' | 'mixed';
    tabIndex?: number;
    role?: string;
  };
}

export const useCard = ({
  className = '',
  variant,
  disabled,
  selected,
  onSelectionChange,
  ...restProps
}: CardProps): UseCardReturnType => {
  const [internalIsSelected, setInternalIsSelected] =
    useControllableState<boolean>({
      value: selected,
      defaultValue: false,
      onChange: (value) => onSelectionChange?.(value),
    });

  const isInteractive = Boolean((onSelectionChange || selected) && !disabled);

  const interactiveProps = {
    tabIndex: 0,
    role: 'button',
    'aria-pressed': internalIsSelected,
    'data-selected': internalIsSelected,
    onClick: () => {
      setInternalIsSelected(!internalIsSelected);
    },
    onKeyDown: (event: KeyboardEvent) => {
      if (event.key === ' ' || event.key === 'Enter') {
        // to stop the page from scrolling
        event.preventDefault();
        setInternalIsSelected(!internalIsSelected);
      }
    },
  };

  return {
    rootProps: {
      className: useCombinedClassName({
        className: styles.root,
        overrideClassName: className,
      }),
      'data-variant': variant,
      'data-disabled': disabled,
      'data-interactive': isInteractive,
      ...(isInteractive ? interactiveProps : {}),
      ...restProps,
    },
  };
};

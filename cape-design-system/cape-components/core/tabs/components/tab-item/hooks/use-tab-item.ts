import type { CSSProperties, MouseEventHandler } from 'react';
import { useCombinedClassName } from '../../../../common/hooks';
import type { TabItemProps } from '../type';
import { useTabsContext } from '../../../hooks/use-tabs-context';
import styles from '../../../tabs.module.scss';

interface UseTabItemReturnType {
  rootProps: {
    className?: string;
    style?: CSSProperties;
    onClick?: MouseEventHandler<HTMLElement>;
    disabled: boolean;
    'data-value': string;
    'data-active'?: boolean;
    'data-disabled'?: boolean;
    'aria-hidden'?: boolean;
  };
}

export const useTabItem = ({
  className = '',
  value,
  onClick,
  disabled = false,
  ...restProps
}: TabItemProps): UseTabItemReturnType => {
  const { active } = useTabsContext();

  return {
    rootProps: {
      className: useCombinedClassName({
        className: styles.tab,
        overrideClassName: className,
      }),
      ...restProps,
      onClick,
      disabled,
      'data-value': value,
      'data-active': value === active || undefined,
      'data-disabled': disabled || undefined,
      'aria-hidden': disabled || undefined,
    },
  };
};

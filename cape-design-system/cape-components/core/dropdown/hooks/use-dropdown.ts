import type { CSSProperties } from 'react';
import type { DropdownProps } from '../type';
import styles from '../dropdown.module.scss';
import { useCombinedClassName } from '../../common/hooks';

interface UseDropdownReturnType {
  className?: string;
  style?: CSSProperties;
  disabled?: DropdownProps['disabled'];
  onToggle?: DropdownProps['onToggle'];
}

export const useDropdown = ({
  className,
  disabled,
  onToggle,
  ...restProps
}: DropdownProps): UseDropdownReturnType => {
  return {
    disabled,
    className: useCombinedClassName({
      className: styles.root,
      overrideClassName: className,
    }),
    'aria-disabled': disabled || undefined,
    onToggle,
    ...restProps,
  };
};

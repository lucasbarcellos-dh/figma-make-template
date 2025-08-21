import type { CSSProperties } from 'react';
import { useCombinedClassName } from '../../common/hooks';
import styles from '../date-picker.module.scss';
import type { DatePickerProps } from '../type';
import type { PopoverProps } from '../../popover';

type UseDatePickerProps = DatePickerProps;

interface UseDatePickerReturnType {
  rootProps: {
    className?: string;
    style?: CSSProperties;
  };
  popoverProps?: Omit<PopoverProps, 'children' | 'role'>;
}

export const useDatePicker = ({
  className = '',
  open,
  defaultOpen,
  onOpenChange,
  placement = 'bottom-end',
  zIndex,
  disablePortal,
  triggerType,
  offset,
  closeOnOutsideClick,
  closeOnEsc,
  closeOnFocusOut,
  ...restProps
}: UseDatePickerProps): UseDatePickerReturnType => {
  return {
    rootProps: {
      className: useCombinedClassName({
        className: styles.root,
        overrideClassName: className,
      }),
      ...restProps,
    },
    popoverProps: {
      open,
      defaultOpen,
      onOpenChange,
      placement,
      zIndex,
      disablePortal,
      triggerType,
      offset,
      closeOnOutsideClick,
      closeOnEsc,
      closeOnFocusOut,
    },
  };
};

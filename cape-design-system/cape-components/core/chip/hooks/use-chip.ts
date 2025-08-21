import { useCombinedClassName, useControllableState } from '../../common/hooks';
import { type IconButtonProps } from '../../icon-button';
import styles from '../chip.module.scss';
import type { UseChipProps, UseChipReturnType } from './type';

/**
 *  INFO: Chip and Icon button size mapping defined on design side in figma
 **/
const chipAndIconButtonSizeMapping = {
  xsmall: '2xsmall',
  small: '2xsmall',
  medium: 'xsmall',
  large: 'small',
};

export const useChip = ({
  className,
  size = 'xsmall',
  disabled = false,
  onDelete,
  onSelectionChange,
  selected,
  label,
  startIcon,
  endIcon,
  closeButtonLabel,
  ...restProps
}: UseChipProps): UseChipReturnType => {
  const [internalValue, setInternalValue] = useControllableState<boolean>({
    value: selected,
    defaultValue: false,
    onChange: (value) => onSelectionChange?.(value),
  });
  const isDeletable = typeof onDelete !== 'undefined';
  const isInteractive = Boolean(onSelectionChange) || Boolean(selected);

  return {
    rootProps: {
      className: useCombinedClassName({
        className: styles.root,
        overrideClassName: className,
      }),
      disabled,
      label,
      startIcon,
      endIcon,
      hasLabel: Boolean(label),
      hasStartContent: Boolean(startIcon),
      hasEndContent: Boolean(endIcon),
      hasCloseButton: Boolean(isDeletable && !disabled),
      'data-size': size,
      'data-disabled': disabled,
      ...(isInteractive && !disabled
        ? {
            tabIndex: 0,
            role: 'button',
            'data-interactive': true,
            'data-selected': internalValue,
            onClick: () => {
              setInternalValue(!internalValue);
            },
          }
        : {}),
      onKeyDown: (event: KeyboardEvent) => {
        if (event.code === 'Space' || event.code === 'Enter') {
          event.preventDefault();
          setInternalValue(!internalValue);
        }
      },
      ...restProps,
    },
    ...(isDeletable && !disabled
      ? {
          iconButtonProps: {
            onClick: (event) => {
              event.stopPropagation();

              onDelete();
            },
            disabled,
            'data-testid': 'chip-delete-btn',
            'aria-label': closeButtonLabel || 'Delete',
            onKeyDown: (event) => {
              event.stopPropagation();
            },
            className: styles.close,
            size: chipAndIconButtonSizeMapping[size] as IconButtonProps['size'],
          },
        }
      : {}),
    textContainerProps: {
      'data-size': size,
      'data-selected': internalValue,
      className: useCombinedClassName({
        className: styles.label,
      }),
      'data-disabled': disabled,
      'data-interactive': isInteractive,
    },
    startContentProps: {
      className: useCombinedClassName({ className: styles.slot }),
      'data-slot-placement': 'start',
      'data-disabled': disabled,
      'data-selected': internalValue,
      'data-size': size,
    },
    endContentProps: {
      className: useCombinedClassName({ className: styles.slot }),
      'data-slot-placement': 'end',
      'data-disabled': disabled,
      'data-selected': internalValue,
      'data-size': size,
    },
  };
};

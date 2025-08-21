import { forwardRef } from 'react';
import { CloseMiniIcon } from '@deliveryhero/cape-icons';
import { IconButton } from '../icon-button';
import type { ChipProps } from './type';
import { useChip } from './hooks/use-chip';

/**
 * Chips allow users to enter information, make selections, filter content,
 * or trigger actions. Chips should appear dynamically as a group of multiple interactive elements.
 *
 * @see Docs https://cape.deliveryhero.com/2bfa22855/p/40298b-chip/b/62f995
 */
export const Chip = forwardRef<HTMLDivElement, ChipProps>(
  ({ size = 'xsmall', disabled = false, ...restProps }, ref) => {
    const {
      rootProps: {
        label,
        startIcon,
        endIcon,
        hasCloseButton,
        hasEndContent,
        hasLabel,
        hasStartContent,
        ...restRootProps
      },
      textContainerProps,
      iconButtonProps,
      startContentProps,
      endContentProps,
    } = useChip({ size, disabled, ...restProps });

    return (
      <div ref={ref} {...restRootProps}>
        {hasStartContent ? (
          <div {...startContentProps}>{startIcon} </div>
        ) : null}
        {hasLabel ? <div {...textContainerProps}>{label}</div> : null}
        {hasEndContent ? <div {...endContentProps}>{endIcon} </div> : null}
        {hasCloseButton ? (
          <IconButton icon={<CloseMiniIcon />} {...iconButtonProps} />
        ) : null}
      </div>
    );
  },
);

Chip.displayName = 'Chip';

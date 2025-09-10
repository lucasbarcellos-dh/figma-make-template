import { forwardRef } from 'react';
import { IconPlaceholderIcon } from '@deliveryhero/cape-icons';
import type { IconButtonProps } from './type';
import { useIconButton } from './hooks/use-icon-button';

/**
 * An icon button provides users with clear visual cues, displaying feedback when hovered over or clicked.
 * This allows users to interact with the component, revealing its states and enabling them to take desired actions
 *
 * @see Docs https://cape.deliveryhero.com/2bfa22855/p/12238f-icon-button/b/712fa3
 */
export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      icon = <IconPlaceholderIcon />,
      outline = false,
      variant = 'tertiary',
      status = 'branded',
      size = 'xsmall',
      disabled = false,
      ...restProps
    },
    ref,
  ) => {
    const { rootProps, contentProps } = useIconButton({
      variant,
      status,
      outline,
      size,
      disabled,
      ...restProps,
    });

    return (
      <button ref={ref} type="button" {...rootProps}>
        <span {...contentProps}>{icon}</span>
      </button>
    );
  },
);

IconButton.displayName = 'IconButton';

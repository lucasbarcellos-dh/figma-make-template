import { forwardRef, type ReactNode } from 'react';
import { FloatingPortal, FloatingFocusManager } from '@floating-ui/react';
import { Stack } from '../../../stack';
import type { PopoverContentProps } from './type';
import { usePopoverContent } from './hooks/use-popover-content';

/**
 * The content of the Popover. PopoverContent component must be wrapped inside `<Popover />`
 *
 * @see Docs https://cape.deliveryhero.com/2bfa22855/p/892a6f-popover/b/6504bf
 */
export const PopoverContent = forwardRef<HTMLDivElement, PopoverContentProps>(
  function PopoverContent({ children, ...props }, ref): ReactNode | null {
    const {
      floatingFocusManagerProps,
      rootProps,
      wrapperProps,
      disablePortal,
      isMounted,
    } = usePopoverContent(props);

    if (!isMounted) {
      return null;
    }

    const floatingContent = (
      <FloatingFocusManager {...floatingFocusManagerProps}>
        <div {...rootProps}>
          <Stack {...wrapperProps} ref={ref}>
            {children}
          </Stack>
        </div>
      </FloatingFocusManager>
    );

    return disablePortal ? (
      floatingContent
    ) : (
      <FloatingPortal>{floatingContent}</FloatingPortal>
    );
  },
);

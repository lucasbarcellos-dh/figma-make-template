import type { PopoverProps } from './type';
import { usePopover } from './hooks/use-popover';
import { PopoverContext } from './hooks/use-popover-context';

/**
 * A Popover can be used to display some content on top of another.
 *
 * @see Docs https://cape.deliveryhero.com/2bfa22855/p/892a6f-popover/b/6504bf
 */
export function Popover({
  defaultOpen = false,
  placement = 'bottom',
  offset = 12,
  role = 'menu',
  zIndex = 100,
  disablePortal = false,
  triggerType = 'click',
  closeOnOutsideClick = true,
  closeOnEsc = true,
  closeOnFocusOut = false,
  children,
  fallbackPlacements = ['bottom-start', 'bottom-end', 'top-start', 'top-end'],
  ...restProps
}: PopoverProps): JSX.Element {
  const { contextValues } = usePopover({
    defaultOpen,
    placement,
    offset,
    role,
    zIndex,
    disablePortal,
    triggerType,
    closeOnOutsideClick,
    closeOnEsc,
    closeOnFocusOut,
    fallbackPlacements,
    ...restProps,
  });

  return (
    <PopoverContext.Provider value={contextValues}>
      {children}
    </PopoverContext.Provider>
  );
}

Popover.displayName = 'Popover';

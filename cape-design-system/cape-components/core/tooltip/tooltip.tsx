import type { TooltipProps } from './type';
import { useTooltip } from './hooks/use-tooltip';
import { TooltipContext } from './hooks/use-tooltip-context';
import { DEFAULT_TOOLTIP_OFFSET, DEFAULT_TOOLTIP_ZINDEX } from './constants';

/**
 *  Tooltips are used to provide additional information about a particular item. They are triggered either by clicking or hovering over an info-icon.
 *
 * @see Docs https://cape.deliveryhero.com/2bfa22855/p/80fd67-tooltip
 */
export function Tooltip({
  defaultOpen = false,
  placement = 'bottom',
  offset = DEFAULT_TOOLTIP_OFFSET,
  zIndex = DEFAULT_TOOLTIP_ZINDEX,
  size = 'medium',
  variant = 'default',
  disablePortal = false,
  closeOnOutsideClick = true,
  closeOnEsc = true,
  arrow = true,
  disableInteractive = false,
  children,
  fallbackPlacements = ['bottom-start', 'bottom-end', 'top-start', 'top-end'],

  ...restProps
}: Readonly<TooltipProps>): JSX.Element {
  const { contextValues } = useTooltip({
    defaultOpen,
    placement,
    offset,
    zIndex,
    size,
    variant,
    disablePortal,
    closeOnOutsideClick,
    closeOnEsc,
    arrow,
    disableInteractive,
    fallbackPlacements,
    ...restProps,
  });
  return (
    <TooltipContext.Provider value={contextValues}>
      {children}
    </TooltipContext.Provider>
  );
}

Tooltip.displayName = 'Tooltip';

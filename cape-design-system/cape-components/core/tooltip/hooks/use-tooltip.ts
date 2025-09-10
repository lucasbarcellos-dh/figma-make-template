import { useRef } from 'react';
import {
  useFloating,
  autoUpdate,
  offset,
  flip,
  useDismiss,
  useRole,
  useInteractions,
  useHover,
  safePolygon,
  arrow as arrowFloating,
  useFocus,
} from '@floating-ui/react';
import { useControllableState } from '../../common/hooks';
import type { TooltipProps } from '../type';
import { TOOLTIP_ARROW_WIDTH } from '../constants';
import type { TooltipContextType } from './use-tooltip-context';

type UseTooltipProps = Omit<TooltipProps, 'children'>;

export interface UseTooltipReturnType {
  contextValues: TooltipContextType;
}

export function useTooltip({
  defaultOpen,
  placement,
  open: controlledOpen,
  onToggle: setControlledOpen,
  offset: offsetValue,
  zIndex,
  size,
  variant,
  disablePortal,
  closeOnOutsideClick,
  closeOnEsc,
  arrow,
  disableInteractive,
  fallbackPlacements,
}: UseTooltipProps): UseTooltipReturnType {
  const [open, setOpen] = useControllableState<boolean>({
    value: controlledOpen,
    defaultValue: defaultOpen,
    onChange: (value) => setControlledOpen?.(value),
  });

  const arrowRef = useRef(null);

  const data = useFloating({
    placement,
    open,
    onOpenChange: setOpen,
    whileElementsMounted: autoUpdate,
    middleware: [
      offset(offsetValue),
      flip({
        /**
         * Guarantees that the desired positioning is maintained unless there is insufficient space.
         * Below is a specified array of placements to attempt if the initial placement proves incompatible with the axes.
         * NOTE: Must maintain the order of placements based on priority.
         */
        fallbackPlacements,
        padding: 20,
      }),
      arrow
        ? arrowFloating({ element: arrowRef, padding: TOOLTIP_ARROW_WIDTH })
        : null,
    ],
  });

  const context = data.context;

  const hover = useHover(context, {
    move: false,
    enabled: controlledOpen === undefined,
    handleClose: !disableInteractive ? safePolygon() : null,
  });

  const dismiss = useDismiss(context, {
    enabled: controlledOpen === undefined,
    outsidePress: closeOnOutsideClick,
    escapeKey: closeOnEsc,
  });

  const focus = useFocus(context, {
    enabled: controlledOpen === undefined,
  });

  const elementRole = useRole(context, { role: 'tooltip' });

  const interactions = useInteractions([hover, focus, dismiss, elementRole]);

  return {
    contextValues: {
      open,
      onToggle: setOpen,
      zIndex,
      disablePortal,
      arrowRef,
      size,
      variant,
      ...interactions,
      ...data,
    },
  };
}

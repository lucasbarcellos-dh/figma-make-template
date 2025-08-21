import {
  useFloating,
  autoUpdate,
  offset,
  flip,
  useClick,
  useDismiss,
  useRole,
  useInteractions,
  useHover,
} from '@floating-ui/react';
import { useRef } from 'react';
import { useControllableState } from '../../common/hooks';
import type { PopoverProps } from '../type';
import type { PopoverContextType } from './use-popover-context';

type UsePopoverProps = Omit<PopoverProps, 'children'>;

interface PopoverReturnType {
  contextValues: PopoverContextType;
}

export function usePopover({
  defaultOpen,
  placement,
  open: controlledOpen,
  onOpenChange: setControlledOpen,
  offset: offsetValue,
  role,
  zIndex,
  disablePortal,
  triggerType,
  closeOnOutsideClick,
  closeOnEsc,
  closeOnFocusOut,
  fallbackPlacements,
}: UsePopoverProps): PopoverReturnType {
  const [open, setOpen] = useControllableState<boolean>({
    value: controlledOpen,
    defaultValue: defaultOpen,
    onChange: (value) => setControlledOpen?.(value),
  });

  const numberOfTriggers = useRef<number>(0);

  const data = useFloating({
    placement,
    open,
    onOpenChange: setOpen,
    /**
     * To ensure the floating element remains anchored to the reference element, such as when scrolling or resizing.
     */
    whileElementsMounted: autoUpdate,
    middleware: [
      offset(offsetValue),
      flip({
        /**
         * Guarantees that the desired positioning is maintained unless there is insufficient space.
         * Below is a specified array of placements to attempt if the initial placement proves incompatible with the axes.
         * NOTE: Must maintain the order of placements based on priority.
         */
        ...(Array.isArray(fallbackPlacements) &&
          fallbackPlacements.length > 0 && { fallbackPlacements }),
        padding: 20,
      }),
    ],
  });

  const context = data.context;

  const click = useClick(context, {
    enabled: !controlledOpen && triggerType === 'click',
  });
  const hover = useHover(context, {
    enabled: !controlledOpen && triggerType === 'hover',
  });

  const dismiss = useDismiss(context, {
    outsidePress: closeOnOutsideClick,
    escapeKey: closeOnEsc,
  });
  const elementRole = useRole(context, { role });

  const interactions = useInteractions([click, hover, dismiss, elementRole]);

  return {
    contextValues: {
      open,
      onOpenChange: setOpen,
      zIndex,
      disablePortal,
      closeOnFocusOut,
      numberOfTriggers,
      ...interactions,
      ...data,
    },
  };
}

import {
  useFloating,
  useClick,
  useDismiss,
  useRole,
  useInteractions,
} from '@floating-ui/react';
import { useControllableState } from '../../common/hooks';
import type { DialogProps } from '../type';
import type { DialogContextType } from './use-dialog-context';

type UseDialogProps = Omit<DialogProps, 'children'>;

interface DialogReturnType {
  contextValues: DialogContextType;
}

export function useDialog({
  defaultOpen,
  open: controlledOpen,
  onOpenChange: setControlledOpen,
  zIndex,
  disablePortal,
  closeOnOutsideClick,
  closeOnEsc,
}: UseDialogProps): DialogReturnType {
  const [open, setOpen] = useControllableState<boolean>({
    value: controlledOpen,
    defaultValue: defaultOpen,
    onChange: (value) => {
      setControlledOpen?.(value);
    },
  });

  const data = useFloating({
    open,
    onOpenChange: setOpen,
  });

  const context = data.context;

  const click = useClick(context, {
    enabled: !controlledOpen,
  });

  const dismiss = useDismiss(context, {
    outsidePress: closeOnOutsideClick,
    escapeKey: closeOnEsc,
  });

  const elementRole = useRole(context);

  const interactions = useInteractions([click, dismiss, elementRole]);

  return {
    contextValues: {
      open,
      setOpen,
      zIndex,
      disablePortal,
      ...interactions,
      ...data,
    },
  };
}

import {
  useFloating,
  useClick,
  useDismiss,
  useRole,
  useInteractions,
} from '@floating-ui/react';
import { useControllableState } from '../../common/hooks';
import type { DrawerProps } from '../type';
import type { DrawerContextType } from './use-drawer-context';

type UseDrawerProps = Omit<DrawerProps, 'children'>;

interface DrawerReturnType {
  contextValues: DrawerContextType;
}

export function useDrawer({
  defaultOpen,
  open: controlledOpen,
  onOpenChange: setControlledOpen,
  zIndex,
  placement = 'end',
  disablePortal,
  closeOnOutsideClick,
  closeOnEsc,
}: UseDrawerProps): DrawerReturnType {
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
      ...interactions,
      ...data,
      open,
      setOpen,
      zIndex,
      disablePortal,
      placement,
    },
  };
}

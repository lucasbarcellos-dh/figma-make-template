import { type CSSProperties } from 'react';
import {
  useMergeRefs,
  useTransitionStatus,
  type FloatingFocusManagerProps,
} from '@floating-ui/react';
import { useDrawerContext } from '../../../hooks/use-drawer-context';
import type { DrawerContentProps, Status } from '../type';
import styles from '../../../drawer.module.scss';
import { useCombinedClassName } from '../../../../common/hooks';
import type { DrawerPlacement } from '../../../type';

interface UseDrawerContextReturnType {
  floatingFocusManagerProps: Pick<FloatingFocusManagerProps, 'context'>;
  rootProps: {
    className?: string;
    style?: CSSProperties;
    ref?: ((instance: HTMLDivElement | null) => void) | null;
    'data-placement': DrawerPlacement;
    'data-status': Status;
  };
  backdropProps: {
    className?: string;
    disablePortal?: boolean;
    open?: boolean;
    zIndex?: number;
    'data-placement': DrawerPlacement;
    'data-status': Status;
  };
  disablePortal?: boolean;
}

export const useDrawerContent = ({
  className = '',
  ref: propRef,
  ...restProps
}: DrawerContentProps): UseDrawerContextReturnType => {
  const {
    context: floatingContext,
    disablePortal,
    zIndex,
    placement = 'end',
    ...context
  } = useDrawerContext();
  const ref: ((instance: HTMLDivElement | null) => void) | null = useMergeRefs([
    context.refs.setFloating,
    propRef,
  ]);
  const { status, isMounted } = useTransitionStatus(floatingContext);

  return {
    floatingFocusManagerProps: {
      context: floatingContext,
    },
    rootProps: {
      ...context.getFloatingProps(restProps),
      role: 'dialog',
      'aria-modal': true,
      ...restProps,
      ref,
      className: useCombinedClassName({
        className: styles.content,
        overrideClassName: className,
      }),
      style: {
        ...restProps.style,
        /* the variable is predefined in the style file */
        '--cp-drawer-z-index': zIndex,
      } as CSSProperties,
      'data-placement': placement,
      'data-status': status,
    },
    backdropProps: {
      /**
       * INFO: since we are using FloatingPortal as the parent container for everything including the backdrop.
       * Backdrop should not have a separate portal and render in the main portal of the FloatingPortal
       */
      disablePortal: true,
      open: isMounted,
      'data-placement': placement,
      'data-status': status,
      className: styles.backdrop,
      zIndex,
    },
    disablePortal,
  };
};

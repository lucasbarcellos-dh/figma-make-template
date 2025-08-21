import { type CSSProperties } from 'react';
import {
  useMergeRefs,
  useTransitionStatus,
  type FloatingFocusManagerProps,
} from '@floating-ui/react';
import { useDialogContext } from '../../../hooks/use-dialog-context';
import type { DialogContentProps, Status } from '../type';
import styles from '../dialog-content.module.scss';
import { useCombinedClassName } from '../../../../common/hooks';

interface UseDialogContextReturnType {
  floatingFocusManagerProps: Pick<FloatingFocusManagerProps, 'context'>;
  rootProps: {
    className?: string;
    style?: CSSProperties;
    ref?: ((instance: HTMLDivElement | null) => void) | null;
    'data-status': Status;
  };
  backdropProps: {
    className?: string;
    disablePortal?: boolean;
    open?: boolean;
    zIndex?: number;
    'data-status': Status;
  };
  disablePortal?: boolean;
}

export const useDialogContent = ({
  className = '',
  ref: propRef,
  ...restProps
}: DialogContentProps): UseDialogContextReturnType => {
  const {
    context: floatingContext,
    disablePortal,
    zIndex,
    ...context
  } = useDialogContext();
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
      ['aria-modal']: true,
      ...restProps,
      ref,
      className: useCombinedClassName({
        className: styles.root,
        overrideClassName: className,
      }),
      style: {
        ...restProps.style,
        /* the variable is predefined in the style file */
        '--cp-dialog-z-index': zIndex,
      } as CSSProperties,
      'data-status': status,
    },
    backdropProps: {
      /**
       * INFO: since we are using FloatingPortal as the parent container for everything including the backdrop.
       * Backdrop should not have a separate portal and render in the main portal of the FloatingPortal
       */
      disablePortal: true,
      open: isMounted,
      'data-status': status,
      className: styles.backdrop,
      zIndex,
    },
    disablePortal,
  };
};

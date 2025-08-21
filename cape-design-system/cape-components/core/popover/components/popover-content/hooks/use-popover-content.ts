import { type CSSProperties } from 'react';
import {
  useTransitionStatus,
  type FloatingFocusManagerProps,
  type Placement,
} from '@floating-ui/react';
import { usePopoverContext } from '../../../hooks/use-popover-context';
import styles from '../../../popover.module.scss';
import type { PopoverContentProps } from '../type';
import { useCombinedClassName } from '../../../../common/hooks';

interface UsePopoverContextReturnType {
  floatingFocusManagerProps: Pick<
    FloatingFocusManagerProps,
    | 'closeOnFocusOut'
    | 'context'
    | 'modal'
    | 'guards'
    | 'visuallyHiddenDismiss'
    | 'initialFocus'
  >;
  rootProps: {
    className?: string;
    style?: CSSProperties;
    ref?: (node: HTMLElement | null) => void;
  };
  wrapperProps: {
    className?: string;
    'data-placement': Placement;
    'data-status': string;
  };
  disablePortal?: boolean;
  isMounted?: boolean;
}

type UsePopoverContentType = Omit<PopoverContentProps, 'children'>;

export const usePopoverContent = ({
  className = '',
  initialFocus,
  ...restProps
}: UsePopoverContentType): UsePopoverContextReturnType => {
  const {
    context: floatingContext,
    disablePortal,
    closeOnFocusOut,
    zIndex,
    ...context
  } = usePopoverContext();

  const { isMounted, status } = useTransitionStatus(floatingContext);

  return {
    floatingFocusManagerProps: {
      closeOnFocusOut,
      context: floatingContext,
      modal: false,
      guards: false,
      visuallyHiddenDismiss: true,
      initialFocus,
    },
    rootProps: {
      className: useCombinedClassName({
        className: styles.content,
        overrideClassName: className,
      }),
      ref: context.refs.setFloating,
      style: {
        ...restProps.style,
        ...context.floatingStyles,
        /* the variable is predefined in the style file */
        '--cp-popover-z-index': zIndex,
      } as CSSProperties,
      ...context.getFloatingProps(restProps),
    },
    wrapperProps: {
      className: styles.wrapper,
      'data-placement': floatingContext.placement,
      'data-status': status,
      ...restProps,
    },
    disablePortal,
    isMounted,
  };
};

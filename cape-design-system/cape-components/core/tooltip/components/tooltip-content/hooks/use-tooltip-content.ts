import type { Ref, CSSProperties } from 'react';
import {
  useTransitionStatus,
  type FloatingContext,
  type Placement,
} from '@floating-ui/react';
import { useTooltipContext } from '../../../hooks/use-tooltip-context';
import type { TooltipContentProps } from '../type';
import type { TooltipProps } from '../../../type';
import { useCombinedClassName } from '../../../../common/hooks';
import styles from '../../../tooltip.module.scss';

interface UseTooltipContentReturnType {
  rootProps: {
    className?: string;
    context: FloatingContext;
    style?: CSSProperties;
    ref?: (node: HTMLElement | null) => void;
    'data-placement': Placement;
    'data-status'?: string;
    'data-color'?: TooltipProps['variant'];
    role?: string;
  };
  wrapperProps: {
    className?: string;
    'data-size'?: TooltipProps['size'];
    'data-color'?: TooltipProps['variant'];
  };
  disablePortal?: boolean;
  isMounted?: boolean;
  arrowRef: Ref<SVGSVGElement> | null;
}

type UseTooltipContentType = Omit<TooltipContentProps, 'children'>;

export const useTooltipContent = ({
  className = '',
  ...restProps
}: UseTooltipContentType): UseTooltipContentReturnType => {
  const {
    context: floatingContext,
    disablePortal,
    zIndex,
    arrowRef,
    size,
    variant,
    refs,
  } = useTooltipContext();

  const { isMounted, status } = useTransitionStatus(floatingContext);

  return {
    rootProps: {
      className: useCombinedClassName({
        className: styles.root,
        overrideClassName: className,
      }),
      context: floatingContext,
      style: {
        ...restProps.style,
        ...floatingContext.floatingStyles,
        zIndex,
      } as CSSProperties,
      ref: refs.setFloating,
      'data-placement': floatingContext.placement,
      'data-status': status,
      'data-color': variant,
      role: 'tooltip',
    },
    wrapperProps: {
      className: styles.wrapper,
      'data-size': size,
      'data-color': variant,
      ...restProps,
    },
    disablePortal,
    isMounted,
    arrowRef,
  };
};

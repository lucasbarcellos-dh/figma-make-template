import type { HTMLProps, CSSProperties, RefObject } from 'react';
import { isValidElement } from 'react';
import { useMergeRefs } from '@floating-ui/react';
import type { TooltipTriggerProps } from '../type';
import { useTooltipContext } from '../../../hooks/use-tooltip-context';

interface UseTooltipTriggerReturnType {
  rootProps: {
    className?: string;
    style?: CSSProperties;
  };
}

export const useTooltipTrigger = ({
  className = '',
  ref,
  children,
  ...props
}: TooltipTriggerProps): UseTooltipTriggerReturnType => {
  const context = useTooltipContext();
  // @ts-expect-error -- have to maintain children reference
  const childrenRef = children?.ref as RefObject<HTMLElement>;
  const mergedRef = useMergeRefs([
    context.refs.setReference,
    childrenRef,
    ref as RefObject<HTMLElement>,
  ]);
  const childProps = (
    isValidElement(children) ? children.props : {}
  ) as HTMLProps<HTMLElement>;

  return {
    rootProps: {
      className,
      ...context.getReferenceProps({
        ref: mergedRef,
        ...props,
        ...childProps,
        'data-state': context.open ? 'open' : 'closed',
      } as HTMLProps<HTMLElement>),
    },
  };
};

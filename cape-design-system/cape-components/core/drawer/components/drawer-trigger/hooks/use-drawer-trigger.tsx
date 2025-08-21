import type { CSSProperties, HTMLProps, RefObject, ForwardedRef } from 'react';
import { isValidElement } from 'react';
import { useMergeRefs } from '@floating-ui/react';
import type { DrawerTriggerProps } from '../type';
import { useDrawerContext } from '../../../hooks/use-drawer-context';

interface UseDrawerContextReturnType {
  rootProps: {
    className?: string;
    style?: CSSProperties;
  };
}

type UseDrawerContentType = DrawerTriggerProps & {
  ref?: ForwardedRef<HTMLDivElement>;
};

export const useDrawerTrigger = ({
  className = '',
  children,
  ref,
  ...restProps
}: UseDrawerContentType): UseDrawerContextReturnType => {
  const context = useDrawerContext();
  if (!children) {
    // eslint-disable-next-line no-console -- Expected warning
    console.warn('Anchor element is required in <Drawer />');
  }

  // @ts-expect-error -- have to maintain children reference
  const childrenRef = children?.ref as RefObject<HTMLElement>;
  const mergedRef = useMergeRefs([context.refs.setReference, childrenRef, ref]);
  const childProps = (
    isValidElement(children) ? children.props : {}
  ) as HTMLProps<HTMLElement>;

  return {
    rootProps: {
      ...restProps,
      ...context.getReferenceProps({
        ...childProps,
        'data-state': context.open ? 'open' : 'closed',
        ref: mergedRef,
      } as HTMLProps<HTMLElement>),
      className,
    },
  };
};

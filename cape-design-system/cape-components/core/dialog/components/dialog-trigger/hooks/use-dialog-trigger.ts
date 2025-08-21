import type { CSSProperties, HTMLProps, RefObject, ForwardedRef } from 'react';
import { isValidElement } from 'react';
import { useMergeRefs } from '@floating-ui/react';
import type { DialogTriggerProps } from '../type';
import { useDialogContext } from '../../../hooks/use-dialog-context';

interface UseDialogContextReturnType {
  rootProps: {
    className?: string;
    style?: CSSProperties;
  };
}

type UseDialogContentType = DialogTriggerProps & {
  ref?: ForwardedRef<HTMLDivElement>;
};

export const useDialogTrigger = ({
  className = '',
  children,
  ref,
  ...restProps
}: UseDialogContentType): UseDialogContextReturnType => {
  const context = useDialogContext();
  if (!children) {
    // eslint-disable-next-line no-console -- Expected warning
    console.warn('Anchor element is required in <Dialog />');
  }

  // @ts-expect-error -- have to maintain children reference
  const childrenRef = children?.ref as RefObject<HTMLElement>;
  const mergedRef = useMergeRefs([context.refs.setReference, childrenRef, ref]);
  const childProps = (
    isValidElement(children) ? children.props : {}
  ) as HTMLProps<HTMLElement>;

  return {
    rootProps: {
      className,
      ...context.getReferenceProps({
        ref: mergedRef,
        ...childProps,
        'data-state': context.open ? 'open' : 'closed',
      } as HTMLProps<HTMLElement>),
      ...restProps,
    },
  };
};

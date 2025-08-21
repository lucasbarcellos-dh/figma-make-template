import type {
  CSSProperties,
  HTMLProps,
  RefObject,
  ForwardedRef,
  FocusEventHandler,
  MouseEventHandler,
  TouchEventHandler,
} from 'react';
import { isValidElement, useState } from 'react';
import { useMergeRefs } from '@floating-ui/react';
import type { PopoverTriggerProps } from '../type';
import { usePopoverContext } from '../../../hooks/use-popover-context';

interface UsePopoverContextReturnType {
  rootProps: {
    className?: string;
    style?: CSSProperties;
    onFocus?: FocusEventHandler<HTMLElement>;
    onMouseEnter?: MouseEventHandler<HTMLElement>;
    onBlur?: FocusEventHandler<HTMLElement>;
    onMouseLeave?: MouseEventHandler<HTMLElement>;
    onTouchStart?: React.TouchEventHandler<HTMLElement>;
    onTouchEnd?: React.TouchEventHandler<HTMLElement>;
  };
}

type UsePopoverContentType = PopoverTriggerProps & {
  ref?: ForwardedRef<HTMLDivElement>;
};

export const usePopoverTrigger = ({
  className = '',
  children,
  ref,
  onFocus,
  onMouseEnter,
  onBlur,
  onMouseLeave,
  onTouchStart,
  onTouchEnd,
  ...restProps
}: UsePopoverContentType): UsePopoverContextReturnType => {
  const context = usePopoverContext();
  const [isActiveTrigger, setIsActiveTrigger] = useState<boolean>(false);

  if (!children) {
    // eslint-disable-next-line no-console -- Expected warning
    console.warn('Anchor element is required in <Popover />');
  }

  // @ts-expect-error -- have to maintain children reference
  const childrenRef = children?.ref as RefObject<HTMLElement>;
  const mergedRef = useMergeRefs([context.refs.setReference, childrenRef, ref]);
  const childProps = (
    isValidElement(children) ? children.props : {}
  ) as HTMLProps<HTMLElement>;

  const handleFocus: FocusEventHandler<HTMLDivElement> = (event) => {
    setIsActiveTrigger(true);
    onFocus?.(event);
  };

  const handleBlur: FocusEventHandler<HTMLDivElement> = (event) => {
    setIsActiveTrigger(false);
    onBlur?.(event);
  };

  const handleMouseEnter: MouseEventHandler<HTMLDivElement> = (event) => {
    setIsActiveTrigger(true);
    onMouseEnter?.(event);
  };

  const handleMouseLeave: MouseEventHandler<HTMLDivElement> = (event): void => {
    setIsActiveTrigger(false);
    onMouseLeave?.(event);
  };

  const handleTouchStart: TouchEventHandler<HTMLDivElement> = (event) => {
    setIsActiveTrigger(true);
    onTouchStart?.(event);
  };

  const handleTouchEnd: TouchEventHandler<HTMLDivElement> = (event) => {
    setIsActiveTrigger(false);
    onTouchEnd?.(event);
  };

  const updateFloatingReference = (
    isActiveTriggerVal: boolean,
  ): ((instance: HTMLElement | null) => void) | RefObject<HTMLElement> => {
    return isActiveTriggerVal
      ? (mergedRef as unknown as RefObject<HTMLElement>)
      : (context.refs.setReference as (instance: HTMLElement | null) => void);
  };

  return {
    rootProps: {
      className,
      ...context.getReferenceProps({
        ref: updateFloatingReference(isActiveTrigger),
        ...childProps,
        'data-state': context.open ? 'open' : 'closed',
      } as HTMLProps<HTMLElement>),
      onFocus: handleFocus,
      onMouseEnter: handleMouseEnter,
      onBlur: handleBlur,
      onMouseLeave: handleMouseLeave,
      onTouchStart: handleTouchStart,
      onTouchEnd: handleTouchEnd,
      'aria-haspopup': mergedRef,
      ...restProps,
    },
  };
};

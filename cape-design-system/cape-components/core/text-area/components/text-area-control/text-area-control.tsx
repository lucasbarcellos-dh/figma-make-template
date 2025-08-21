import { forwardRef } from 'react';
import type { TextAreaControlProps } from './type';
import { useTextAreaControl } from './hooks/use-text-area-control';

/**
 * TextAreaControl is a child component of TextArea and renders an HTML textarea element.
 */
export const TextAreaControl = forwardRef<
  HTMLTextAreaElement,
  TextAreaControlProps
>(({ ...restProps }, ref) => {
  const { rootProps } = useTextAreaControl({
    ...restProps,
  });

  return <textarea ref={ref} {...rootProps} />;
});

TextAreaControl.displayName = 'TextAreaControl';

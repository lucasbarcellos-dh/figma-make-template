import { forwardRef } from 'react';
import type { TextInputControlProps } from './type';
import { useTextInputControl } from './hooks/use-text-input-control';

/**
 * TextInputControl is a child component of TextInput and renders an HTML input element.
 */
export const TextInputControl = forwardRef<
  HTMLInputElement,
  TextInputControlProps
>(({ type = 'text', ...restProps }, ref) => {
  const { rootProps } = useTextInputControl({
    type,
    ...restProps,
  });

  return <input ref={ref} {...rootProps} />;
});

TextInputControl.displayName = 'TextInputControl';

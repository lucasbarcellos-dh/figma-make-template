import { forwardRef } from 'react';
import type { TextInputSlotProps } from './type';
import { useTextInputSlot } from './hooks/use-text-input-slot';

/**
 * TextInputSlot is a child component of TextInput and renders a slot after the input element.
 */
export const TextInputSlot = forwardRef<HTMLDivElement, TextInputSlotProps>(
  ({ children, ...restProps }, ref) => {
    const { rootProps } = useTextInputSlot({
      ...restProps,
    });

    return (
      <div ref={ref} {...rootProps}>
        {children}
      </div>
    );
  },
);

TextInputSlot.displayName = 'TextInputSlot';

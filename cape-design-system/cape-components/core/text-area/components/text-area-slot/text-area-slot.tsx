import { forwardRef } from 'react';
import type { TextAreaSlotProps } from './type';
import { useTextAreaSlot } from './hooks/use-text-area-slot';

/**
 * TextAreaSlot is a child component of TextArea and renders a slot before or after the area element.
 */
export const TextAreaSlot = forwardRef<HTMLDivElement, TextAreaSlotProps>(
  ({ children, ...restProps }, ref) => {
    const { rootProps } = useTextAreaSlot({
      ...restProps,
    });

    return (
      <div ref={ref} {...rootProps}>
        {children}
      </div>
    );
  },
);

TextAreaSlot.displayName = 'TextAreaSlot';

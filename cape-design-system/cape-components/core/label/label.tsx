import { forwardRef } from 'react';
import type { LabelProps } from './type';
import { useLabel } from './hooks/use-label';

const NAME = 'Label';

/**
 * Label component is used for form elements.
 *
 * @see Docs https://cape.deliveryhero.com/2bfa22855/p/83bf34-label
 */
export const Label = forwardRef<HTMLLabelElement, LabelProps>(
  (
    {
      htmlFor,
      size = 'medium',
      disabled,
      className = '',
      children,
      ...restProps
    },
    ref,
  ) => {
    const props = useLabel({
      htmlFor,
      size,
      disabled,
      className,
      ...restProps,
    });

    return (
      <label ref={ref} {...props}>
        {children}
      </label>
    );
  },
);

Label.displayName = NAME;

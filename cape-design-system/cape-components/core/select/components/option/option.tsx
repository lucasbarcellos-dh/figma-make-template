import { forwardRef } from 'react';
import type { OptionProps } from './type';

/**
 * The `Option` component is used to define an item contained in a `Select` component.
 *
 * @see Docs https://cape.deliveryhero.com/2bfa22855/p/218889-select
 */
export const Option = forwardRef<HTMLOptionElement, OptionProps>(
  ({ ...props }, ref) => {
    return <option ref={ref} {...props} />;
  },
);

Option.displayName = 'Option';

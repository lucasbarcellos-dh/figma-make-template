import { forwardRef } from 'react';
import type { CheckboxProps } from './type';
import { useCheckbox } from './hooks/use-checkbox';
import { CheckIcon } from './assets/check-icon';
import { IndeterminateIcon } from './assets/indeterminate-icon';

/**
 * Checkbox component is mostly used in forms when a user needs to select multiple values from several options.
 *
 * @see Docs https://cape.deliveryhero.com/2bfa22855/p/69a268-checkbox
 */

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      label,
      size = 'medium',
      disabled = false,
      indeterminate = false,
      readOnly = false,
      required = false,
      error = false,
      ...restProps
    },
    ref,
  ) => {
    const {
      rootProps,
      labelProps,
      containerProps,
      inputProps,
      controlProps,
      iconProps,
    } = useCheckbox({
      size,
      indeterminate,
      disabled,
      readOnly,
      required,
      error,
      ...restProps,
    });

    const Wrapper = label ? 'label' : 'span';

    return (
      <Wrapper {...rootProps}>
        <span {...containerProps}>
          <input ref={ref} {...inputProps} />
          <span {...controlProps}>
            {indeterminate ? (
              <IndeterminateIcon {...iconProps} aria-hidden="true" />
            ) : (
              <CheckIcon {...iconProps} aria-hidden="true" />
            )}
          </span>
        </span>
        {label ? <span {...labelProps}>{label}</span> : null}
      </Wrapper>
    );
  },
);

Checkbox.displayName = 'Checkbox';

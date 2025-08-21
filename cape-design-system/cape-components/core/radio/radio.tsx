import { forwardRef } from 'react';
import type { RadioProps } from './type';
import { useRadio } from './hooks/use-radio';

/**
 * Radio Component.
 *
 * @see Docs https://cape.deliveryhero.com/2bfa22855/p/832baa-radio-button
 */
export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  (
    {
      label,
      size = 'medium',
      disabled = false,
      readOnly = false,
      required = false,
      error = false,
      ...restProps
    },
    ref,
  ) => {
    const { rootProps, inputProps, labelProps, containerProps, controlProps } =
      useRadio({
        size,
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
          <span {...controlProps} />
        </span>
        {label ? <span {...labelProps}>{label}</span> : null}
      </Wrapper>
    );
  },
);

Radio.displayName = 'Radio';

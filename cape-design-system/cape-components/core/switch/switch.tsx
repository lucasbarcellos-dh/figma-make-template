import { forwardRef } from 'react';
import type { SwitchProps } from './type';
import { useSwitch } from './hooks/use-switch';

/**
 * Switch component is mostly used in forms when a user needs to change boolean state.
 *
 * @see Docs https://cape.deliveryhero.com/2bfa22855/p/39e480-switch
 */

// TODO: handle the Error state: https://jira.deliveryhero.com/browse/LD-1611
export const Switch = forwardRef<HTMLInputElement, SwitchProps>(
  (
    {
      label,
      size = 'medium',
      disabled = false,
      readOnly = false,
      required = false,
      ...restProps
    },
    ref,
  ) => {
    const {
      rootProps,
      labelProps,
      containerProps,
      inputProps,
      baseProps,
      controlProps,
    } = useSwitch({
      size,
      disabled,
      readOnly,
      required,
      ...restProps,
    });

    const Wrapper = label ? 'label' : 'span';

    return (
      <Wrapper {...rootProps}>
        <span {...containerProps}>
          <input ref={ref} {...inputProps} />
          <span {...baseProps} />
          <span {...controlProps} />
        </span>
        {label ? <span {...labelProps}>{label}</span> : null}
      </Wrapper>
    );
  },
);

Switch.displayName = 'Switch';

import { type InputHTMLAttributes, type ComponentPropsWithRef } from 'react';

interface InputProps extends Omit<ComponentPropsWithRef<'input'>, 'size'> {
  isDisabled?: boolean;
  isChecked?: boolean;
  isReadOnly?: boolean;
  isRequired?: boolean;
  isDefaultChecked?: boolean;
  ariaLabel?: string | undefined;
  ariaLabelledBy?: string | undefined;
}

export const getInputProps = (
  props: InputProps,
): InputHTMLAttributes<HTMLInputElement> => {
  return {
    type: props.type,
    name: props.name,
    value: props.value,
    defaultValue: props.defaultValue,
    placeholder: props.placeholder,
    id: props.id,
    tabIndex: props.tabIndex,
    onChange: props.onChange,
    onClick: props.onClick,
    onBlur: props.onBlur,
    onFocus: props.onFocus,
    onKeyDown: props.onKeyDown,
    onKeyUp: props.onKeyUp,
    required: props.required,
    readOnly: props.readOnly,
    checked: props.checked,
    defaultChecked: props.defaultChecked,
    disabled: props.disabled,
    'aria-label': props.ariaLabel,
    'aria-labelledby': props.ariaLabelledBy,
    'aria-disabled': props.disabled,
  };
};

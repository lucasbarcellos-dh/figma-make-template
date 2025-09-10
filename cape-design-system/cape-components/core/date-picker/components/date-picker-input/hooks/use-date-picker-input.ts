import type { MouseEvent, InputHTMLAttributes } from 'react';
import { getInputProps } from '../../../../common/utils';
import type { DatePickerInputProps } from '../type';
import { useTextInput } from '../../../../text-input/hooks/use-text-input';
import type { UseTextInputReturnType } from '../../../../text-input/hooks/use-text-input';

interface UseDatePickerInputReturnType {
  rootProps: UseTextInputReturnType['rootProps'];
  controlProps: InputHTMLAttributes<HTMLInputElement>;
  triggerProps: {
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  };
}

export const useDatePickerInput = (
  props: DatePickerInputProps,
): UseDatePickerInputReturnType => {
  const controlProps = getInputProps(props);
  const {
    name: _name,
    value: _value,
    defaultValue: _defaultValue,
    placeholder: _placeholder,
    id: _id,
    tabIndex: _tabIndex,
    onChange: _onChange,
    onClick: _onClick,
    onBlur: _onBlur,
    onFocus: _onFocus,
    onKeyDown: _onKeyDown,
    onKeyUp: _onKeyUp,
    required: _required,
    readOnly: _readOnly,
    checked: _checked,
    defaultChecked: _defaultChecked,
    onTriggerClick,
    ...restProps
  } = props;
  const { rootProps } = useTextInput(restProps);

  return {
    rootProps: {
      ...rootProps,
      disabled: props.disabled,
    },
    controlProps: {
      type: 'text',
      ...controlProps,
    },
    triggerProps: {
      onClick: onTriggerClick,
    },
  };
};

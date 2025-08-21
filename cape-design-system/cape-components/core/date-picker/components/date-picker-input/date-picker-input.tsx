import { forwardRef } from 'react';
import { DateIcon } from '@deliveryhero/cape-icons';
import { IconButton } from '../../../icon-button';
import {
  TextInput,
  TextInputControl,
  TextInputSlot,
} from '../../../text-input';
import type { TextInputControlProps } from '../../../text-input';
import { DatePickerTrigger } from '../date-picker-trigger';
import type { DatePickerInputProps } from './type';
import { useDatePickerInput } from './hooks/use-date-picker-input';

const NAME = 'DatePickerInput';

/**
 * The DatePickerInput component renders a TextInput with a Calendar icon as the date picker trigger.
 * This component accepts all the props coming from TextInput and TextInputControl.
 * @see Docs https://cape.deliveryhero.com/2bfa22855/p/8400a6-date-picker
 */
export const DatePickerInput = forwardRef<
  HTMLInputElement,
  DatePickerInputProps
>((props, ref) => {
  const { rootProps, controlProps, triggerProps } = useDatePickerInput(props);
  return (
    <TextInput {...rootProps}>
      <TextInputControl
        ref={ref}
        {...(controlProps as TextInputControlProps)}
      />
      <TextInputSlot>
        <DatePickerTrigger>
          <IconButton
            disabled={props.disabled}
            icon={<DateIcon />}
            size="small"
            {...triggerProps}
          />
        </DatePickerTrigger>
      </TextInputSlot>
    </TextInput>
  );
});

DatePickerInput.displayName = NAME;

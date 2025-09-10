import type { ComponentPropsWithRef } from 'react';
import type { PopoverProps } from '../popover';
import type { DatePickerInputProps } from './components/date-picker-input';
import type { DatePickerBodyProps } from './components/date-picker-body';

export interface DatePickerProps
  extends Omit<PopoverProps, 'role' | 'children'>,
    Omit<ComponentPropsWithRef<'div'>, 'onSelect'> {
  mode?: 'single' | 'range' | 'multiple';
  /**
   * Value of the input element (DatePickerInput). Can be also used as array
   */
  value?: DatePickerInputProps['value'] | DatePickerInputProps['value'][];
  /**
   * Callback function when the input onChange is fired.
   */
  onChange?: DatePickerInputProps['onChange'];
  /**
   * Placeholder of the input element (DatePickerInput).
   * @defaultValue 'dd.mm.yyyy'
   */
  placeholder?: DatePickerInputProps['placeholder'];
  /**
   * Callback function after a single date is selected.
   */
  onSelect?: DatePickerBodyProps['onSelect'];
  /**
   * Use to show a single selected date on controlled mode.
   */
  selected?: DatePickerBodyProps['selected'];
  /**
   * Use to disable DatePickerInput.
   */
  disabled?: boolean;
  /**
   * The month displayed in the calendar.
   *
   * @see https://daypicker.dev/docs/navigation
   */
  month?: DatePickerBodyProps['month'];
  /**
   * Event fired when the user navigates between months.
   *
   * @see https://daypicker.dev/docs/navigation#onmonthchange
   */
  onMonthChange?: DatePickerBodyProps['onMonthChange'];
}

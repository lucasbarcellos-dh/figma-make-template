import { forwardRef } from 'react';
import { PopoverTrigger } from '../../../popover';
import type { DatePickerTriggerProps } from './type';

const NAME = 'DatePickerTrigger';

/**
 * DatePickerTrigger is used within DatePicker component and triggers the picker.
 *
 * @see Docs https://cape.deliveryhero.com/2bfa22855/p/8400a6-date-picker
 */
export const DatePickerTrigger = forwardRef<
  HTMLDivElement,
  DatePickerTriggerProps
>(({ children, ...restProps }, ref) => {
  return (
    <div {...restProps}>
      <PopoverTrigger ref={ref}>{children}</PopoverTrigger>
    </div>
  );
});

DatePickerTrigger.displayName = NAME;

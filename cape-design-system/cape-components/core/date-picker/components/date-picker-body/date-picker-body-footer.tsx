import { forwardRef } from 'react';
import type { DatePickerBodyFooterProps } from './type';
import { useDatePickerBodyFooter } from './hooks/use-date-picker-body-footer';

const NAME = 'DatePickerBodyFooter';

export const DatePickerBodyFooter = forwardRef<
  HTMLDivElement,
  DatePickerBodyFooterProps
>(({ children, ...restProps }, ref) => {
  const { rootProps } = useDatePickerBodyFooter({ ...restProps });
  return (
    <div ref={ref} {...rootProps}>
      {children}
    </div>
  );
});

DatePickerBodyFooter.displayName = NAME;

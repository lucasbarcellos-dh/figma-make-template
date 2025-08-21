import { forwardRef, useRef, type ReactElement } from 'react';
import { Popover } from '../popover';
import { Stack } from '../stack';
import type { DatePickerProps } from './type';
import { useDatePicker } from './hooks/use-date-picker';
import { DatePickerContext } from './hooks/use-date-picker-context';
import { DatePickerInput } from './components/date-picker-input';
import {
  DatePickerBody,
  type RangePickerProps,
} from './components/date-picker-body';

function DateRangePickerSet(
  props: Omit<DatePickerProps, 'onSelect'> & {
    onSelect: RangePickerProps['onRangeSelect'];
  },
): ReactElement {
  const {
    onChange,
    placeholder,
    value,
    onSelect,
    selected,
    disabled,
    month,
    onMonthChange,
  } = props;

  const fromRef = useRef<HTMLInputElement>(null);
  const toRef = useRef<HTMLInputElement>(null);

  const handleDateSelect = (
    dateRange: RangePickerProps['selectedRange'],
  ): void => {
    toRef.current?.focus();
    onSelect && onSelect(dateRange);
  };
  return (
    <>
      <Stack gap={10}>
        <DatePickerInput
          disabled={disabled}
          name="start_date"
          onChange={onChange}
          placeholder={placeholder}
          ref={fromRef}
          value={Array.isArray(value) ? value[0] : ''}
        />
        <DatePickerInput
          disabled={disabled}
          name="end_date"
          onChange={onChange}
          placeholder={placeholder}
          ref={toRef}
          value={Array.isArray(value) ? value[1] : ''}
        />
      </Stack>
      <DatePickerBody
        month={month}
        onMonthChange={onMonthChange}
        onSelect={handleDateSelect}
        selected={selected}
      />
    </>
  );
}

/**
 * The Date Picker component lets users select a single date or a range of dates based on the use-case.
 * @see Docs https://cape.deliveryhero.com/2bfa22855/p/8400a6-date-picker
 */
export const DatePicker = forwardRef<HTMLDivElement, DatePickerProps>(
  (
    {
      mode = 'single',
      placement = 'bottom-end',
      placeholder = 'dd.mm.yyyy',
      children,
      offset = { mainAxis: 12, crossAxis: 12 },
      ...props
    },
    ref,
  ) => {
    const {
      value,
      onChange,
      onSelect,
      selected,
      month,
      onMonthChange,
      disabled,
      ...restProps
    } = props;
    const { rootProps, popoverProps } = useDatePicker({
      mode,
      offset,
      placement,
      ...restProps,
    });

    const contextValues: DatePickerProps = { mode };

    return (
      <DatePickerContext.Provider value={contextValues}>
        <Popover
          fallbackPlacements={[]}
          placement={placement}
          {...popoverProps}
        >
          <div {...rootProps} ref={ref}>
            {children || (
              <>
                {mode === 'range' ? (
                  <DateRangePickerSet
                    disabled={disabled}
                    month={month}
                    onChange={onChange}
                    onMonthChange={onMonthChange}
                    onSelect={onSelect as RangePickerProps['onRangeSelect']}
                    placeholder={placeholder}
                    selected={selected}
                    value={value}
                  />
                ) : (
                  <>
                    <DatePickerInput
                      disabled={disabled}
                      onChange={onChange}
                      placeholder={placeholder}
                      value={typeof value === 'string' ? value : ''}
                    />
                    <DatePickerBody
                      month={month}
                      onMonthChange={onMonthChange}
                      onSelect={onSelect}
                      selected={selected}
                    />
                  </>
                )}
              </>
            )}
          </div>
        </Popover>
      </DatePickerContext.Provider>
    );
  },
);

DatePicker.displayName = 'DatePicker';

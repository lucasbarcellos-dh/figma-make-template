import { forwardRef } from 'react';
import type { ReactElement, ReactNode } from 'react';
import {
  DayPicker,
  type DateRange,
  type DropdownProps,
  type PreviousMonthButtonProps,
  type NextMonthButtonProps,
} from 'react-day-picker';
import {
  ChevronDownMiniIcon,
  ChevronLeftMiniIcon,
  ChevronRightMiniIcon,
  ChevronUpMiniIcon,
} from '@deliveryhero/cape-icons';
import { PopoverContent } from '../../../popover';
import { useDatePickerContext } from '../../hooks/use-date-picker-context';
import { IconButton } from '../../../icon-button';
import styles from '../../date-picker.module.scss';
import type {
  DayPickerChevronProps,
  DatePickerBodyProps,
  SingleDatePickerProps,
  RangePickerProps,
  DayPickerCommonProps,
  DayPickerMonthCaptionProps,
} from './type';
import { DatePickerYearLeaf } from './date-picker-year-leaf';

const customClassNames = {
  day: styles.day,
  day_button: styles['day-button'],
  caption_label: styles['year-label'],
  outside: styles['day-outside'],
  selected: styles['selected-day'],
  today: styles.today,
  month_grid: styles['month-layout'],
  weekdays: styles.weekdays,
  root: styles['date-picker-body'],
  nav: styles.navigation,
  month_caption: styles['month-caption'],
  dropdowns: styles['dropdown-wrapper'],
  dropdown_root: styles['year-dropdown-root'],
  dropdown: styles['year-dropdown-select'],
  range_start: styles['range-start'],
  range_middle: styles['range-middle'],
  range_end: styles['range-end'],
  button_next: styles['nav-button'],
  button_previous: styles['nav-button'],
};

function CustomChevron({
  orientation = 'left',
}: DayPickerChevronProps): ReactElement {
  const chevronMap: Record<'up' | 'down' | 'left' | 'right', ReactElement> = {
    left: <ChevronLeftMiniIcon size="medium" />,
    right: <ChevronRightMiniIcon size="medium" />,
    up: <ChevronUpMiniIcon size="medium" />,
    down: <ChevronDownMiniIcon size="medium" />,
  };
  return chevronMap[orientation];
}

const getCustomComponents = (navigationHeader: ReactNode) => {
  return {
    PreviousMonthButton: (props: PreviousMonthButtonProps) => (
      <IconButton
        className={styles['nav-button']}
        icon={<ChevronLeftMiniIcon size="medium" />}
        size="medium"
        {...props}
      />
    ),
    NextMonthButton: (props: NextMonthButtonProps) => (
      <IconButton
        className={styles['nav-button']}
        icon={<ChevronRightMiniIcon size="medium" />}
        size="medium"
        {...props}
      />
    ),
    Chevron: (props: DayPickerChevronProps) => CustomChevron(props),
    MonthCaption: ({
      calendarMonth: _calendarMonth,
      displayIndex: _displayIndex,
      children,
      ...restProps
    }: DayPickerMonthCaptionProps) => {
      return (
        <div {...restProps}>
          <div>{children}</div>
          {navigationHeader ? (
            <div className={styles['header-wrapper']}>{navigationHeader}</div>
          ) : null}
        </div>
      );
    },
    Dropdown: (props: DropdownProps) => <DatePickerYearLeaf {...props} />,
  };
};

const commonProps: DayPickerCommonProps = {
  captionLayout: 'dropdown-years',
  classNames: customClassNames,
  formatters: {
    formatWeekdayName: (weekdayName: Date) =>
      weekdayName.toString().substring(0, 1),
  },
  weekStartsOn: 1,
};

function SingleDatePicker({
  onDateSelect,
  selectedDate,
  onMonthChange,
  month,
  children,
  navigationHeader,
  blocked,
  modifiers,
  modifiersClassNames,
  ...restProps
}: SingleDatePickerProps): ReactElement {
  const handleDaySelect = (date: Date | undefined): void => {
    if (onDateSelect) {
      onDateSelect(date);
    }
  };

  return (
    <DayPicker
      components={getCustomComponents(navigationHeader)}
      footer={children}
      mode="single"
      modifiers={{
        blocked,
        ...modifiers,
      }}
      modifiersClassNames={{
        blocked: styles['day-blocked'] || '',
        ...modifiersClassNames,
      }}
      month={month}
      onMonthChange={onMonthChange}
      onSelect={handleDaySelect}
      selected={selectedDate}
      {...commonProps}
      {...restProps}
    />
  );
}

function RangeDatePicker({
  onRangeSelect,
  selectedRange,
  onMonthChange,
  month,
  children,
  navigationHeader,
  blocked,
  modifiers,
  modifiersClassNames,
  ...restProps
}: RangePickerProps): ReactElement {
  const handleRangeSelect = (dateRange: DateRange | undefined): void => {
    if (onRangeSelect) {
      onRangeSelect(dateRange);
    }
  };

  return (
    <DayPicker
      components={getCustomComponents(navigationHeader)}
      footer={children}
      mode="range"
      modifiers={{
        blocked,
        ...modifiers,
      }}
      modifiersClassNames={{
        blocked: styles['day-blocked'] || '',
        ...modifiersClassNames,
      }}
      month={month}
      onMonthChange={onMonthChange}
      onSelect={handleRangeSelect}
      required={false}
      selected={selectedRange}
      {...commonProps}
      {...restProps}
    />
  );
}

export const DatePickerBody = forwardRef<HTMLDivElement, DatePickerBodyProps>(
  (
    {
      selected,
      onSelect,
      month,
      onMonthChange,
      children,
      navigationHeader,
      startMonth = new Date(2016, 0),
      endMonth = new Date(2045, 0),
      ...restProps
    },
    ref,
  ) => {
    const { mode } = useDatePickerContext();
    if (mode === 'range') {
      return (
        <PopoverContent className={styles['datepicker-popover-root']} ref={ref}>
          <RangeDatePicker
            endMonth={endMonth}
            month={month}
            navigationHeader={navigationHeader}
            onMonthChange={onMonthChange}
            onRangeSelect={onSelect as RangePickerProps['onRangeSelect']}
            selectedRange={selected as RangePickerProps['selectedRange']}
            startMonth={startMonth}
            {...restProps}
          >
            {children}
          </RangeDatePicker>
        </PopoverContent>
      );
    }
    return (
      <PopoverContent className={styles['datepicker-popover-root']} ref={ref}>
        <SingleDatePicker
          endMonth={endMonth}
          month={month}
          navigationHeader={navigationHeader}
          onDateSelect={onSelect as SingleDatePickerProps['onDateSelect']}
          onMonthChange={onMonthChange}
          selectedDate={selected as SingleDatePickerProps['selectedDate']}
          startMonth={startMonth}
          {...restProps}
        >
          {children}
        </SingleDatePicker>
      </PopoverContent>
    );
  },
);

DatePickerBody.displayName = 'DatePickerBody';

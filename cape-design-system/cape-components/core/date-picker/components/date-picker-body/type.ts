import type { PropsBase, DateRange, CalendarMonth } from 'react-day-picker';
import type { ComponentPropsWithRef, ReactNode } from 'react';

export interface SingleDatePickerProps {
  onDateSelect?: (date: Date | undefined) => void;
  selectedDate?: Date;
  month?: Date;
  startMonth?: Date;
  endMonth?: Date;
  onMonthChange?: PropsBase['onMonthChange'];
  children?: ReactNode;
  navigationHeader?: ReactNode;
  blocked?: Date[];
  modifiers?: PropsBase['modifiers'];
  modifiersClassNames?: PropsBase['modifiersClassNames'];
}

export interface RangePickerProps {
  onRangeSelect?: (dateRange: DateRange | undefined) => void;
  selectedRange?: DateRange;
  month?: Date;
  startMonth?: Date;
  endMonth?: Date;
  onMonthChange?: PropsBase['onMonthChange'];
  children?: ReactNode;
  navigationHeader?: ReactNode;
  blocked?: Date[];
  modifiers?: PropsBase['modifiers'];
  modifiersClassNames?: PropsBase['modifiersClassNames'];
}
export interface DatePickerBodyProps extends PropsBase {
  /** Callback function after a single date is selected. */
  onSelect?:
    | SingleDatePickerProps['onDateSelect']
    | RangePickerProps['onRangeSelect'];
  /** Use to show a single selected date on controlled mode */
  selected?:
    | SingleDatePickerProps['selectedDate']
    | RangePickerProps['selectedRange'];
  /** Use children for passing DatePickerBodyFooter component */
  children?: ReactNode;
  /** For showing a header element in the navigation area */
  navigationHeader?: ReactNode;
  /** An array of dates to be rendered as blocked dates in the calendar */
  blocked?: Date[];
  /**
   * Set this prop to determine **the earliest possible date to select** in the whole calendar. This date is also used in the year picker and sets the earliest year boundary.
   * @defaultValue <code>new Date(2016, 0)</code>
   */
  startMonth?: Date;
  /**
   * Set this prop to determine **the latest possible date to select** in the whole calendar. This date is also used in the year picker and sets the latest year boundary.
   * @defaultValue <code>new Date(2045, 0)</code>
   */
  endMonth?: Date;
}

export interface DayPickerChevronProps {
  className?: string;
  /**
   * The size of the chevron.
   *
   * @defaultValue 24
   */
  size?: number;
  /** Set to `true` to disable the chevron. */
  disabled?: boolean;
  /** The orientation of the chevron. */
  orientation?: 'up' | 'down' | 'left' | 'right';
}

export type DayPickerCommonProps = Pick<
  PropsBase,
  'captionLayout' | 'classNames' | 'components' | 'formatters' | 'weekStartsOn'
>;

export type DayPickerMonthCaptionProps = JSX.IntrinsicElements['div'] & {
  calendarMonth: CalendarMonth;
  displayIndex: number;
};

export type DatePickerBodyFooterProps = ComponentPropsWithRef<'div'>;

import type { ComponentPropsWithRef } from 'react';
import type {
  MarginProps,
  PaddingProps,
  WidthProps,
  DisplayProps,
  HeightProps,
  CSSBoxProps,
  BorderProps,
  BackgroundProps,
  PositionProps,
  FlexProps,
} from '../../../common/hooks';

export interface GridItemProps
  extends Omit<ComponentPropsWithRef<'div'>, 'color'>,
    MarginProps,
    PaddingProps,
    WidthProps,
    DisplayProps,
    HeightProps,
    CSSBoxProps,
    BorderProps,
    BackgroundProps,
    PositionProps,
    FlexProps {
  /**
   * The item will span for the specified number of columns for xs breakpoint
   * @defaultValue auto
   */
  xs?: number;
  /**
   * The item will span for the specified number of columns for sm breakpoint
   * @defaultValue auto
   */
  sm?: number;
  /**
   * The item will span for the specified number of columns for md breakpoint
   * @defaultValue auto
   */
  md?: number;
  /**
   * The item will span for the specified number of columns for lg breakpoint
   * @defaultValue auto
   */
  lg?: number;
  /**
   * The item will span for the specified number of columns for xl breakpoint
   * @defaultValue auto
   */
  xl?: number;
  /**
   * The item will span for the specified number of columns for xxl breakpoint
   * @defaultValue auto
   */
  xxl?: number;
}

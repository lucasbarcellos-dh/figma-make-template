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
} from '../common/hooks';

export type Breakpoints = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

type Gap = {
  [Breakpoint in Breakpoints]?: 'wide' | 'narrow' | 'condensed';
};

export interface GridProps
  extends ComponentPropsWithRef<'div'>,
    MarginProps,
    PaddingProps,
    WidthProps,
    DisplayProps,
    HeightProps,
    CSSBoxProps,
    BorderProps,
    BackgroundProps,
    PositionProps,
    Omit<FlexProps, 'gap'> {
  /**
   * Defines the spacing between grid items at different breakpoints.
   *
   * - `'wide'`: Represents wider spacing (32px).
   * - `'narrow'`: Represents narrower spacing (16px).
   * - `'condensed'`: Represents condensed spacing (1px).
   * - pixel values are also supported
   *
   * This prop accepts an object where each key represents a breakpoint (e.g., 'xs', 'sm', 'md', 'lg', 'xl', 'xxl')
   * and the value represents the spacing type at that breakpoint.
   *
   * If a breakpoint is not provided, the default spacing is assumed.
   * Example:
   *
   * ```
   * gap={{
   *   xs: 'wide',
   *   sm: 'narrow',
   *   md: 'condensed',
   *   lg: 'wide',
   *   xl: 'narrow',
   *   xxl: '40px',
   * }}
   * ```
   *
   * @defaultValue `{ xs: 'wide',   sm: 'wide',   md: 'wide',   lg: 'wide',   xl: 'wide',   xxl: 'wide' }`
   *
   * CapeCustomProp
   */
  gap?: Gap;
}

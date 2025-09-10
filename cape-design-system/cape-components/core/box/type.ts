import type { ReactNode, ComponentPropsWithRef } from 'react';
import type {
  MarginProps,
  WidthProps,
  PaddingProps,
  FlexProps,
  DisplayProps,
  HeightProps,
  BorderProps,
  BackgroundProps,
  WritingModeProps,
  CSSBoxProps,
  ColorProps,
  PositionProps,
  OpacityProps,
} from '../common/hooks';

export type BoxElementTagName =
  | 'address'
  | 'article'
  | 'aside'
  | 'blockquote'
  | 'dd'
  | 'div'
  | 'dl'
  | 'dt'
  | 'label'
  | 'fieldset'
  | 'figcaption'
  | 'figure'
  | 'footer'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'header'
  | 'li'
  | 'main'
  | 'nav'
  | 'ol'
  | 'p'
  | 'pre'
  | 'section'
  | 'ul';

export type BoxProps = Omit<ComponentPropsWithRef<BoxElementTagName>, 'color'> &
  MarginProps &
  WidthProps &
  PaddingProps &
  FlexProps &
  DisplayProps &
  HeightProps &
  BorderProps &
  BackgroundProps &
  WritingModeProps &
  CSSBoxProps &
  ColorProps &
  PositionProps &
  OpacityProps &
  Partial<{
    /**
     * The HTML element to be rendered
     * @defaultValue 'div'
     * */
    as: BoxElementTagName;
    alt: string | undefined;
    children: ReactNode;
  }>;

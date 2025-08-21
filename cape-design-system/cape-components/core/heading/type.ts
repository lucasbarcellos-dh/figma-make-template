import type { ComponentPropsWithRef, CSSProperties, ReactNode } from 'react';
import type { headingLevels, headingColorList } from './constants';

export type HeadingLevel = (typeof headingLevels)[number];
export type HeadingColor = (typeof headingColorList)[number];
export type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

type NativeHeadingProps = ComponentPropsWithRef<'h1'>;

export interface HeadingProps extends NativeHeadingProps {
  /**
   * Heading level from 1 to 6.
   * Determines both semantic HTML tag (h1–h6) and default styling.
   * @defaultValue 2
   */
  level?: HeadingLevel;

  /**
   * Typography token value to override the default variant for this heading level.
   */
  variant?: string;

  /**
   * Optional color override using CSS color or token from headingColorList.
   */
  color?: CSSProperties['color'] | HeadingColor;

  /**
   * Children content of the heading.
   */
  children?: ReactNode;
}

import type { ComponentPropsWithRef, CSSProperties, ReactNode } from 'react';
import type {
  typographyElementList,
  typographyColorList,
  typographyVariantList,
  deprecatedHeadings,
} from './constants';

type TypographyElementType = (typeof typographyElementList)[number];

/**
 * @deprecated use `Heading` component instead
 */
export type DeprecatedHeadings = (typeof deprecatedHeadings)[number];

export type TypographyProps = ComponentPropsWithRef<TypographyElementType> & {
  /**
   * The HTML element rendered as the root element of Typography component.
   * By default, all margins are removed from the element.
   */
  as: TypographyElementType;
  /**
   * Typography token value that represents typographic styles.
   */
  variant: (typeof typographyVariantList)[number];
  /**
   * Color of the typography content. Accepts CSS color values and color token names.
   * @defaultValue 'primary'
   */
  color?: CSSProperties['color'] | (typeof typographyColorList)[number];

  children?: ReactNode;
  textAlign?: CSSProperties['textAlign'];
};

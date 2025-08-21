import type { ComponentPropsWithRef } from 'react';

/**
 * Properties for an AccordionHeading component.
 */
export interface AccordionHeadingProps extends ComponentPropsWithRef<'h3'> {
  /**
   * The level of the accordion heading.
   */
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

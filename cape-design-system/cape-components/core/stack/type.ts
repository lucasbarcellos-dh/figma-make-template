import type { CSSProperties } from 'react';
import type { BoxProps } from '../box';

export interface StackProps extends Omit<BoxProps, 'alt'> {
  /**
   *  Used to control the direction of the elements in the Stack. Similar to flex-direction.
   *  @defaultValue 'row'
   */
  direction?: CSSProperties['flexDirection'];
  /**
   *  Used to control the gap between each child (equivalent to the CSS gap property).
   */
  spacing?: CSSProperties['gap'];
}

import type { ComponentPropsWithRef } from 'react';

export interface RatingProps
  extends Omit<
    ComponentPropsWithRef<'div'>,
    'onMouseEnter' | 'onMouseLeave' | 'onChange'
  > {
  /**
   * The maximum number of stars to be shown
   * @defaultValue 5
   */
  max?: number;
  /**
   * The name input block used in rating
   */
  name?: string;
  /**
   * The size of the stars
   * @defaultValue "small"
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Whether the component is readOnly or not. In the readOnly state, the stars will not be interactive
   * @defaultValue false
   */
  readOnly?: boolean;
  /**
   * Whether to show the stars in brand color or golden colour
   * @defaultValue "default"
   */
  variant?: 'branded' | 'default';
  /**
   * The rating value to be shown. This prop is to be used in a controlled mode.
   * In readOnly mode, the given rating will be shown only in increments of 0.5 precision
   * The given value will be rounded off to nearest 0.5 precision
   */
  value?: number;
  /**
   * The rating value to be shown. This prop is to be used in an uncontrolled mode.
   * Changing the value of this prop will have no effect after the component has been mounted
   */
  defaultValue?: number;
  /**
   * Optional callback to be called when a star is hovered over or focussed
   */
  onMouseEnter?: (rating: number) => void;
  /**
   * Optional callback to be called when a star is hover is removed or unfocussed
   */
  onMouseLeave?: () => void;
  /**
   * Optional callback to be called when a star is clicked
   */
  onChange?: (rating: number) => void;
  /**
   * Custom dynamic label for each rating star
   */
  setStarLabel?: (value: number) => string;
}

export interface RatingStarProps
  extends Required<Pick<RatingProps, 'readOnly'>> {
  /**
   * The rating of the star(radio).
   */
  value: number;

  /**
   * The name of the star(radio) input to link all inputs to the same selection
   */
  name: string;

  /**
   * The size of the stars
   * @defaultValue "small"
   */
  size?: 'small' | 'medium' | 'large';

  checked: boolean;

  halfFilled?: boolean;

  hover: boolean;
  /**
   * The callback to be called when a star is clicked
   */
  onChange: (rating: number) => void;
  /**
   * The callback to be called when a star is hovered over or focussed
   */
  onMouseEnter: (rating: number) => void;

  /**
   * Label for the rating star
   */
  label: string;
}

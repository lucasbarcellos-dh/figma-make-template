import type { AriaRole, ComponentPropsWithRef } from 'react';

export interface HelperTextProps extends ComponentPropsWithRef<'div'> {
  /**
   *  Used to control the visual presentation based on the current state
   *  @defaultValue 'neutral'
   */
  variant?: 'neutral' | 'error' | 'success';

  /**
   *  Used to control size of the icon and text
   *  @defaultValue 'medium'
   */
  size?: 'small' | 'medium' | 'large';

  /**
   * Controls whether an icon should be displayed at the start of the text or not.
   * @defaultValue true
   */
  icon?: boolean;

  /**
   * The ARIA role attribute of the element.
   * @defaultValue 'alert'
   */
  role?: AriaRole;
}

import type { AriaRole, ComponentPropsWithRef } from 'react';

export interface IndicatorProps extends ComponentPropsWithRef<'div'> {
  /**
   *  Aria role
   *  @defaultValue 'status'
   */
  role?: AriaRole;

  /**
   *  Used to control the visual presentation based on the current state
   *  @defaultValue 'branded'
   */
  status?: 'branded' | 'neutral' | 'error' | 'warning' | 'success' | 'subtle';
  /**
   *  Used to control the visual presentation based on the size value
   *  @defaultValue 'medium'
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Allows to provide content for the indicator.
   * The children will accept either text or an icon, depending on your use case.
   */
  children?: React.ReactNode;
}

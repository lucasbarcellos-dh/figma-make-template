import type { ComponentPropsWithRef } from 'react';

export interface StepperProps extends ComponentPropsWithRef<'ol'> {
  /**
   *  The size of the Stepper
   *  @defaultValue 'medium'
   */
  size?: 'small' | 'medium';
}

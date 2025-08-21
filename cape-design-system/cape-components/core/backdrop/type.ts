import type { ComponentPropsWithRef } from 'react';

export interface BackdropProps extends ComponentPropsWithRef<'div'> {
  /**
   *  If true, the backdrop is open.
   */
  open?: boolean;

  /**
   *  Provide a third axis to arrange content
   *  @defaultValue 1
   */
  zIndex?: number;

  /**
   * If true, the children stay within their parent DOM
   * @defaultValue false
   */
  disablePortal?: boolean;
}

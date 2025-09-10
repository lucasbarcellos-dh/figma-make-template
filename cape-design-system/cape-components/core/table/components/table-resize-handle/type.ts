import type { ComponentPropsWithRef } from 'react';

export type TableResizeHandleProps = ComponentPropsWithRef<'span'> & {
  /**
   * Indicates whether the column is being resized.
   */
  resizing?: boolean;

  /**
   * Direction of the resize handle.
   * @defaultValue 'auto'
   */
  dir?: 'auto' | 'ltr' | 'rtl';
};

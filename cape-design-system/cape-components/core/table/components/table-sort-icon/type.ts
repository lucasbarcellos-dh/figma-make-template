import type { ComponentPropsWithRef } from 'react';

export type TableSortIconProps = ComponentPropsWithRef<'svg'> & {
  /**
   * Type of the icon.
   * @defaultValue 'default'
   */
  type?: 'alphabetical' | 'numeric' | 'default';

  /**
   * Type of the order direction.
   * @defaultValue 'asc'
   */
  order?: 'asc' | 'desc';

  /**
   * Size of the icon.
   * @defaultValue 'small'
   */
  size?: 'small' | 'medium' | 'large';
};

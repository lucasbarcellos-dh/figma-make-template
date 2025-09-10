import type { ComponentPropsWithRef } from 'react';

export type TableHeaderProps = ComponentPropsWithRef<'thead'> & {
  sticky?: boolean;
};

import type { ComponentPropsWithRef, ReactNode } from 'react';

export interface TooltipContentProps extends ComponentPropsWithRef<'div'> {
  children: ReactNode;
}

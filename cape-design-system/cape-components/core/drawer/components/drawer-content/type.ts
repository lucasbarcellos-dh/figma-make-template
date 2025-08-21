import type { ComponentPropsWithRef } from 'react';

export type DrawerContentProps = ComponentPropsWithRef<'div'>;

export type Status = 'unmounted' | 'initial' | 'open' | 'close';

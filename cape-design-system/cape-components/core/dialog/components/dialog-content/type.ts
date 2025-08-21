import type { ComponentPropsWithRef } from 'react';

export type DialogContentProps = ComponentPropsWithRef<'div'>;

export type Status = 'unmounted' | 'initial' | 'open' | 'close';

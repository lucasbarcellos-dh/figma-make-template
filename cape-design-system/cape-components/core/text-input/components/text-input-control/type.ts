import type { ComponentPropsWithRef } from 'react';

export interface TextInputControlProps
  extends Omit<ComponentPropsWithRef<'input'>, 'size' | 'width'> {
  /**
   * Type of the input element.
   * @defaultValue text
   */
  type?:
    | 'text'
    | 'email'
    | 'tel'
    | 'number'
    | 'url'
    | 'password'
    | 'search'
    | 'date'
    | 'datetime-local'
    | 'month'
    | 'week'
    | 'time'
    | 'datetime';
}

import { type MouseEvent } from 'react';
import type {
  TextInputControlProps,
  TextInputProps,
} from '../../../text-input';

export interface DatePickerInputProps
  extends Omit<TextInputControlProps, 'type'>,
    Pick<
      TextInputProps,
      'size' | 'disabled' | 'readOnly' | 'required' | 'error'
    > {
  /**
   * Callback function when the trigger button (Calendar Icon) is clicked.
   */
  onTriggerClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

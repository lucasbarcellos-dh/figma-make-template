import type { TextInputProps } from '../../../text-input';
import type { TextInputControlProps } from '../../../text-input/components/text-input-control';

export interface SearchInputProps
  extends Omit<TextInputControlProps, 'type' | 'onChange'>,
    Pick<TextInputProps, 'size' | 'error' | 'validationState'> {
  onChange?: (value: string) => void;
  /**
   * Callback function that fires when the clearButton is pressed.
   */
  onClear?: () => void;
  /**
   * The accessible label for the clear button.
   * @defaultValue 'Clear search'
   */
  clearButtonLabel?: string;
}

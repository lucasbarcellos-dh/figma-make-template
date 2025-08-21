import type { TextInputProps } from './type';
import { useTextInput } from './hooks/use-text-input';
import { TextInputControl } from './components/text-input-control';
import { TextInputSlot } from './components/text-input-slot';
import { TextInputContext } from './hooks/use-text-input-context';
/**
 * A TextInput is an input field that users can type into. It has a range of options and supports several text formats including numbers.
 *
 * @see Docs https://cape.deliveryhero.com/2bfa22855/p/201640-text-input
 */
function TextInput({
  children,
  disabled,
  required,
  readOnly,
  size = 'medium',
  ...restProps
}: TextInputProps): JSX.Element {
  const { rootProps } = useTextInput({
    size,
    disabled,
    ...restProps,
  });

  const contextValues: TextInputProps = {
    disabled,
    required,
    readOnly,
    size,
  };

  return (
    <TextInputContext.Provider value={contextValues}>
      <div {...rootProps}>{children}</div>
    </TextInputContext.Provider>
  );
}

TextInput.displayName = 'TextInput';

const Root = TextInput;
const Control = TextInputControl;
const Slot = TextInputSlot;

export { Root, Control, Slot, TextInput, TextInputControl, TextInputSlot };

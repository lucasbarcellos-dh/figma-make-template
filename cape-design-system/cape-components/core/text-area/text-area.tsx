import type { TextAreaProps } from './type';
import { useTextArea } from './hooks/use-text-area';
import { TextAreaControl } from './components/text-area-control';
import { TextAreaSlot } from './components/text-area-slot';
import { TextAreaContext } from './hooks/use-text-area-context';
/**
 * A TextArea represents a multi-line plain-text editing control,
 * useful when you want to allow users to enter a sizeable amount of free-form text,
 * for example a comment on a review or feedback form.
 *
 * @see Docs https://cape.deliveryhero.com/2bfa22855/p/201640-text-area
 */
function TextArea({
  children,
  disabled,
  required,
  readOnly,
  size = 'medium',
  ...restProps
}: TextAreaProps): JSX.Element {
  const { rootProps } = useTextArea({
    size,
    disabled,
    ...restProps,
  });

  const contextValues: TextAreaProps = {
    disabled,
    required,
    readOnly,
    size,
  };

  return (
    <TextAreaContext.Provider value={contextValues}>
      <div {...rootProps}>{children}</div>
    </TextAreaContext.Provider>
  );
}

TextArea.displayName = 'TextArea';

const Root = TextArea;
const Control = TextAreaControl;
const Slot = TextAreaSlot;

export { Root, Control, Slot, TextArea, TextAreaControl, TextAreaSlot };

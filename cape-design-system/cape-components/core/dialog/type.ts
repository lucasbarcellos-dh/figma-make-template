import type { ReactNode } from 'react';

export interface DialogProps {
  /**
   * Whether the dialog is shown or not.
   * @defaultValue false
   */
  open?: boolean;

  /**
   * If true, the dialog is shown by default. This is useful when you want the dialog to be open by default without controlled usage.
   * @defaultValue false
   */
  defaultOpen?: boolean;

  /**
   * A function that is called when the open state changes.
   */
  onOpenChange?: (open: boolean) => void;

  /**
   * The children of the dialog which consumes the contexts provided by the Dialog.
   */
  children: ReactNode;

  /**
   *  Used to control layout by providing a third axis to arrange content
   *  @defaultValue 100
   */
  zIndex?: number;

  /**
   * If true, the children stay within their parent DOM
   * @defaultValue false
   */
  disablePortal?: boolean;

  /**
   * Whether to dismiss the Dialog upon clicking outside
   * @defaultValue true
   */
  closeOnOutsideClick?: boolean;

  /**
   * Whether to dismiss the Dialog upon pressing the esc key
   * @defaultValue true
   */
  closeOnEsc?: boolean;
}

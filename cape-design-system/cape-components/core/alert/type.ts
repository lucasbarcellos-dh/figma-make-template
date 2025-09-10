import type {
  AriaRole,
  ComponentPropsWithRef,
  ReactNode,
  SyntheticEvent,
} from 'react';

export interface AlertProps extends ComponentPropsWithRef<'div'> {
  /**
   * An icon to be displayed at the start of the Alert.
   */
  icon?: ReactNode;

  /**
   * The ARIA role attribute of the element.
   * @defaultValue 'alert'
   */
  role?: AriaRole;

  /**
   * Callback fired when the component requests to be closed. When provided, a close icon button is displayed that triggers the callback when clicked.
   */
  onClose?: (event: SyntheticEvent) => void;

  /**
   *  Used to control the visual presentation based on the current state
   *  @defaultValue 'branded'
   */
  variant?: 'branded' | 'info' | 'error' | 'warning' | 'success' | 'neutral';
  /**
   * A ReactNode containing action items.
   */
  action?: ReactNode;

  /**
   * Custom accessible label for the close button.
   * Useful for localization.
   * @defaultValue "Close"
   */
  closeButtonLabel?: string;
}

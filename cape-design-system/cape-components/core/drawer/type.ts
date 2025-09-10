import type { ReactNode } from 'react';

export interface DrawerProps {
  /**
   * Whether the Drawer is shown or not.
   * @defaultValue false
   */
  open?: boolean;

  /**
   * If true, the Drawer is shown by default. This is useful when you want the Drawer to be open by default without controlled usage.
   * @defaultValue false
   */
  defaultOpen?: boolean;

  /**
   * A function that is called when the open state changes.
   */
  onOpenChange?: (open: boolean) => void;

  /**
   * The children of the Drawer which consumes the contexts provided by the Drawer.
   */
  children: ReactNode;

  /**
   * Place where should appear the Drawer.
   * @defaultValue end
   */
  placement?: DrawerPlacement;

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
   * Whether to dismiss the Drawer upon clicking outside
   * @defaultValue true
   */
  closeOnOutsideClick?: boolean;

  /**
   * Whether to dismiss the Drawer upon pressing the esc key
   * @defaultValue true
   */
  closeOnEsc?: boolean;
}

export type DrawerPlacement = 'top' | 'end' | 'bottom' | 'start';

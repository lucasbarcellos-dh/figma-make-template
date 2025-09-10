import type { Placement } from '@floating-ui/react';

export interface TooltipProps {
  /**
   * The placement of the tooltip content relative to the trigger element.
   * @defaultValue 'bottom'
   */
  placement?: Placement;

  /**
   * Whether the tooltip is shown or not.
   * @defaultValue false
   */
  open?: boolean;

  /**
   * If true, the tooltip is open by default.
   * @defaultValue false
   */
  defaultOpen?: boolean;

  /**
   * Size of the tooltip.
   * @defaultValue 'medium'
   */
  size?: 'small' | 'medium';

  /**
   *  Used to control the visual presentation based on the current state
   *  @defaultValue 'default'
   */
  variant?: 'default' | 'error';

  /**
   * A function that is called when the open state changes.
   */
  onToggle?: (open: boolean) => void;

  /**
   * The distance (in px) between the anchor (trigger) element and tooltip.
   * @defaultValue 12
   */
  offset?: number;

  /**
   * Whether to dismiss the tooltip upon pressing outside of both the tooltip and the trigger.
   * @defaultValue true
   */
  closeOnOutsideClick?: boolean;

  /**
   * Whether to dismiss the tooltip upon pressing the esc key.
   * @defaultValue true
   */
  closeOnEsc?: boolean;

  /**
   * Shows the arrow in tooltip.
   * @defaultValue true
   */
  arrow?: boolean;

  /**
   * If true, the tooltip will close on hover. (NOT suitable for touch devices without hover functionality)
   * @defaultValue false
   */
  disableInteractive?: boolean;

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
   * The children of the tooltip which consumes the contexts provided by the Tooltip.
   */
  children: React.ReactNode;

  /**
   * This describes an explicit array of placements to try if the initial placement doesn’t fit on the axes in which overflow is checked.
   * NOTE: Must maintain the order of placements based on priority.
   *
   * @defaultValue ['bottom-start', 'bottom-end', 'top-start', 'top-end']
   */
  fallbackPlacements?: Placement[];
}

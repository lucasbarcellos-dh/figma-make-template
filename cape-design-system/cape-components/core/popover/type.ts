import type {
  OffsetOptions,
  Placement,
  UseRoleProps,
} from '@floating-ui/react';

export interface PopoverProps {
  /**
   * Whether the popover is shown or not.
   * @defaultValue false
   */
  open?: boolean;

  /**
   * If true, the popover is shown by default. This is useful when you want the popover to be open by default without controlled usage.
   * Note: This prop when set to `true` along with more than one trigger will cause the popover to open aligned to the last rendered trigger.
   * @defaultValue false
   */
  defaultOpen?: boolean;

  /**
   * A function that is called when the open state changes.
   */
  onOpenChange?: (open: boolean) => void;

  /**
   * The placement of the floating element relative to the reference element.
   * @defaultValue 'bottom'
   */
  placement?: Placement;

  /**
   * The children of the popover which consumes the contexts provided by the Popover.
   */
  children: React.ReactNode;

  /**
   *  Aria role
   *  @defaultValue 'menu'
   */
  role?: UseRoleProps['role'];

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
   * The interaction that triggers the popover:
   * - hover?: means the popover will open when you hover with mouse or focus with keyboard on the popover trigger
   * - click?: means the popover will open on click or press Space on keyboard
   * @defaultValue click
   */
  triggerType?: 'click' | 'hover';

  /**
   * The distance (in px) between the anchor element and popover.
   * @defaultValue 12
   */
  offset?: OffsetOptions;

  /**
   * Whether to dismiss the floating element upon pressing outside of both the floating and reference elements.
   * @defaultValue true
   */
  closeOnOutsideClick?: boolean;

  /**
   * Whether to dismiss the floating element upon pressing the esc key.
   * @defaultValue true
   */
  closeOnEsc?: boolean;

  /**
   * Determines whether focusout event listeners that control whether the floating element should be closed if the focus moves outside of it are attached to the reference and floating elements.
   * @defaultValue false
   */
  closeOnFocusOut?: boolean;

  /**
   * This describes an explicit array of placements to try if the initial placement doesn’t fit on the axes in which overflow is checked.
   * NOTE: Must maintain the order of placements based on priority.
   *
   * @defaultValue ['bottom-start', 'bottom-end', 'top-start', 'top-end']
   */
  fallbackPlacements?: Placement[];
}

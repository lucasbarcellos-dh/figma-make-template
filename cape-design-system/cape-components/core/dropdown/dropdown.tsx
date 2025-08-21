import { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import { useOutsideClick } from '../hooks/use-outside-click';
import type { DropdownProps } from './type';
import { useDropdown } from './hooks/use-dropdown';
import type { DropdownContextType } from './hooks/use-dropdown-context';
import { DropdownContext } from './hooks/use-dropdown-context';
import { DropdownTrigger } from './components/dropdown-trigger';
import { DropdownBody } from './components/dropdown-body';

const NAME = 'Dropdown';

/**
 * Dropdown component.
 *
 * @see Docs https://cape.deliveryhero.com/2bfa22855/p/849338-dropdown
 */
const Dropdown = forwardRef<HTMLDetailsElement, DropdownProps>(
  (
    {
      disabled = false,
      open,
      className = '',
      onToggle,
      onOutsideClick,
      closeOnOutsideClick = true,
      children,
      ...restProps
    },
    ref,
  ) => {
    const [internalOpen, setInternalOpen] = useState<boolean>(open || false);
    const [dropdownTrigger, setDropdownTrigger] = useState<string>();
    const dropdownRef = useRef<HTMLDetailsElement>(null);

    useImperativeHandle(
      ref,
      () => {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- We are making sure that ref is handled.
        return dropdownRef.current!;
      },
      [],
    );

    const { ...props } = useDropdown({
      disabled,
      className,
      onToggle,
      ...restProps,
    });

    const openDropdown = (): void => {
      setInternalOpen(true);
    };

    const closeDropdown = (): void => {
      setInternalOpen(false);
    };

    const toggleDropdown = (): void => {
      setInternalOpen((prevOpen) => !prevOpen);
    };

    const setTrigger = (trigger: string): void => {
      setDropdownTrigger(trigger);
    };

    const contextValues: DropdownContextType = {
      open: internalOpen || false,
      disabled,
      trigger: dropdownTrigger,
      openDropdown,
      closeDropdown,
      toggleDropdown,
      setTrigger,
    };

    const handleToggle = (event: {
      currentTarget: { open: boolean };
    }): void => {
      setInternalOpen(event.currentTarget.open);
      onToggle?.();
    };

    useOutsideClick(
      dropdownRef,
      () => {
        closeDropdown();
        onOutsideClick?.();
      },
      closeOnOutsideClick && internalOpen,
    );

    return (
      <DropdownContext.Provider value={contextValues}>
        <details
          ref={dropdownRef}
          {...props}
          className={props.className}
          onToggle={handleToggle}
          open={internalOpen}
        >
          {children}
        </details>
      </DropdownContext.Provider>
    );
  },
);

Dropdown.displayName = NAME;

const Root = Dropdown;
const Trigger = DropdownTrigger;
const Body = DropdownBody;

export { Dropdown, Root, Trigger, Body, DropdownTrigger, DropdownBody };

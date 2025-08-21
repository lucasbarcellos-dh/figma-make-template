import { render, screen, fireEvent } from '@testing-library/react';
import { expect, describe, it, vi } from 'vitest';
import { userEvent } from '@testing-library/user-event';
import { createRef } from 'react';
import { Dropdown } from '../dropdown';
import { DropdownTrigger } from '../components/dropdown-trigger';
import { DropdownBody } from '../components/dropdown-body';
import type { DropdownProps } from '../type';

interface RenderDropdownReturnType {
  dropdownElement: HTMLDetailsElement;
  dropdownTrigger: HTMLElement;
  dropdownBody: HTMLElement;
}

function renderDropdown(
  props?: Partial<DropdownProps>,
): RenderDropdownReturnType {
  render(
    <Dropdown data-testid="dropdown" {...props}>
      <DropdownTrigger>Trigger</DropdownTrigger>
      <DropdownBody>Body</DropdownBody>
    </Dropdown>,
  );

  const dropdownElement: HTMLDetailsElement = screen.getByTestId('dropdown');
  const dropdownTrigger: HTMLElement = screen.getByText('Trigger');
  const dropdownBody: HTMLElement = screen.getByText('Body');

  return { dropdownElement, dropdownTrigger, dropdownBody };
}

describe('<Dropdown />', () => {
  it('renders the dropdown', () => {
    const { dropdownElement, dropdownTrigger, dropdownBody } = renderDropdown();

    expect(dropdownElement).toBeInTheDocument();
    expect(dropdownTrigger).toBeInTheDocument();
    expect(dropdownBody).toBeInTheDocument();
  });

  it('toggles the dropdown on click', () => {
    const { dropdownElement, dropdownTrigger } = renderDropdown();
    fireEvent.click(dropdownTrigger);
    expect(dropdownElement).toHaveAttribute('open');
    fireEvent.click(dropdownTrigger);
    expect(dropdownElement).not.toHaveAttribute('open');
  });

  it('closes the dropdown on click outside', async () => {
    const { dropdownElement, dropdownTrigger } = renderDropdown();
    await userEvent.click(dropdownTrigger);
    expect(dropdownElement).toHaveAttribute('open');
    await userEvent.click(document.body);
    expect(dropdownElement).not.toHaveAttribute('open');
  });

  it('does not close the dropdown on click outside when disabled', async () => {
    const { dropdownElement, dropdownTrigger } = renderDropdown({
      disabled: true,
    });
    expect(dropdownElement).toHaveAttribute('disabled');
    await expect(() => userEvent.click(dropdownTrigger)).rejects.toThrow(
      /pointer-events: none/,
    );
    expect(dropdownElement).not.toHaveAttribute('open');
  });

  it('fires onToggle event when dropdown is toggled', async () => {
    // @ts-expect-error-next-line -- TBF.
    const onToggleMock: jest.Mock = vi.fn();
    const { dropdownElement, dropdownTrigger } = renderDropdown({
      onToggle: onToggleMock,
    });

    await userEvent.click(dropdownTrigger);
    expect(dropdownElement).toHaveAttribute('open');

    await userEvent.click(dropdownTrigger);
    expect(dropdownElement).not.toHaveAttribute('open');
    expect(onToggleMock).toHaveBeenCalledTimes(2);
  });

  it('fires onOutsideClick event on outside click', async () => {
    // @ts-expect-error-next-line -- TBF.
    const onOutsideClickMock: jest.Mock = vi.fn();
    const { dropdownElement, dropdownTrigger } = renderDropdown({
      onOutsideClick: onOutsideClickMock,
    });

    await userEvent.click(dropdownTrigger);

    expect(dropdownElement).toHaveAttribute('open');
    await userEvent.click(document.body);

    expect(onOutsideClickMock).toHaveBeenCalledTimes(1);
  });

  it('passes ref correctly', () => {
    const ref = createRef<HTMLDetailsElement>();
    const { dropdownElement } = renderDropdown({ ref });
    expect(ref.current).toBe(dropdownElement);
    expect(dropdownElement).toBeInstanceOf(HTMLDetailsElement);
  });

  it('does not close the dropdown on click outside when onOutsideClick is set to false', async () => {
    const { dropdownElement, dropdownTrigger } = renderDropdown({
      closeOnOutsideClick: false,
    });

    await userEvent.click(dropdownTrigger);
    expect(dropdownElement).toHaveAttribute('open');

    await userEvent.click(document.body);
    expect(dropdownElement).toHaveAttribute('open');
  });

  it('sets custom class name', () => {
    const customClassName = 'custom-class';
    const { dropdownElement } = renderDropdown({
      className: customClassName,
    });
    expect(dropdownElement).toHaveClass(customClassName);
  });
});

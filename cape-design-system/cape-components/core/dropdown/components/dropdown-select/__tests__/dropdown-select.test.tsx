import { render, screen } from '@testing-library/react';
import { expect, describe, it } from 'vitest';
import { DropdownSelect } from '../dropdown-select';
import { Dropdown } from '../../../dropdown';
import { DropdownTrigger } from '../../dropdown-trigger';
import { DropdownBody } from '../../dropdown-body';
import { DropdownSelectValue } from '../dropdown-select-value';
import type { DropdownSelectProps } from '../type';
import { DropdownSelectSlot } from '../dropdown-select-slot';

interface RenderDropdownReturnType {
  dropdownElement: HTMLDetailsElement;
  dropdownTrigger: HTMLElement;
  dropdownSelect: HTMLElement;
  dropdownBody: HTMLElement;
  dropdownSelectSlot: HTMLElement;
}

function renderDropdown(
  props?: Partial<DropdownSelectProps>,
): RenderDropdownReturnType {
  render(
    <Dropdown data-testid="dropdown">
      <DropdownTrigger data-testid="dropdown-trigger">
        <DropdownSelect data-testid="dropdown-select" {...props}>
          {props?.children}
          <DropdownSelectSlot
            className="slot"
            data-testid="dropdown-select-slot"
          >
            &
          </DropdownSelectSlot>
        </DropdownSelect>
      </DropdownTrigger>
      <DropdownBody>Body</DropdownBody>
    </Dropdown>,
  );

  const dropdownElement: HTMLDetailsElement = screen.getByTestId('dropdown');
  const dropdownTrigger: HTMLElement = screen.getByTestId('dropdown-trigger');
  const dropdownSelect: HTMLElement = screen.getByTestId('dropdown-select');
  const dropdownSelectSlot: HTMLElement = screen.getByTestId(
    'dropdown-select-slot',
  );
  const dropdownBody: HTMLElement = screen.getByText('Body');

  return {
    dropdownElement,
    dropdownTrigger,
    dropdownSelect,
    dropdownBody,
    dropdownSelectSlot,
  };
}

describe('<DropdownSelect />', () => {
  it('renders component correctly', () => {
    const { dropdownSelect, dropdownSelectSlot } = renderDropdown({
      children: <DropdownSelectValue placeholder="Placeholder" />,
    });

    expect(dropdownSelect).toBeInTheDocument();
    expect(dropdownSelect).toHaveTextContent('Placeholder');
    expect(dropdownSelectSlot).toBeInTheDocument();
  });

  it('displays the value when children are passed', () => {
    const { dropdownSelect } = renderDropdown({
      children: (
        <DropdownSelectValue placeholder="Placeholder">
          Select Value
        </DropdownSelectValue>
      ),
    });

    expect(dropdownSelect).toHaveTextContent('Select Value');
  });

  it('displays the correct size', () => {
    const { dropdownSelect } = renderDropdown({
      size: 'small',
    });

    expect(dropdownSelect).toHaveAttribute('data-size', 'small');
  });

  it('applies the correct class names', () => {
    const className = 'custom-class';
    const { dropdownSelect } = renderDropdown({
      className,
    });

    expect(dropdownSelect).toHaveClass(className);
  });

  it('applies the correct class names to the slot', () => {
    const { dropdownSelectSlot } = renderDropdown();

    expect(dropdownSelectSlot).toHaveClass('slot');
  });
});

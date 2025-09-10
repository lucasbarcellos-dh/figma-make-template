import { render, screen } from '@testing-library/react';
import { expect, describe, it } from 'vitest';
import { DropdownTrigger } from '../dropdown-trigger';
import { Dropdown } from '../../../dropdown';

describe('<DropdownTrigger />', () => {
  it('renders component correctly', () => {
    render(
      <Dropdown>
        <DropdownTrigger data-testid="dropdown-trigger">
          Trigger
        </DropdownTrigger>
      </Dropdown>,
    );

    const dropdownTrigger: HTMLElement = screen.getByTestId('dropdown-trigger');
    expect(dropdownTrigger).toBeInTheDocument();
  });

  it('applies the correct class names', () => {
    render(
      <Dropdown>
        <DropdownTrigger className="custom-class">Trigger</DropdownTrigger>
      </Dropdown>,
    );

    const dropdownTrigger: HTMLElement = screen.getByText('Trigger');
    expect(dropdownTrigger).toHaveClass('custom-class');
  });
});

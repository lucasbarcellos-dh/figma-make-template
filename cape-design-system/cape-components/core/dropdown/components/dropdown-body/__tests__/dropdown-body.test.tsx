import { render, screen } from '@testing-library/react';
import { expect, describe, it } from 'vitest';
import { DropdownBody } from '../dropdown-body';

describe('<DropdownBody />', () => {
  it('renders component correctly', () => {
    render(<DropdownBody data-testid="dropdown-body">Content</DropdownBody>);

    const dropdownBody: HTMLElement = screen.getByTestId('dropdown-body');
    expect(dropdownBody).toBeInTheDocument();
  });

  it('applies the correct class names', () => {
    render(<DropdownBody className="custom-class">Content</DropdownBody>);

    const dropdownBody: HTMLElement = screen.getByText('Content');
    expect(dropdownBody).toHaveClass('custom-class');
  });
});

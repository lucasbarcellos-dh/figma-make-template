import { render, screen } from '@testing-library/react';
import { expect, describe, it } from 'vitest';
import { TabSlot } from '../tab-slot';

describe('Tab Content Component', () => {
  it('renders without crashing', () => {
    render(<TabSlot data-testid="tabs" />);
    const element = screen.getByTestId('tabs');
    expect(element).toBeInTheDocument();
  });

  it('renders as `div` by default', () => {
    render(<TabSlot data-testid="tabs" />);
    const element = screen.getByTestId('tabs');
    expect(element.tagName).toBe('DIV');
  });

  it('renders with custom class', () => {
    render(<TabSlot className="custom-class" data-testid="tabs" />);
    const element = screen.getByTestId('tabs');
    expect(element).toHaveClass('custom-class');
  });
});

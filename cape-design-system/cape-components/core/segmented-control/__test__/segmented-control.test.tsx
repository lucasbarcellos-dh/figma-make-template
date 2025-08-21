import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { expect, describe, it, vi } from 'vitest';
import { SegmentedControl } from '../segmented-control';
import { SegmentedControlItem } from '../components/segmented-control-item';

describe('<SegmentedControl />', () => {
  it('renders without crashing', () => {
    render(<SegmentedControl data-testid="segmented-control" />);
    const element = screen.getByTestId('segmented-control');
    expect(element).toBeInTheDocument();
  });

  it('renders as `div` by default', () => {
    render(<SegmentedControl data-testid="segmented-control" />);
    const element = screen.getByTestId('segmented-control');
    expect(element.tagName).toBe('DIV');
  });

  it('renders with custom class', () => {
    render(
      <SegmentedControl
        className="custom-class"
        data-testid="segmented-control"
      />,
    );
    const element = screen.getByTestId('segmented-control');
    expect(element).toHaveClass('custom-class');
  });

  it('renders children correctly', () => {
    render(
      <SegmentedControl data-testid="segmented-control">
        <SegmentedControlItem value="1">Button 1</SegmentedControlItem>
      </SegmentedControl>,
    );
    const element = screen.getByText('Button 1');
    expect(element).toBeInTheDocument();
  });

  it('switches active state when clicked', async () => {
    const mockOnChange = vi.fn();
    render(
      <SegmentedControl
        data-testid="segmented-control"
        defaultValue="1"
        onChange={mockOnChange}
      >
        <SegmentedControlItem value="1">Button 1</SegmentedControlItem>
        <SegmentedControlItem value="2">Button 2</SegmentedControlItem>
      </SegmentedControl>,
    );
    const user = userEvent.setup();
    const buttonElement = screen.getByRole('button', { name: 'Button 2' });
    await user.click(buttonElement);
    expect(mockOnChange).toHaveBeenCalledWith('2');
    await waitFor(() => {
      expect(buttonElement).toHaveAttribute('data-active', 'true');
    });
  });
});

import { expect, describe, it, vi } from 'vitest';
import { render, screen, renderHook } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { useRef } from 'react';
import { Chip } from '../chip';

describe('Chip', () => {
  it('should render without crashing', () => {
    render(<Chip data-testid="chip" />);

    const testChip: HTMLElement = screen.getByTestId('chip');
    expect(testChip).toBeInTheDocument();
  });

  it('renders with a label', () => {
    render(<Chip label="Test Label" />);
    expect(screen.getByText('Test Label')).toBeInTheDocument();
  });

  it('should forward the ref', () => {
    const { result } = renderHook(() => useRef<HTMLDivElement>(null));
    render(<Chip ref={result.current} />);
    expect(result.current.current).toBeInTheDocument();
  });

  it('renders startIcon if provided', () => {
    render(<Chip label="Test Label" startIcon={<span>Start</span>} />);
    expect(screen.getByText('Start')).toBeInTheDocument();
  });

  it('renders endIcon if provided', () => {
    render(<Chip endIcon={<span>End</span>} label="Test Label" />);
    expect(screen.getByText('End')).toBeInTheDocument();
  });

  it('handles onSelectionChange events when chip is clicked', async () => {
    const view = userEvent.setup();
    const handleClick = vi.fn();
    render(<Chip label="Test Label" onSelectionChange={handleClick} />);

    const chip = screen.getByRole('button');
    await view.click(chip);

    expect(handleClick).toHaveBeenCalled();
  });

  it('onSelectionChange event should not triggers when delete button is clicked', async () => {
    const view = userEvent.setup();

    const handleOnChange = vi.fn();
    const handleOnDelete = vi.fn();

    render(
      <Chip
        label="Test Label"
        onDelete={handleOnDelete}
        onSelectionChange={handleOnChange}
      />,
    );

    const chipDeleteButton = screen.getByTestId('chip-delete-btn');
    await view.click(chipDeleteButton);

    expect(handleOnDelete).toHaveBeenCalled();
    expect(handleOnChange).not.toHaveBeenCalled();
  });

  it('trigger onSelectionChange events when Space bar is pressed', async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();
    render(<Chip label="Test chip" onSelectionChange={handleChange} />);

    const chip = screen.getByRole('button');

    chip.focus();
    await user.type(chip, ' ', { skipClick: true });

    expect(handleChange).toHaveBeenCalled();
  });
});

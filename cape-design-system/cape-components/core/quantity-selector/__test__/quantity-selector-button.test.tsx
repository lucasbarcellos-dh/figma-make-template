import { render, screen } from '@testing-library/react';
import { expect, describe, it, vi, type Mock } from 'vitest';
import { QuantitySelectorButton } from '../components/quantity-selector-button';
import { useQuantitySelectorContext } from '../hooks/use-quantity-selector-context';

vi.mock('../hooks/use-quantity-selector-context', () => ({
  useQuantitySelectorContext: vi.fn(),
}));

(useQuantitySelectorContext as Mock).mockReturnValue({ size: 'medium' });

describe('QuantitySelectorButton', () => {
  it('renders with the correct icon for increment action', () => {
    render(<QuantitySelectorButton action="increment" />);

    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByLabelText('Increment Icon')).toBeInTheDocument();
  });

  it('renders with the correct icon for decrement action', () => {
    render(<QuantitySelectorButton action="decrement" />);

    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByLabelText('Decrement Icon')).toBeInTheDocument();
  });

  it('renders with the correct icon for delete action', () => {
    render(<QuantitySelectorButton action="delete" />);

    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByLabelText('Delete Icon')).toBeInTheDocument();
  });

  it('overrides the default icon when a custom icon is provided', () => {
    const CustomIcon = () => <svg data-testid="custom-icon" />;

    render(<QuantitySelectorButton action="increment" icon={<CustomIcon />} />);

    expect(screen.getByTestId('custom-icon')).toBeInTheDocument();
  });

  it('applies the correct size mapping based on the context size', () => {
    const sizeMappings = {
      small: 'xsmall',
      medium: 'small',
      large: 'medium',
    };

    Object.entries(sizeMappings).forEach(([contextSize, expectedSize]) => {
      (useQuantitySelectorContext as jest.Mock).mockReturnValue({
        size: contextSize,
      });

      const { unmount } = render(<QuantitySelectorButton action="increment" />);

      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('data-size', expectedSize); // Assuming `IconButton` passes size as `data-size`
      unmount();
    });
  });

  it('forwards ref to the underlying IconButton', () => {
    const ref = { current: null };
    (useQuantitySelectorContext as jest.Mock).mockReturnValue({
      size: 'medium',
    });

    render(<QuantitySelectorButton action="increment" ref={ref} />);

    expect(ref.current).not.toBeNull();
  });
});

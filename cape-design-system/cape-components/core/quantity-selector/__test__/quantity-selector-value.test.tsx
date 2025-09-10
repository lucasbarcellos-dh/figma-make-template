import { render, screen } from '@testing-library/react';
import { expect, describe, it, vi, type Mock } from 'vitest';
import { useQuantitySelectorContext } from '../hooks/use-quantity-selector-context';
import { QuantitySelectorValue } from '../components/quantity-selector-value';

vi.mock('../hooks/use-quantity-selector-context', () => ({
  useQuantitySelectorContext: vi.fn(),
}));

(useQuantitySelectorContext as Mock).mockReturnValue({ size: 'medium' });

describe('QuantitySelectorValue', () => {
  it('renders without crashing', () => {
    render(
      <QuantitySelectorValue data-testid="quantity-selector">
        1
      </QuantitySelectorValue>,
    );
    expect(screen.getByText('1')).toBeInTheDocument();
  });
});

import { render, screen } from '@testing-library/react';
import { expect, describe, it, vi } from 'vitest';
import { DatePicker } from '../date-picker';

vi.mock('../../common/hooks/use-media-query', () => ({
  useMediaQuery: () => true,
}));

describe('DatePicker Component', () => {
  it('renders without crashing', () => {
    render(<DatePicker data-testid="date-picker" />);
    const element = screen.getByTestId('date-picker');
    expect(element).toBeInTheDocument();
  });

  it('renders RangePicker without crashing', () => {
    render(<DatePicker data-testid="date-picker" mode="range" />);
    const element = screen.getByTestId('date-picker');
    expect(element).toBeInTheDocument();
  });

  it('renders as `div` by default', () => {
    render(<DatePicker data-testid="date-picker" />);
    const element = screen.getByTestId('date-picker');
    expect(element.tagName).toBe('DIV');
  });

  it('renders with custom class', () => {
    render(<DatePicker className="custom-class" data-testid="date-picker" />);
    const element = screen.getByTestId('date-picker');
    expect(element).toHaveClass('custom-class');
  });
});

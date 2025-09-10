import { render, screen } from '@testing-library/react';
import { expect, describe, it } from 'vitest';
import { TextInput } from '../text-input';

describe('TextInput Component', () => {
  it('renders without crashing', () => {
    render(<TextInput data-testid="text-input" />);
    const element = screen.getByTestId('text-input');
    expect(element).toBeInTheDocument();
  });

  it('renders with custom class', () => {
    render(<TextInput className="custom-class" data-testid="text-input" />);
    const element = screen.getByTestId('text-input');
    expect(element).toHaveClass('custom-class');
  });

  it('applies system props correctly', () => {
    render(
      <TextInput
        data-testid="text-input"
        style={{ margin: 10, padding: 50 }}
      />,
    );
    const element = screen.getByTestId('text-input');
    expect(element).toHaveStyle({
      margin: '10px',
      padding: '50px',
    });
  });
});

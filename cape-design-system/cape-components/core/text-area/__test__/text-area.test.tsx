import { render, screen } from '@testing-library/react';
import { expect, describe, it } from 'vitest';
import { TextArea, TextAreaSlot } from '../text-area';

describe('TextArea Component', () => {
  it('renders without crashing', () => {
    render(<TextArea data-testid="text-input" />);
    const element = screen.getByTestId('text-input');
    expect(element).toBeInTheDocument();
  });

  it('renders with custom class', () => {
    render(<TextArea className="custom-class" data-testid="text-input" />);
    const element = screen.getByTestId('text-input');
    expect(element).toHaveClass('custom-class');
  });

  it('applies system props correctly', () => {
    render(
      <TextArea data-testid="text-input" style={{ margin: 10, padding: 50 }} />,
    );
    const element = screen.getByTestId('text-input');
    expect(element).toHaveStyle({
      margin: '10px',
      padding: '50px',
    });
  });

  it('renders slot inside', () => {
    render(
      <TextArea data-testid="text-input" style={{ margin: 10, padding: 50 }}>
        <TextAreaSlot>Test Child</TextAreaSlot>
      </TextArea>,
    );
    const element = screen.getByText('Test Child');
    expect(element).toBeInTheDocument();
  });
});

import { render, screen } from '@testing-library/react';
import { expect, describe, it, vi } from 'vitest';
import { TextInputControl } from '../text-input-control';

vi.mock('../../../hooks/use-text-input-context', () => ({
  useTextInputContext: () => <TextInputControl />,
}));
describe('TextInput Component', () => {
  it('renders without crashing', () => {
    render(<TextInputControl data-testid="text-input-control" />);
    const element = screen.getByTestId('text-input-control');
    expect(element).toBeInTheDocument();
  });

  it('renders as an HTML input element', () => {
    render(<TextInputControl data-testid="text-input-control" />);
    const element = screen.getByTestId('text-input-control');
    expect(element.tagName).toBe('INPUT');
  });

  it('renders a placeholder string passed as a prop', () => {
    render(<TextInputControl placeholder="Test Placeholder" />);
    const element = screen.getByPlaceholderText('Test Placeholder');
    expect(element).toBeInTheDocument();
  });
});

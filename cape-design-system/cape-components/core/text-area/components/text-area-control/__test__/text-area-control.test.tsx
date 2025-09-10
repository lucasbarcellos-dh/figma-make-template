import { render, screen } from '@testing-library/react';
import { expect, describe, it, vi } from 'vitest';
import { TextAreaControl } from '../text-area-control';

vi.mock('../../../hooks/use-text-area-context', () => ({
  useTextAreaContext: () => <TextAreaControl />,
}));
describe('TextArea Component', () => {
  it('renders without crashing', () => {
    render(<TextAreaControl data-testid="text-area-control" />);
    const element = screen.getByTestId('text-area-control');
    expect(element).toBeInTheDocument();
  });

  it('renders as an HTML textarea element', () => {
    render(<TextAreaControl data-testid="text-area-control" />);
    const element = screen.getByTestId('text-area-control');
    expect(element.tagName).toBe('TEXTAREA');
  });

  it('renders a placeholder string passed as a prop', () => {
    render(<TextAreaControl placeholder="Test Placeholder" />);
    const element = screen.getByPlaceholderText('Test Placeholder');
    expect(element).toBeInTheDocument();
  });
});

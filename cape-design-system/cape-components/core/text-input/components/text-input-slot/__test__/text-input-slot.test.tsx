import { render, screen } from '@testing-library/react';
import { expect, describe, it, vi } from 'vitest';
import { TextInputSlot } from '../text-input-slot';
import { TextInput } from '../../../text-input';

vi.mock('../../../hooks/use-text-input-context', () => ({
  useTextInputContext: () => <TextInput />,
}));
describe('TextInputSlot Component', () => {
  it('renders without crashing', () => {
    render(<TextInputSlot data-testid="text-input-slot" />);
    const element = screen.getByTestId('text-input-slot');
    expect(element).toBeInTheDocument();
  });

  it('renders as an div element', () => {
    render(<TextInputSlot data-testid="text-input-slot" />);
    const element = screen.getByTestId('text-input-slot');
    expect(element.tagName).toBe('DIV');
  });

  it('renders the children without crashing', () => {
    render(<TextInputSlot>Test Child</TextInputSlot>);
    const element = screen.getByText('Test Child');
    expect(element).toBeInTheDocument();
  });
});

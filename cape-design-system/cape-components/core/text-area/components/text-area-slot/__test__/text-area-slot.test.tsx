import { render, screen } from '@testing-library/react';
import { expect, describe, it, vi } from 'vitest';
import { TextAreaSlot } from '../text-area-slot';
import { TextArea } from '../../../text-area';

vi.mock('../../../hooks/use-text-area-context', () => ({
  useTextAreaContext: () => <TextArea />,
}));
describe('TextAreaSlot Component', () => {
  it('renders without crashing', () => {
    render(<TextAreaSlot data-testid="text-area-slot" />);
    const element = screen.getByTestId('text-area-slot');
    expect(element).toBeInTheDocument();
  });

  it('renders as an div element', () => {
    render(<TextAreaSlot data-testid="text-area-slot" />);
    const element = screen.getByTestId('text-area-slot');
    expect(element.tagName).toBe('DIV');
  });

  it('renders the children without crashing', () => {
    render(<TextAreaSlot>Test Child</TextAreaSlot>);
    const element = screen.getByText('Test Child');
    expect(element).toBeInTheDocument();
  });
});

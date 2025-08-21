import { useRef } from 'react';
import { render, screen, renderHook } from '@testing-library/react';
import { expect, describe, it, vi } from 'vitest';
import { userEvent } from '@testing-library/user-event';
import type { CardProps } from '../type';
import { Card } from '../card';

describe('Card Component', () => {
  it('renders without crashing', () => {
    render(<Card>Test Card</Card>);
    const element = screen.getByText('Test Card');
    expect(element).toBeInTheDocument();
  });

  it('should forward the ref', () => {
    const { result } = renderHook(() => useRef<HTMLDivElement>(null));
    render(<Card ref={result.current} />);
    expect(result.current.current).toBeInTheDocument();
  });

  it('renders as `div` by default', () => {
    render(<Card>Test Card</Card>);
    expect(screen.getByText('Test Card').tagName).toBe('DIV');
  });

  it('renders with custom class', () => {
    render(<Card className="custom-class">Test Card</Card>);
    const card = screen.getByText('Test Card');
    expect(card).toHaveClass('custom-class');
  });

  it('renders with "outlined" variant by default', () => {
    render(<Card>Test Card</Card>);

    const card = screen.getByText('Test Card');
    expect(card.dataset.variant).toBe('outlined');
  });

  it.each(['outlined', 'filled', 'elevated'])(
    'renders with variant `%s`',
    (variant) => {
      render(<Card variant={variant as CardProps['variant']}>Test Card</Card>);

      expect(screen.getByText('Test Card').dataset.variant).toBe(variant);
    },
  );

  it('renders disabled card', async () => {
    render(<Card disabled>Test Card</Card>);

    const card = screen.getByText('Test Card');
    expect(card.dataset.disabled).toBe('true');

    /**
     * INFO: Since userEvent emits an error regarding pointer events when clicked on disable element.
     * More explanation in this thread https://github.com/testing-library/user-event/issues/974#issuecomment-1158692211
     */
    await expect(() => userEvent.click(card)).rejects.toThrow(
      /pointer-events: none/,
    );
  });

  it('renders selected card', () => {
    render(<Card selected>Test Card</Card>);

    const card = screen.getByText('Test Card');
    expect(card.dataset.selected).toBe('true');
  });

  it('renders interactive card', () => {
    render(<Card onSelectionChange={vi.fn()}>Test Card</Card>);

    const card = screen.getByText('Test Card');
    expect(card.dataset.interactive).toBe('true');
  });

  it('handles onSelectionChange events when card is clicked', async () => {
    const view = userEvent.setup();
    const handleChange = vi.fn();
    render(<Card onSelectionChange={handleChange}>Test Card</Card>);

    const card = screen.getByRole('button');
    await view.click(card);

    expect(handleChange).toHaveBeenCalledWith(true);
  });

  it('handles onSelectionChange events when Space bar is pressed', async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();
    render(<Card onSelectionChange={handleChange}>Test Card</Card>);

    const card = screen.getByRole('button');

    card.focus();
    await user.type(card, ' ', { skipClick: true });

    expect(handleChange).toHaveBeenCalledWith(true);
  });
});

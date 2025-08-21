import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { expect, describe, it, vi } from 'vitest';
import { createRef } from 'react';
import { IconButton } from '../icon-button';

describe('IconButton Component', () => {
  it('should render without crashing', () => {
    render(<IconButton data-testid="icon-button" />);

    const testIconButton: HTMLElement = screen.getByTestId('icon-button');
    expect(testIconButton).toBeInTheDocument();
  });

  it('should return the correct default props', () => {
    render(<IconButton data-testid="icon-button" />);

    const testIconButton: HTMLElement = screen.getByTestId('icon-button');

    expect(testIconButton.getAttribute('data-size')).toBe('xsmall');
    expect(testIconButton.getAttribute('data-outline')).toBe('false');
    expect(testIconButton.getAttribute('data-variant')).toBe('tertiary');
    expect(testIconButton.getAttribute('data-status')).toBe('branded');
  });

  it('handles IconButton functionalities', () => {
    const ref = createRef<HTMLButtonElement>();
    render(<IconButton icon={<svg />} ref={ref} />);

    expect(ref.current).not.toBeNull();
    if (ref.current) {
      expect(ref.current.tagName).toBe('BUTTON');
    }
  });

  it('renders the given icon inside the button', () => {
    render(<IconButton icon={<svg data-testid="icon-svg" />} />);
    const icon = screen.getByTestId('icon-svg');
    expect(icon).toBeInTheDocument();
  });

  it('applies the correct properties from useIconButton hook', () => {
    render(
      <IconButton disabled icon={<svg />} outline size="large" type="submit" />,
    );
    const button = screen.getByRole('button');

    expect(button).toHaveAttribute('data-size', 'large');
    expect(button).toHaveAttribute('data-outline', 'true');
    expect(button).toBeDisabled();
    expect(button).toHaveAttribute('type', 'submit');
  });

  it('calls onClick handler when clicked', async () => {
    const user = userEvent.setup();
    const onClickMock = vi.fn();

    render(<IconButton icon={<svg />} onClick={onClickMock} />);

    const button = screen.getByRole('button');
    await user.click(button);

    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  it('does not call onClick handler when button is disabled', async () => {
    const user = userEvent.setup();
    const onClickMock = vi.fn();
    render(<IconButton disabled icon={<svg />} onClick={onClickMock} />);
    const button = screen.getByRole('button');

    /**
     * INFO: Since userEvent emits an error regarding pointer events when clicked on disable element.
     * More explanation in this thread https://github.com/testing-library/user-event/issues/974#issuecomment-1158692211
     */
    await expect(() => user.click(button)).rejects.toThrow(
      /pointer-events: none/,
    );

    expect(onClickMock).toHaveBeenCalledTimes(0);
  });

  it('should reflect the correct variant prop as a data-variant attribute', () => {
    render(<IconButton data-testid="icon-button" variant="secondary" />);

    const button = screen.getByRole('button');

    expect(button).toHaveAttribute('data-variant', 'secondary');
  });

  it('should reflect the correct status prop as a data-status attribute', () => {
    render(<IconButton data-testid="icon-button" status="inverse" />);

    const button = screen.getByRole('button');

    expect(button).toHaveAttribute('data-status', 'inverse');
  });
});

import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { expect, describe, it, vi } from 'vitest';
import { createRef } from 'react';
import { Button } from '../button';

describe('Button Component', () => {
  it('renders with default props', () => {
    render(<Button>Click me</Button>);
    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('data-size', 'medium');
    expect(button).toHaveAttribute('data-variant', 'primary');
    expect(button).toHaveAttribute('data-status', 'branded');
    expect(button).not.toHaveAttribute('disabled');
  });

  it('disables when isLoading is true', () => {
    render(<Button loading>Click me</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('disabled');
  });

  it('calls onClick event handler when clicked', async () => {
    const onClickMock = vi.fn();
    render(<Button onClick={onClickMock}>Click me</Button>);
    const button = screen.getByRole('button');

    await userEvent.click(button);

    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  it('displays startIcon when provided', () => {
    render(
      <Button startIcon={<i className="icon-start" title="start icon" />} />,
    );
    const iconStart = screen.getByTitle('start icon');

    expect(iconStart).toBeInTheDocument();
  });

  it('displays endIcon when provided', () => {
    render(<Button endIcon={<i className="icon-end" title="end icon" />} />);
    const iconEnd = screen.getByTitle('end icon');

    expect(iconEnd).toBeInTheDocument();
  });

  it('applies custom class names', () => {
    render(
      <Button
        className="custom-button"
        startIcon={<i className="icon-start" title="start icon" />}
      >
        Click me
      </Button>,
    );
    const button = screen.getByRole('button');
    const iconStart = screen.getByTitle('start icon');

    expect(button).toHaveClass('custom-button');
    expect(iconStart).toHaveClass('icon-start');
  });

  it('assigns ref correctly', () => {
    const ref = createRef<HTMLButtonElement>();
    render(<Button ref={ref}>Click me</Button>);
    const button = ref.current;

    expect(button).toBeDefined();
    expect(button).toBeInstanceOf(HTMLButtonElement);
  });

  it('displays children', () => {
    render(<Button>Custom Text</Button>);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Custom Text');
  });

  it('does not call onClick when disabled', async () => {
    const onClickMock = vi.fn();
    render(
      <Button disabled onClick={onClickMock}>
        Click me
      </Button>,
    );
    const button = screen.getByRole('button');

    /**
     * INFO: Since userEvent emits an error regarding pointer events when clicked on disable element.
     * More explanation in this thread https://github.com/testing-library/user-event/issues/974#issuecomment-1158692211
     */
    await expect(() => userEvent.click(button)).rejects.toThrow(
      /pointer-events: none/,
    );

    expect(onClickMock).not.toHaveBeenCalled();
  });

  it('enables after loading is false', () => {
    const { rerender } = render(<Button loading>Click me</Button>);
    const button = screen.getByRole('button');

    expect(button).toHaveAttribute('disabled');

    rerender(<Button loading={false}>Click me</Button>);

    expect(button).not.toHaveAttribute('disabled');
  });

  it('can be clicked when not disabled', async () => {
    const onClickMock = vi.fn();
    render(<Button onClick={onClickMock}>Click me</Button>);
    const button = screen.getByRole('button');

    await userEvent.click(button);

    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  it('disables the button when isDisabled is true', () => {
    render(<Button disabled>Click me</Button>);
    const button = screen.getByRole('button');

    expect(button).toBeDisabled();
  });

  it('enables the button when isDisabled is false', () => {
    render(<Button disabled={false}>Click me</Button>);
    const button = screen.getByRole('button');

    expect(button).not.toBeDisabled();
  });

  it('disables the button when loading is true', () => {
    render(<Button loading>Click me</Button>);
    const button = screen.getByRole('button');

    expect(button).toBeDisabled();
  });

  it('enables the button when loading is false', () => {
    render(<Button loading={false}>Click me</Button>);
    const button = screen.getByRole('button');

    expect(button).not.toBeDisabled();
  });

  it('disables the button when loading is true and isDisabled is false', () => {
    render(
      <Button disabled={false} loading>
        Click me
      </Button>,
    );
    const button = screen.getByRole('button');

    expect(button).toBeDisabled();
  });

  it('should render the child element instead of <button> tag when the asChild prop is true', () => {
    render(
      <Button asChild>
        <p>Paragraph with Button styles</p>
      </Button>,
    );

    const paragraph = screen.getByText('Paragraph with Button styles');

    expect(paragraph).toHaveRole('paragraph');
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });
});

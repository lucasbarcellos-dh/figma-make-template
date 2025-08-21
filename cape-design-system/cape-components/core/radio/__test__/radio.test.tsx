import { render, screen } from '@testing-library/react';
import type { Mock } from 'vitest';
import { expect, describe, it, vi, beforeEach } from 'vitest';
import userEvent from '@testing-library/user-event';
import { Radio } from '../radio';

describe('<Radio />', () => {
  let onClickMock: Mock;
  let onChangeMock: Mock;

  beforeEach(() => {
    onClickMock = vi.fn();
    onChangeMock = vi.fn();
  });

  it('renders without crashing', () => {
    render(<Radio />);
    const element = screen.getByRole('radio');
    expect(element).toBeInTheDocument();
  });

  it('renders with a label', () => {
    render(<Radio data-testid="radio-with-label" label="Radio" />);
    const element = screen.getByTestId('radio-with-label');
    expect(element.nodeName).toBe('LABEL');
  });

  it('renders the label text when the label prop is provided.', () => {
    render(<Radio label="Test Label" />);
    const labelElement = screen.getByText('Test Label');

    expect(labelElement).toBeInTheDocument();
  });

  it('adds the data-size="medium" to the root element by default.', () => {
    render(<Radio data-testid="radio-root" />);
    const element = screen.getByTestId('radio-root');
    expect(element.dataset.size).toBe('medium');
  });

  it('checks the input when the element is clicked', async () => {
    render(<Radio data-testid="radio-root" />);
    const radioElement: HTMLInputElement = screen.getByRole('radio');

    expect(radioElement.checked).toEqual(false);
    await userEvent.click(radioElement);
    expect(radioElement.checked).toEqual(true);
  });

  it('checks the input when the label is clicked', async () => {
    render(<Radio data-testid="radio-root" label="Radio" />);
    const rootElement = screen.getByTestId('radio-root');
    const radioElement: HTMLInputElement = screen.getByRole('radio');

    expect(radioElement.checked).toEqual(false);
    await userEvent.click(rootElement);
    expect(radioElement.checked).toEqual(true);
  });

  it('disables onClick or onChange callbacks when the disabled prop is true', async () => {
    render(<Radio data-testid="radio-root" disabled />);
    const rootElement = screen.getByTestId('radio-root');

    await expect(() => userEvent.click(rootElement)).rejects.toThrow(
      /pointer-events: none/,
    );

    expect(onClickMock).not.toHaveBeenCalled();
    expect(onChangeMock).not.toHaveBeenCalled();
  });

  it('disables onClick or onChange callbacks when the readonly prop is true', async () => {
    render(
      <Radio
        data-testid="radio-root"
        onChange={onChangeMock}
        onClick={onClickMock}
        readOnly
      />,
    );
    const rootElement = screen.getByTestId('radio-root');
    await expect(() => userEvent.click(rootElement)).rejects.toThrow(
      /pointer-events: none/,
    );

    expect(onClickMock).not.toHaveBeenCalled();
    expect(onChangeMock).not.toHaveBeenCalled();
  });

  it('runs the onChange callback', async () => {
    render(
      <Radio data-testid="radio-root" label="Radio" onChange={onChangeMock} />,
    );
    const rootElement = screen.getByTestId('radio-root');
    await userEvent.click(rootElement);

    expect(onChangeMock).toHaveBeenCalledTimes(1);
  });
});

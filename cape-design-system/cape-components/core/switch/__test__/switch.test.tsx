import type { Mock } from 'vitest';
import { beforeEach, expect, describe, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { Switch } from '../switch';

describe('<Switch />', () => {
  let onClickMock: Mock, onChangeMock: Mock;

  beforeEach(() => {
    onClickMock = vi.fn();
    onChangeMock = vi.fn();
  });

  it('renders without crashing', () => {
    render(<Switch />);
    const switchInputElement = screen.getByRole('switch');

    expect(switchInputElement).toBeInTheDocument();
  });

  it('renders with a label when label prop is set', () => {
    render(<Switch data-testid="switch-root" label="Test Label" />);
    const labelElement = screen.getByTestId('switch-root');

    expect(labelElement.tagName).toBe('LABEL');
    expect(labelElement).toBeInTheDocument();
  });

  it('sets default size to "medium"', () => {
    render(<Switch data-testid="switch-root" />);
    const switchRootElement = screen.getByTestId('switch-root');

    expect(switchRootElement.dataset.size).toBe('medium');
  });

  it('checks the input when the root element is clicked', async () => {
    render(<Switch data-testid="switch-root" label="Test Label" />);
    const switchRootElement = screen.getByTestId('switch-root');
    const switchInputElement: HTMLInputElement = screen.getByRole('switch');

    expect(switchInputElement.checked).toEqual(false);

    await userEvent.click(switchRootElement);
    expect(switchInputElement.checked).toEqual(true);
  });

  it('returns root as span if label is not set', () => {
    render(<Switch data-testid="switch-root" />);
    const switchRootElement = screen.getByTestId('switch-root');

    expect(switchRootElement.tagName).toBe('SPAN');
  });

  it('disables onClick and onChange callbacks when disabled is set', async () => {
    render(
      <Switch
        data-testid="switch-root"
        disabled
        label="Test Label"
        onChange={onChangeMock}
        onClick={onClickMock}
      />,
    );
    const switchRootElement = screen.getByTestId('switch-root');

    await expect(() => userEvent.click(switchRootElement)).rejects.toThrow(
      /pointer-events: none/,
    );

    expect(onClickMock).not.toHaveBeenCalled();
    expect(onChangeMock).not.toHaveBeenCalled();
  });

  it('disables onClick and onChange callbacks when readOnly is set', async () => {
    render(
      <Switch
        data-testid="switch-root"
        label="Test Label"
        onChange={onChangeMock}
        onClick={onClickMock}
        readOnly
      />,
    );
    const switchRootElement = screen.getByTestId('switch-root');
    await expect(() => userEvent.click(switchRootElement)).rejects.toThrow(
      /pointer-events: none/,
    );

    expect(onClickMock).not.toHaveBeenCalled();
    expect(onChangeMock).not.toHaveBeenCalled();
  });

  it('runs onChange callback', async () => {
    render(
      <Switch
        data-testid="switch-root"
        label="Test Label"
        onChange={onChangeMock}
      />,
    );
    const switchRootElement = screen.getByTestId('switch-root');
    await userEvent.click(switchRootElement);

    expect(onChangeMock).toHaveBeenCalledTimes(1);
  });
});

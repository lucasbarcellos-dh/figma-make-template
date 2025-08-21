import { expect, describe, it, vi, type Mock, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { Checkbox } from '../checkbox';

describe('<Checkbox />', () => {
  let onClickMock: Mock;
  let onChangeMock: Mock;

  beforeEach(() => {
    onClickMock = vi.fn();
    onChangeMock = vi.fn();
  });

  it('renders without crashing', () => {
    render(<Checkbox />);
    const checkboxElement = screen.getByRole('checkbox');

    expect(checkboxElement).toBeInTheDocument();
  });

  it('renders with a label', () => {
    render(<Checkbox data-testid="checkbox-with-label" label="Checkbox" />);
    const element = screen.getByTestId('checkbox-with-label');
    expect(element.nodeName).toBe('LABEL');
  });

  it('renders the label text when the label prop is provided.', () => {
    render(<Checkbox label="Test Label" />);
    const labelElement = screen.getByText('Test Label');

    expect(labelElement).toBeInTheDocument();
  });

  it('adds the data-size="medium" to the root element by default.', () => {
    render(<Checkbox data-testid="checkbox-root" />);
    const checkboxRootElement = screen.getByTestId('checkbox-root');
    expect(checkboxRootElement.dataset.size).toBe('medium');
  });

  it('checks the input on wrapper click', async () => {
    render(<Checkbox data-testid="checkbox-root" label="Checkbox" />);
    const checkboxRootElement = screen.getByTestId('checkbox-root');
    const checkboxInputElement: HTMLInputElement = screen.getByRole('checkbox');
    await userEvent.click(checkboxRootElement);

    expect(checkboxInputElement.checked).toEqual(true);
  });

  it('checks the input on click', async () => {
    render(<Checkbox />);
    const checkboxInputElement: HTMLInputElement = screen.getByRole('checkbox');
    await userEvent.click(checkboxInputElement);

    expect(checkboxInputElement.checked).toEqual(true);
  });

  it('disables onClick and onChange callbacks when the disabled prop is true', async () => {
    render(<Checkbox data-testid="checkbox-root" disabled />);
    const checkboxRootElement = screen.getByTestId('checkbox-root');

    await expect(() => userEvent.click(checkboxRootElement)).rejects.toThrow(
      /pointer-events: none/,
    );

    expect(onClickMock).not.toHaveBeenCalled();
    expect(onChangeMock).not.toHaveBeenCalled();
  });

  it('disables onClick or onChange callbacks when readonly prop is true', async () => {
    render(
      <Checkbox
        data-testid="checkbox-root"
        onChange={onChangeMock}
        onClick={onClickMock}
        readOnly
      />,
    );
    const checkboxRootElement = screen.getByTestId('checkbox-root');
    await expect(() => userEvent.click(checkboxRootElement)).rejects.toThrow(
      /pointer-events: none/,
    );

    expect(onClickMock).not.toHaveBeenCalled();
    expect(onChangeMock).not.toHaveBeenCalled();
  });

  it('runs onChange callback', async () => {
    render(
      <Checkbox
        data-testid="checkbox-root"
        label="Checkbox"
        onChange={onChangeMock}
      />,
    );
    const checkboxRootElement = screen.getByTestId('checkbox-root');
    await userEvent.click(checkboxRootElement);

    expect(onChangeMock).toHaveBeenCalledTimes(1);
  });

  it('renders indeterminate state when indeterminate is true', () => {
    render(<Checkbox data-testid="checkbox-root" indeterminate />);
    const checkboxRootElement = screen.getByTestId('checkbox-root');

    expect(checkboxRootElement).toHaveAttribute('data-indeterminate', 'true');
  });
});

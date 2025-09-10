import { fireEvent, render, screen } from '@testing-library/react';
import { expect, describe, it, vi } from 'vitest';
import type { ChangeEventHandler } from 'react';
import { Select, Option } from '../index';

describe('<Select />', () => {
  it('renders without crashing', () => {
    render(<Select data-testid="select" />);
    const element = screen.getByTestId('select');
    expect(element).toBeInTheDocument();
  });

  it('renders as `select` by default', () => {
    render(<Select data-testid="select" />);
    const element = screen.getByTestId('select');
    expect(element.tagName).toBe('SELECT');
  });

  it('renders with custom class', () => {
    render(<Select className="custom-class" />);
    const element = screen.getByTestId('cape-select-wrapper');
    expect(element).toHaveClass('custom-class');
  });

  it('adds the data-size="medium" to the root element by default.', () => {
    render(<Select data-testid="select" />);
    const element = screen.getByTestId('cape-select-wrapper');
    expect(element.dataset.size).toBe('medium');
  });

  it('has first option selected by default if no value is provided', () => {
    render(
      <Select data-testid="select">
        <Option value="">Please select an option</Option>
        <Option value="1">First</Option>
        <Option value="2">Second</Option>
      </Select>,
    );
    const selectElement: HTMLSelectElement = screen.getByTestId('select');
    expect(selectElement.value).toBe('');
  });

  it('sets the correct option when a default value is provided', () => {
    render(
      <Select data-testid="select" defaultValue="2">
        <Option value="">Please select an option</Option>
        <Option value="1">First</Option>
        <Option value="2">Second</Option>
      </Select>,
    );

    const selectElement: HTMLSelectElement = screen.getByTestId('select');
    expect(selectElement.value).toBe('2');
  });

  it('updates the selected value when an option is chosen', () => {
    const onChange = vi.fn() as ChangeEventHandler<HTMLSelectElement>;
    render(
      <Select data-testid="select" onChange={onChange}>
        <Option value="1">First</Option>
        <Option value="2">Second</Option>
      </Select>,
    );
    const selectElement: HTMLSelectElement = screen.getByTestId('select');
    fireEvent.change(selectElement, { target: { value: '2' } });

    expect(selectElement.value).toBe('2');
    expect(onChange).toHaveBeenCalledTimes(1);

    expect(selectElement.value).toBe('2');
  });
});

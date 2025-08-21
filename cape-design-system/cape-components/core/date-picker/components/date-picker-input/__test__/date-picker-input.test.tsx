import { render, screen } from '@testing-library/react';
import { expect, describe, it, vi } from 'vitest';
import { DatePickerInput } from '../date-picker-input';
import { DatePicker } from '../../../date-picker';

vi.mock('../../../../common/hooks/use-media-query', () => ({
  useMediaQuery: () => true,
}));

describe('DatePickerTrigger Component', () => {
  it('renders without crashing', () => {
    render(
      <DatePicker defaultOpen>
        <DatePickerInput placeholder="test placeholder" />
      </DatePicker>,
    );
    const inputElement = screen.getByPlaceholderText('test placeholder');
    expect(inputElement).toBeInTheDocument();
  });

  it('renders the default value', () => {
    render(
      <DatePicker defaultOpen>
        <DatePickerInput defaultValue="test value" onChange={() => jest.fn()} />
      </DatePicker>,
    );
    const inputElement = screen.getByDisplayValue('test value');
    expect(inputElement).toBeInTheDocument();
  });

  it('renders the value', () => {
    render(
      <DatePicker defaultOpen>
        <DatePickerInput onChange={() => jest.fn()} value="test value" />
      </DatePicker>,
    );
    const inputElement = screen.getByDisplayValue('test value');
    expect(inputElement).toBeInTheDocument();
  });
});

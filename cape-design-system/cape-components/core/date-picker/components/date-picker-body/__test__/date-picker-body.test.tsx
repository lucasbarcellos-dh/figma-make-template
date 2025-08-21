import { render, screen } from '@testing-library/react';
import { expect, describe, it, vi, beforeEach, type Mock } from 'vitest';
import { userEvent } from '@testing-library/user-event';
import { DatePickerBody } from '../date-picker-body';
import { DatePicker } from '../../../date-picker';

vi.mock('../../../../common/hooks/use-media-query', () => ({
  useMediaQuery: () => true,
}));

describe('DatePickerBody Component', () => {
  let mockFunc: Mock;

  beforeEach(() => {
    mockFunc = vi.fn();
  });

  it('renders without crashing', () => {
    render(
      <DatePicker defaultOpen>
        <DatePickerBody>test child</DatePickerBody>
      </DatePicker>,
    );
    const childElement = screen.getByText('test child');
    expect(childElement).toBeInTheDocument();
  });

  it('renders single mode by default', () => {
    render(
      <DatePicker defaultOpen>
        <DatePickerBody data-testid="test" />
      </DatePicker>,
    );
    const rootElement = screen.getByTestId('test');
    expect(rootElement).toHaveAttribute('data-mode', 'single');
  });

  it('renders range mode when the mode prop is set to range', () => {
    render(
      <DatePicker defaultOpen mode="range">
        <DatePickerBody data-testid="test" />
      </DatePicker>,
    );
    const rootElement = screen.getByTestId('test');
    expect(rootElement).toHaveAttribute('data-mode', 'range');
  });

  it('renders the navigation header when it is passed as a prop', () => {
    render(
      <DatePicker defaultOpen>
        <DatePickerBody navigationHeader={<p>test header</p>} />
      </DatePicker>,
    );
    const headerElement = screen.getByText('test header');
    expect(headerElement).toBeInTheDocument();
  });

  it('calls the onDateSelect method when a single date is selected', async () => {
    render(
      <DatePicker defaultOpen>
        <DatePickerBody onSelect={mockFunc} />
      </DatePicker>,
    );
    const user = userEvent.setup();
    const dayButtonElement = screen.getByRole('button', { name: /19/i });
    await user.click(dayButtonElement);

    expect(mockFunc).toHaveBeenCalledTimes(1);
  });

  it('calls the onRangeSelect method when a range of dates are selected', async () => {
    render(
      <DatePicker defaultOpen mode="range">
        <DatePickerBody onSelect={mockFunc} />
      </DatePicker>,
    );
    const user = userEvent.setup();
    const startDayButtonElement = screen.getByRole('button', { name: /19/i });
    const endDayButtonElement = screen.getByRole('button', { name: /21/i });
    await user.click(startDayButtonElement);
    await user.click(endDayButtonElement);

    expect(mockFunc).toHaveBeenCalledTimes(2);
  });
});

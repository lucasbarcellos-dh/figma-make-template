import { render, screen } from '@testing-library/react';
import { expect, describe, it, vi } from 'vitest';
import { DatePickerTrigger } from '../date-picker-trigger';
import { DatePicker } from '../../../date-picker';

vi.mock('../../../../common/hooks/use-media-query', () => ({
  useMediaQuery: () => true,
}));

describe('DatePickerTrigger Component', () => {
  it('renders without crashing', () => {
    render(
      <DatePicker defaultOpen>
        <DatePickerTrigger>test trigger</DatePickerTrigger>
      </DatePicker>,
    );
    const childElement = screen.getByText('test trigger');
    expect(childElement).toBeInTheDocument();
  });
});

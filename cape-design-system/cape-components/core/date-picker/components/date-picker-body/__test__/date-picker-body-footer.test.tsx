import { render, screen } from '@testing-library/react';
import { expect, describe, it, vi } from 'vitest';
import { DatePickerBodyFooter } from '../date-picker-body-footer';
import { DatePickerBody } from '../date-picker-body';
import { DatePicker } from '../../../date-picker';

vi.mock('../../../../common/hooks/use-media-query', () => ({
  useMediaQuery: () => true,
}));

describe('DatePickerBodyFooter Component', () => {
  it('renders without crashing', () => {
    render(
      <DatePicker defaultOpen>
        <DatePickerBody>
          <DatePickerBodyFooter>test footer</DatePickerBodyFooter>
        </DatePickerBody>
      </DatePicker>,
    );
    const childElement = screen.getByText('test footer');
    expect(childElement).toBeInTheDocument();
  });
});

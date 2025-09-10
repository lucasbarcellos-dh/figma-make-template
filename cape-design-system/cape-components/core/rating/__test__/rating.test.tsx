import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { expect, describe, it, vi } from 'vitest';
import { Rating } from '../rating';

const getStarByValue = (value: number) => {
  return within(screen.getByTestId(`cape-rating-label-${value}`));
};

describe('Rating Component', () => {
  it('renders without crashing', () => {
    render(<Rating data-testid="rating" />);
    const element = screen.getByTestId('rating');
    expect(element).toBeInTheDocument();
  });

  it('renders as `div` by default', () => {
    render(<Rating data-testid="rating" />);
    const element = screen.getByTestId('rating');
    expect(element.tagName).toBe('DIV');
  });

  it('renders with custom class', () => {
    render(<Rating className="custom-class" data-testid="rating" />);
    const element = screen.getByTestId('rating');
    expect(element).toHaveClass('custom-class');
  });

  it('applies style prop correctly', () => {
    render(<Rating data-testid="rating" style={{ margin: 10, padding: 50 }} />);
    const element = screen.getByTestId('rating');
    expect(element).toHaveStyle({
      margin: '10px',
      padding: '50px',
    });
  });

  it('correct stars are filled when rating value is provided', () => {
    render(<Rating data-testid="rating" readOnly value={3} />);
    expect(getStarByValue(1).getByRole('radio')).not.toBeChecked();
    expect(getStarByValue(2).getByRole('radio')).not.toBeChecked();
    expect(getStarByValue(3).getByRole('radio')).toBeChecked();
    expect(getStarByValue(4).getByRole('radio')).not.toBeChecked();
    expect(getStarByValue(5).getByRole('radio')).not.toBeChecked();
  });

  it('correct stars are filled when rating value is provided in decimals', () => {
    render(<Rating data-testid="rating" value={2.3} />);
    expect(getStarByValue(1).getByRole('radio')).not.toBeChecked();
    expect(getStarByValue(2).getByRole('radio')).not.toBeChecked();
    expect(getStarByValue(3).getByRole('radio')).toBeChecked();
    expect(getStarByValue(3).getByTestId('cape-rating-icon')).toHaveAttribute(
      'data-filled',
      'half',
    );
    expect(getStarByValue(4).getByRole('radio')).not.toBeChecked();
    expect(getStarByValue(5).getByRole('radio')).not.toBeChecked();
  });

  it('should call the onChange callback with the correct rating when a star is clicked', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<Rating data-testid="rating" onChange={onChange} />);

    const star3 = getStarByValue(3).getByTestId('cape-rating-icon');
    await user.click(star3);
    expect(onChange).toBeCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith(3);

    const star2 = getStarByValue(2).getByTestId('cape-rating-icon');
    await user.click(star2);
    expect(onChange).toBeCalledTimes(2);
    expect(onChange).toHaveBeenCalledWith(2);
  });

  it('should call the onChange callback with the correct rating when a star is selected through the keyboard', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<Rating data-testid="rating" onChange={onChange} />);
    // focus the 1st input
    await user.tab();
    // focus the radio group
    await user.tab();
    // select the 2nd input
    await user.keyboard('[arrowright]');
    // for some reason, user event is pressing the arrow key so all 4 inputs are getting selected
    // so the 5th input should be selected which is represented by label = 4
    const input5 = screen.getByDisplayValue('5');
    expect(input5).toHaveFocus();
    expect(onChange).toHaveBeenCalledWith(2);
    expect(onChange).toHaveBeenCalledWith(3);
    expect(onChange).toHaveBeenCalledWith(4);
    expect(onChange).toHaveBeenCalledWith(5);
  });

  it('should call the onMouseEnter and onMouseLeave callbacks with the correct rating when a star is hovered', async () => {
    const user = userEvent.setup();
    const onMouseEnter = vi.fn();
    const onMouseLeave = vi.fn();
    render(
      <Rating
        data-testid="rating"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      />,
    );
    const star3 = getStarByValue(3).getByTestId('cape-rating-icon');
    await user.hover(star3);
    expect(onMouseEnter).toHaveBeenCalledTimes(1);
    expect(onMouseEnter).toHaveBeenCalledWith(3);

    const star2 = getStarByValue(2).getByTestId('cape-rating-icon');
    await user.hover(star2);
    expect(onMouseEnter).toHaveBeenCalledTimes(2);
    expect(onMouseEnter).toHaveBeenCalledWith(2);

    const star4 = getStarByValue(4).getByTestId('cape-rating-icon');
    await user.hover(star4);
    expect(onMouseEnter).toHaveBeenCalledTimes(3);
    expect(onMouseEnter).toHaveBeenCalledWith(4);

    const rating = screen.getByTestId('rating');
    await user.unhover(rating);

    // on changing hover b/w stars, testing library is also unhovering from the base element
    // so the expectation becomes 3. But practically, the event will be only called when the
    // user unhovers from the base element.
    expect(onMouseLeave).toHaveBeenCalledTimes(3);
  });
});

import type { ReactNode } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { expect, describe, it, vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import { SegmentedControlItem } from '../segmented-control-item';
import { SegmentedControlContext } from '../../../hooks/use-segmented-control-context';
import type { SegmentedControlProps } from '../../../type';

const renderWithSegmentedControlContext = (
  ui: ReactNode,
  {
    providerValue = {
      size: 'medium' as NonNullable<SegmentedControlProps['size']>,
      activeItem: '1',
      setActiveItem: () => {
        return null;
      },
    },
    ...renderOptions
  } = {},
) => {
  return render(
    <SegmentedControlContext.Provider value={providerValue}>
      {ui}
    </SegmentedControlContext.Provider>,
    renderOptions,
  );
};

describe('<SegmentedControlItem />', () => {
  it('renders without crashing', () => {
    renderWithSegmentedControlContext(
      <SegmentedControlItem data-testid="segmented-control-item" value="1" />,
    );
    const element = screen.getByTestId('segmented-control-item');
    expect(element).toBeInTheDocument();
  });

  it('renders as `button` by default', () => {
    renderWithSegmentedControlContext(
      <SegmentedControlItem data-testid="segmented-control-item" value="2" />,
    );
    const element = screen.getByTestId('segmented-control-item');
    expect(element.tagName).toBe('BUTTON');
  });

  it('renders with custom class', () => {
    renderWithSegmentedControlContext(
      <SegmentedControlItem
        className="custom-class"
        data-testid="segmented-control-item"
        value="3"
      />,
    );
    const element = screen.getByTestId('segmented-control-item');
    expect(element).toHaveClass('custom-class');
  });

  it('renders children content correctly', () => {
    renderWithSegmentedControlContext(
      <SegmentedControlItem data-testid="segmented-control-item" value="5">
        Click Me
      </SegmentedControlItem>,
    );
    const element = screen.getByTestId('segmented-control-item');
    expect(element).toHaveTextContent('Click Me');
  });

  it('handles onClick event', async () => {
    const handleClick = vi.fn();
    renderWithSegmentedControlContext(
      <SegmentedControlItem
        data-testid="segmented-control-item"
        onClick={handleClick}
        value="6"
      >
        Click Me
      </SegmentedControlItem>,
    );
    const user = userEvent.setup();
    const element = screen.getByTestId('segmented-control-item');
    await user.click(element);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('applies disabled attribute when passed', () => {
    renderWithSegmentedControlContext(
      <SegmentedControlItem
        data-testid="segmented-control-item"
        disabled
        value="7"
      >
        Disabled
      </SegmentedControlItem>,
    );
    const element = screen.getByTestId('segmented-control-item');
    expect(element).toBeDisabled();
  });

  it('does not call onClick when disabled', () => {
    const handleClick = vi.fn();
    renderWithSegmentedControlContext(
      <SegmentedControlItem
        data-testid="segmented-control-item"
        disabled
        onClick={handleClick}
        value="8"
      >
        Disabled
      </SegmentedControlItem>,
    );
    const element = screen.getByTestId('segmented-control-item');
    fireEvent.click(element);
    expect(handleClick).not.toHaveBeenCalled();
  });

  it.each([
    ['1', '1'],
    [['1', '2'], '1,2'],
  ])('should render expected data-value %s, ', (value, expected) => {
    renderWithSegmentedControlContext(
      <SegmentedControlItem
        data-testid="segmented-control-item"
        value={value}
      />,
    );
    const element = screen.getByTestId('segmented-control-item');
    expect(element).toHaveAttribute('data-value', expected);
  });

  it.each([[undefined], ['']])(
    'should not render data-value when value is %s',
    (value) => {
      renderWithSegmentedControlContext(
        <SegmentedControlItem
          data-testid="segmented-control-item"
          value={value}
        />,
      );
      const element = screen.getByTestId('segmented-control-item');
      expect(element).not.toHaveAttribute('data-value');
    },
  );
});

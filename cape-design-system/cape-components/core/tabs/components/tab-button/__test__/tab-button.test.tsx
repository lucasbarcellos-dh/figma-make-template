import type { ReactNode } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { expect, describe, it, vi } from 'vitest';
import { TabButton } from '../tab-button';
import { TabsContext } from '../../../context';

const renderWithTabsContext = (
  ui: ReactNode,
  {
    providerValue = {
      active: '1',
      setActive: () => {
        return null;
      },
      tabsRef: { current: new Map() },
    },
    ...renderOptions
  } = {},
) => {
  return render(
    <TabsContext.Provider value={providerValue}>{ui}</TabsContext.Provider>,
    renderOptions,
  );
};

describe('Tab Button Component', () => {
  it('renders without crashing', () => {
    renderWithTabsContext(<TabButton data-testid="tab-button" value="1" />);
    const element = screen.getByTestId('tab-button');
    expect(element).toBeInTheDocument();
  });

  it('renders as `button` by default', () => {
    renderWithTabsContext(<TabButton data-testid="tab-button" value="2" />);
    const element = screen.getByTestId('tab-button');
    expect(element.tagName).toBe('BUTTON');
  });

  it('renders with custom class', () => {
    renderWithTabsContext(
      <TabButton className="custom-class" data-testid="tab-button" value="3" />,
    );
    const element = screen.getByTestId('tab-button');
    expect(element).toHaveClass('custom-class');
  });

  it('renders children content correctly', () => {
    renderWithTabsContext(
      <TabButton data-testid="tab-button" value="5">
        Click Me
      </TabButton>,
    );
    const element = screen.getByTestId('tab-button');
    expect(element).toHaveTextContent('Click Me');
  });

  it('handles onClick event', () => {
    const handleClick = vi.fn();
    renderWithTabsContext(
      <TabButton data-testid="tab-button" onClick={handleClick} value="6">
        Click Me
      </TabButton>,
    );
    const element = screen.getByTestId('tab-button');
    fireEvent.click(element);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('applies disabled attribute when passed', () => {
    renderWithTabsContext(
      <TabButton data-testid="tab-button" disabled value="7">
        Disabled
      </TabButton>,
    );
    const element = screen.getByTestId('tab-button');
    expect(element).toBeDisabled();
  });

  it('does not call onClick when disabled', () => {
    const handleClick = vi.fn();
    renderWithTabsContext(
      <TabButton
        data-testid="tab-button"
        disabled
        onClick={handleClick}
        value="8"
      >
        Disabled
      </TabButton>,
    );
    const element = screen.getByTestId('tab-button');
    fireEvent.click(element);
    expect(handleClick).not.toHaveBeenCalled();
  });

  it('forwards ref correctly', () => {
    const ref = { current: null };
    renderWithTabsContext(
      <TabButton data-testid="tab-button" ref={ref} value="9">
        With Ref
      </TabButton>,
    );
    expect(ref.current).toBeInstanceOf(HTMLButtonElement);
  });
});

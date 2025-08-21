import type { RenderResult } from '@testing-library/react';
import { render, screen } from '@testing-library/react';
import { expect, describe, it } from 'vitest';
import type { ReactNode } from 'react';
import { TabItem } from '../tab-item';
import { TabSlot } from '../../tab-slot';
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
): RenderResult => {
  return render(
    <TabsContext.Provider value={providerValue}>{ui}</TabsContext.Provider>,
    renderOptions,
  );
};

describe('Tab Item Component', () => {
  it('renders without crashing', () => {
    renderWithTabsContext(<TabItem data-testid="tabs" value="1" />);
    const element = screen.getByTestId('tabs');
    expect(element).toBeInTheDocument();
  });

  it('renders as `div` by default', () => {
    renderWithTabsContext(<TabItem data-testid="tabs" value="2" />);
    const element = screen.getByTestId('tabs');
    expect(element.tagName).toBe('DIV');
  });

  it('renders with custom class', () => {
    renderWithTabsContext(
      <TabItem className="custom-class" data-testid="tabs" value="3" />,
    );
    const element = screen.getByTestId('tabs');
    expect(element).toHaveClass('custom-class');
  });

  it('renders children inside `TabButton` when not a `TabSlot`', () => {
    renderWithTabsContext(
      <TabItem data-testid="tabs" value="5">
        <span data-testid="child">Child Content</span>
      </TabItem>,
    );
    const child = screen.getByTestId('child');
    expect(child).toBeInTheDocument();
    expect(child.textContent).toBe('Child Content');
  });

  it('renders `TabSlot` children without wrapping in `TabButton`', () => {
    renderWithTabsContext(
      <TabItem data-testid="tabs" value="6">
        <TabSlot data-testid="tab-slot">Slot Content</TabSlot>
      </TabItem>,
    );
    const tabSlot = screen.getByTestId('tab-slot');
    expect(tabSlot).toBeInTheDocument();
    expect(tabSlot.textContent).toBe('Slot Content');
  });

  it('renders multiple children correctly', () => {
    renderWithTabsContext(
      <TabItem data-testid="tabs" value="9">
        <span data-testid="child1">Child 1</span>
        <span data-testid="child2">Child 2</span>
      </TabItem>,
    );
    expect(screen.getByTestId('child1')).toBeInTheDocument();
    expect(screen.getByTestId('child2')).toBeInTheDocument();
  });
});

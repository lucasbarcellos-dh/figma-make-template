import { render, screen } from '@testing-library/react';
import { expect, describe, it, vi } from 'vitest';
import type { ReactNode } from 'react';
import React, { createRef } from 'react';
import { TabPanel } from '../tab-panel';
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

describe('Tab Content Component', () => {
  it('renders without crashing', () => {
    renderWithTabsContext(<TabPanel data-testid="tabs" value="1" />);
    const element = screen.getByTestId('tabs');
    expect(element).toBeInTheDocument();
  });

  it('renders as `div` by default', () => {
    renderWithTabsContext(<TabPanel data-testid="tabs" value="1" />);
    const element = screen.getByTestId('tabs');
    expect(element.tagName).toBe('DIV');
  });

  it('renders with custom class', () => {
    renderWithTabsContext(
      <TabPanel className="custom-class" data-testid="tabs" value="1" />,
    );
    const element = screen.getByTestId('tabs');
    expect(element).toHaveClass('custom-class');
  });

  it('applies system props correctly', () => {
    renderWithTabsContext(
      <TabPanel
        data-testid="tabs"
        style={{ margin: 10, padding: '50px' }}
        value="1"
      />,
    );
    const element = screen.getByTestId('tabs');
    expect(element).toHaveStyle({
      margin: '10px',
      padding: '50px',
    });
  });

  it('renders children correctly', () => {
    renderWithTabsContext(
      <TabPanel data-testid="tabs" value="1">
        <p>Tab Content</p>
      </TabPanel>,
    );
    const content = screen.getByText('Tab Content');
    expect(content).toBeInTheDocument();
  });

  it('forwards ref correctly', () => {
    const ref = createRef<HTMLDivElement>();
    renderWithTabsContext(<TabPanel data-testid="tabs" ref={ref} value="1" />);
    const element = screen.getByTestId('tabs');
    expect(ref.current).toBe(element);
  });

  it('applies correct rootProps from useTabPanel hook', () => {
    vi.mock('./hooks/use-tab-panel', () => ({
      useTabPanel: () => ({}),
    }));

    renderWithTabsContext(<TabPanel data-testid="tabs" value="1" />);
    const element = screen.getByTestId('tabs');
    expect(element).toHaveAttribute(
      'aria-labelledby',
      'cape-tabs-tab-button-1',
    );
  });
});

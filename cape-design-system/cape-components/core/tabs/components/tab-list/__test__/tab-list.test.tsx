import { render, screen } from '@testing-library/react';
import { expect, describe, it, vi } from 'vitest';
import { TabList } from '../tab-list';

describe('<TabList />', () => {
  it('renders without crashing', () => {
    render(<TabList data-testid="tabs" />);
    const element = screen.getByTestId('tabs');
    expect(element).toBeInTheDocument();
  });

  it('renders as `div` by default', () => {
    render(<TabList data-testid="tabs" />);
    const element = screen.getByTestId('tabs');
    expect(element.tagName).toBe('DIV');
  });

  it('renders with custom class', () => {
    render(<TabList className="custom-class" data-testid="tabs" />);
    const element = screen.getByTestId('tabs');
    expect(element).toHaveClass('custom-class');
  });

  it('renders children correctly', () => {
    render(
      <TabList data-testid="tabs">
        <div>Tab 1</div>
        <div>Tab 2</div>
      </TabList>,
    );
    const tab1 = screen.getByText('Tab 1');
    const tab2 = screen.getByText('Tab 2');
    expect(tab1).toBeInTheDocument();
    expect(tab2).toBeInTheDocument();
  });

  it('applies props from `useTabList` hook correctly', () => {
    const mockUseTabList = vi.fn(() => ({}));

    vi.mock('./hooks/use-tab-list', () => ({
      useTabList: mockUseTabList,
    }));

    render(<TabList data-testid="tabs" />);

    const rootElement = screen.getByTestId('tabs');

    expect(rootElement.className).toMatch(/^_list(?:_[a-z0-9]+)?$/);
  });
});

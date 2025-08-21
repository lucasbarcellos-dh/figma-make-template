import { render, screen } from '@testing-library/react';
import { expect, describe, it, vi } from 'vitest';
import { Tabs } from '../tabs';
import { TabsContext } from '../context';

// Mock the ResizeObserver
const ResizeObserverMock = vi.fn(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}));

vi.stubGlobal('ResizeObserver', ResizeObserverMock);

describe('<Tab />', () => {
  it('renders without crashing', () => {
    render(<Tabs data-testid="tabs" />);
    const element = screen.getByTestId('tabs');
    expect(element).toBeInTheDocument();
  });

  it('renders as `div` by default', () => {
    render(<Tabs data-testid="tabs" />);
    const element = screen.getByTestId('tabs');
    expect(element.tagName).toBe('DIV');
  });

  it('renders with custom class', () => {
    render(<Tabs className="custom-class" data-testid="tabs" />);
    const element = screen.getByTestId('tabs');
    expect(element).toHaveClass('custom-class');
  });

  it('applies system props correctly', () => {
    render(<Tabs data-testid="tabs" style={{ margin: 10, padding: '50px' }} />);
    const element = screen.getByTestId('tabs');
    expect(element).toHaveStyle({
      margin: '10px',
      padding: '50px',
    });
  });

  it('forwards ref to the div element', () => {
    const ref = vi.fn();
    render(<Tabs data-testid="tabs" ref={ref} />);
    const element = screen.getByTestId('tabs');
    expect(ref).toHaveBeenCalledWith(element);
  });

  it('renders children correctly', () => {
    render(
      <Tabs data-testid="tabs">
        <div data-testid="child">Child Content</div>
      </Tabs>,
    );
    const childElement = screen.getByTestId('child');
    expect(childElement).toBeInTheDocument();
    expect(childElement).toHaveTextContent('Child Content');
  });

  it('provides context values correctly', () => {
    render(
      <Tabs data-testid="tabs">
        <TabsContext.Consumer>
          {(context) => (
            <div data-testid="context-test">
              {context ? 'Context Available' : 'No Context'}
            </div>
          )}
        </TabsContext.Consumer>
      </Tabs>,
    );
    const contextTest = screen.getByTestId('context-test');
    expect(contextTest).toHaveTextContent('Context Available');
  });
});

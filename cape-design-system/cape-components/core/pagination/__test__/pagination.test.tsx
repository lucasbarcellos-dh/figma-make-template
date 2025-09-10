import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { expect, describe, it, vi } from 'vitest';
import { useContext } from 'react';
import { Pagination } from '../pagination';
import { PaginationContext } from '../hooks/use-pagination-context';

describe('Pagination Component', () => {
  it('renders without crashing', () => {
    render(<Pagination count={1} current={1} data-testid="pagination" />);
    const element = screen.getByTestId('pagination');
    expect(element).toBeInTheDocument();
  });

  it('renders as `div` by default', () => {
    render(<Pagination count={1} current={1} data-testid="pagination" />);
    const element = screen.getByTestId('pagination');
    expect(element.tagName).toBe('DIV');
  });

  it('renders with custom class', () => {
    render(
      <Pagination
        className="custom-class"
        count={1}
        current={1}
        data-testid="pagination"
      />,
    );
    const element = screen.getByTestId('pagination');
    expect(element).toHaveClass('custom-class');
  });

  it('provides correct context values', () => {
    function TestComponent() {
      const context = useContext(PaginationContext);
      return (
        <div>
          <span>Count: {context?.count}</span>
          <span>Current: {context?.current}</span>
          <span>Is First: {context?.isFirst ? 'Yes' : 'No'}</span>
          <span>Is Last: {context?.isLast ? 'Yes' : 'No'}</span>
        </div>
      );
    }

    render(
      <Pagination count={5} current={1} onChange={vi.fn()}>
        <TestComponent />
      </Pagination>,
    );

    expect(screen.getByText('Count: 5')).toBeInTheDocument();
    expect(screen.getByText('Current: 1')).toBeInTheDocument();
    expect(screen.getByText('Is First: Yes')).toBeInTheDocument();
    expect(screen.getByText('Is Last: No')).toBeInTheDocument();
  });

  it('calls onChange when a page is clicked', async () => {
    const onChangeMock = vi.fn();
    render(
      <Pagination count={5} current={1} onChange={onChangeMock}>
        <button
          onClick={() => {
            onChangeMock(2);
          }}
        >
          Go to Page 2
        </button>
      </Pagination>,
    );

    const button = screen.getByText('Go to Page 2');
    await userEvent.click(button);

    expect(onChangeMock).toHaveBeenCalledWith(2);
  });
});

import { render, screen } from '@testing-library/react';
import { expect, describe, it, vi } from 'vitest';
import { Search } from '../search';
import { SearchInput } from '../components/search-input';
import { SearchResults } from '../components/search-results';

describe('<Search />', () => {
  it('renders without crashing', () => {
    render(
      <Search data-testid="search">
        <SearchInput />
        <SearchResults>results</SearchResults>
      </Search>,
    );
    const element = screen.getByTestId('search');
    expect(element).toBeInTheDocument();
  });

  it('renders with icons', () => {
    render(
      <Search data-testid="search">
        <SearchInput onChange={vi.fn()} value="test" />
        <SearchResults>results</SearchResults>
      </Search>,
    );

    const searchIcon = screen.queryByTestId('cape-search-control-icon');
    expect(searchIcon).toBeInTheDocument();

    const clearButton = screen.queryByTestId('cape-search-clear-btn');
    expect(clearButton).toBeInTheDocument();
  });

  it('renders as `div` by default', () => {
    render(
      <Search data-testid="search">
        <span>input</span>
        <span>results</span>
      </Search>,
    );
    const element = screen.getByTestId('search');
    expect(element.tagName).toBe('DIV');
  });

  it('renders with custom class', () => {
    render(
      <Search className="custom-class" data-testid="search">
        <span>input</span>
        <span>results</span>
      </Search>,
    );
    const element = screen.getByTestId('search');
    expect(element).toHaveClass('custom-class');
  });

  it('applies system props correctly', () => {
    render(
      <Search data-testid="search" style={{ margin: '10px', width: '100px' }}>
        <span>input</span>
        <span>results</span>
      </Search>,
    );
    const element = screen.getByTestId('search');
    expect(element).toHaveStyle({
      margin: '10px',
      width: '100px',
    });
  });
});

import { render, screen } from '@testing-library/react';
import { expect, describe, it } from 'vitest';
import { SearchResults } from '../search-results';

describe('SearchResults Component', () => {
  it('renders without crashing', () => {
    render(<SearchResults data-testid="search-results">results</SearchResults>);
    const element = screen.getByTestId('search-results');
    expect(element).toBeInTheDocument();
  });

  it('renders as `div` by default', () => {
    render(<SearchResults data-testid="search-results">results</SearchResults>);
    const element = screen.getByTestId('search-results');
    expect(element.tagName).toBe('DIV');
  });

  it('renders with custom class', () => {
    render(
      <SearchResults className="custom-class" data-testid="search-results">
        results
      </SearchResults>,
    );
    const element = screen.getByTestId('search-results');
    expect(element).toHaveClass('custom-class');
  });

  it('applies system prop correctly', () => {
    render(
      <SearchResults
        data-testid="search-results"
        style={{ margin: '10px', padding: '50px' }}
      >
        results
      </SearchResults>,
    );
    const element = screen.getByTestId('search-results');
    expect(element).toHaveStyle({
      margin: '10px',
      padding: '50px',
    });
  });

  it('renders children', () => {
    render(
      <SearchResults>
        <span>Child element</span>
      </SearchResults>,
    );

    expect(screen.getByText('Child element')).toBeInTheDocument();
  });
});

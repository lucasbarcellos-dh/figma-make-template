import { fireEvent, render, screen } from '@testing-library/react';
import { expect, describe, it, vi } from 'vitest';
import { SearchInput } from '../search-input';

describe('<SearchInput />', () => {
  it('renders without crashing', () => {
    render(<SearchInput data-testid="search-input" />);
    const element = screen.getByTestId('search-input');
    expect(element).toBeInTheDocument();
  });

  it('renders with search icon', () => {
    render(<SearchInput data-testid="search-input" />);
    const element = screen.getByTestId('cape-search-control-icon');
    expect(element).toBeInTheDocument();
  });

  it('renders as `input`', () => {
    render(<SearchInput data-testid="search-input" />);
    const element = screen.getByTestId('search-input');
    expect(element.tagName).toBe('INPUT');
  });

  it('renders with custom class', () => {
    render(<SearchInput className="custom-class" />);
    const element = screen.getByTestId('cape-search-wrapper');
    expect(element).toHaveClass('custom-class');
  });

  it('renders input correctly', () => {
    render(<SearchInput placeholder="Search query" />);
    const inputElement = screen.getByPlaceholderText('Search query');
    expect(inputElement.tagName).toBe('INPUT');
  });

  it('renders as disabled', () => {
    render(<SearchInput disabled placeholder="Search query" />);
    const inputElement = screen.getByPlaceholderText('Search query');
    expect(inputElement.getAttribute('disabled')).toBeDefined();
  });

  it('renders as readonly', () => {
    render(<SearchInput placeholder="Search query" readOnly />);
    const inputElement = screen.getByPlaceholderText('Search query');
    expect(inputElement.getAttribute('readonly')).toBeDefined();
  });

  it('calls onChange handler when input value changes', () => {
    const handleChange = vi.fn();
    render(<SearchInput onChange={handleChange} placeholder="Search query" />);
    const inputElement = screen.getByPlaceholderText('Search query');
    fireEvent.change(inputElement, { target: { value: 'test' } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it('calls onChange handler when clear icon is clicked', () => {
    const handleChange = vi.fn();
    render(
      <SearchInput
        onChange={handleChange}
        placeholder="Search query"
        value="test"
      />,
    );
    const clearButton = screen.getByTestId('cape-search-clear-btn');
    fireEvent.click(clearButton);
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it('shows clear icon when input value is not empty', () => {
    render(<SearchInput placeholder="Search query" value="test" />);
    const clearButton = screen.getByTestId('cape-search-clear-btn');
    expect(clearButton).toBeVisible();
  });

  it('hides clear icon when input value is empty', () => {
    render(<SearchInput placeholder="Search query" value="" />);
    const clearButton = screen.queryByTestId('cape-search-clear-btn');
    expect(clearButton).not.toBeInTheDocument();
  });

  it('applies system props correctly', () => {
    render(
      <SearchInput placeholder="Search query" style={{ width: '100px' }} />,
    );
    const element = screen.getByTestId('cape-search-wrapper');
    expect(element).toHaveStyle({
      width: '100px',
    });
  });
});

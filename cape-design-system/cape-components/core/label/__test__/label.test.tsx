import { render, screen } from '@testing-library/react';
import { expect, describe, it } from 'vitest';
import { Label } from '../label';

describe('<Label />', () => {
  it('renders the component', () => {
    render(<Label>Test Label</Label>);
    const labelElement: HTMLElement = screen.getByText('Test Label');
    expect(labelElement).toBeInTheDocument();
  });

  it('renders medium size by default', () => {
    render(<Label>Test Label</Label>);
    const labelElement: HTMLElement = screen.getByText('Test Label');
    expect(labelElement.dataset.size).toBe('medium');
  });

  it('renders as disabled', () => {
    render(<Label disabled>Test Box</Label>);
    const labelElement: HTMLElement | null = screen.queryByText('Test Box');
    expect(labelElement?.getAttribute('disabled')).toBeDefined();
  });

  it('renders with custom class', () => {
    render(<Label className="custom-class">Test Label</Label>);
    const testLabel: HTMLElement = screen.getByText('Test Label');
    expect(testLabel).toHaveClass('custom-class');
  });

  it.each(['xsmall', 'small', 'medium', 'large'] as const)(
    'renders with passed %s size',
    (size) => {
      render(<Label size={size}>Test Label</Label>);
      const labelElement: HTMLElement = screen.getByText('Test Label');
      expect(labelElement.dataset.size).toBe(size);
    },
  );

  it('renders with correct styles', () => {
    render(<Label style={{ margin: 10, padding: 5 }}>Test Label</Label>);
    const labelElement: HTMLElement = screen.getByText('Test Label');
    expect(labelElement).toHaveStyle({
      margin: '10px',
      padding: '5px',
    });
  });
});

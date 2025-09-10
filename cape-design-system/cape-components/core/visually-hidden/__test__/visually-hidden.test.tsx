import { render, screen } from '@testing-library/react';
import { expect, describe, it } from 'vitest';
import { VisuallyHidden } from '../visually-hidden';

describe('VisuallyHidden Component', () => {
  it('renders without crashing', () => {
    render(<VisuallyHidden>Test</VisuallyHidden>);
    const element = screen.getByText('Test');
    expect(element).toBeInTheDocument();
  });

  it('renders as `div` by default', () => {
    render(<VisuallyHidden>Test</VisuallyHidden>);
    const element = screen.getByText('Test');
    expect(element.tagName).toBe('DIV');
  });

  it('renders as `p` when supplied as property', () => {
    render(<VisuallyHidden as="p">Test</VisuallyHidden>);
    const element = screen.getByText('Test');
    expect(element.tagName).toBe('P');
  });
});

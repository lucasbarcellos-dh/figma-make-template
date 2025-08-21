import React, { createRef } from 'react';
import { render, screen } from '@testing-library/react';
import { expect, it, describe, vi } from 'vitest';
import { AccordionHeader } from '../accordion-header';

vi.mock('../../../hooks/use-accordion-item-context', () => ({
  useAccordionItemContext: vi.fn(),
}));

describe('<AccordionHeader />', () => {
  it('renders children correctly', () => {
    render(<AccordionHeader>Header Content</AccordionHeader>);
    expect(screen.getByText('Header Content')).toBeInTheDocument();
  });

  it('forwards ref to element', () => {
    const ref = createRef<HTMLDivElement>();
    render(<AccordionHeader ref={ref}>Header Content</AccordionHeader>);
    expect(ref.current).toBeTruthy();
  });
});

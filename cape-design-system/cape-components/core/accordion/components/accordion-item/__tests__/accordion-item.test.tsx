import { render, screen } from '@testing-library/react';
import { expect, describe, it } from 'vitest';
import { createRef } from 'react';
import { AccordionItem } from '../accordion-item';
import { Accordion } from '../../../accordion';

describe('<AccordionItem />', () => {
  it('renders children correctly', () => {
    render(<AccordionItem value="item1">Content</AccordionItem>, {
      wrapper: Accordion,
    });
    expect(screen.getByText('Content')).toBeInTheDocument();
  });

  it('should apply the correct class name', () => {
    render(
      <AccordionItem className="custom-class" value="item1">
        Content
      </AccordionItem>,
      {
        wrapper: Accordion,
      },
    );
    expect(screen.getByText('Content')).toHaveClass('custom-class');
  });

  it('should forward ref to element', () => {
    const ref = createRef<HTMLDetailsElement>();
    render(
      <AccordionItem ref={ref} value="item1">
        Content
      </AccordionItem>,
      {
        wrapper: Accordion,
      },
    );
    expect(ref.current).toBeTruthy();
  });
});

import React, { createRef } from 'react';
import { render, screen } from '@testing-library/react';
import { expect, it, describe } from 'vitest';
import { AccordionDescription } from '../accordion-description';

describe('<AccordionDescription />', () => {
  it('renders the description text', () => {
    render(<AccordionDescription>Koalas are very slow</AccordionDescription>);
    expect(screen.getByText(/Koalas are very slow/i)).toBeTruthy();
  });

  it('should apply the correct class name', () => {
    render(
      <AccordionDescription className="custom-class">
        Koalas are very slow
      </AccordionDescription>,
    );
    expect(screen.getByText(/Koalas are very slow/i)).toHaveClass(
      'custom-class',
    );
  });

  it('should forward ref to element', () => {
    const ref = createRef<HTMLParagraphElement>();
    render(
      <AccordionDescription ref={ref}>
        Koalas are very slow
      </AccordionDescription>,
    );
    expect(ref.current).toBeTruthy();
  });
});

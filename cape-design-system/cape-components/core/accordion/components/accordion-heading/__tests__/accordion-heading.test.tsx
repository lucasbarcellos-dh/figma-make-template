import { render, screen } from '@testing-library/react';
import { expect, it, describe } from 'vitest';
import { createRef } from 'react';
import { AccordionHeading } from '../accordion-heading';

describe('<AccordionHeading/>', () => {
  it('renders children correctly', () => {
    render(<AccordionHeading>Heading Content</AccordionHeading>);
    expect(screen.getByText('Heading Content')).toBeInTheDocument();
  });

  it('applies the correct class name', () => {
    render(
      <AccordionHeading className="custom-class">
        Heading Content
      </AccordionHeading>,
    );
    expect(screen.getByText('Heading Content')).toHaveClass('custom-class');
  });

  it('forwards ref to element', () => {
    const ref = createRef<HTMLElement>();
    render(<AccordionHeading ref={ref}>Heading</AccordionHeading>);
    expect(ref.current).toBeTruthy();
  });
});

import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { createRef } from 'react';
import { AccordionBody } from '../accordion-body';

describe('<AccordionBody />', () => {
  it('renders correctly', async () => {
    render(<AccordionBody>Accordion body content</AccordionBody>);
    const textContent = await screen.findByText(/Accordion body content/i);
    expect(textContent).toBeInTheDocument();
  });

  it('should apply the correct class name', async () => {
    render(
      <AccordionBody className="custom-class">
        Accordion body content
      </AccordionBody>,
    );
    const textContent = await screen.findByText(/Accordion body content/i);
    expect(textContent).toHaveClass('custom-class');
  });

  it('should forwards ref to element', async () => {
    const ref = createRef<HTMLDivElement>();
    render(<AccordionBody ref={ref}>Accordion body content</AccordionBody>);
    const element = await screen.findByText(/Accordion body content/i);
    expect(ref.current).toBe(element);
  });
});

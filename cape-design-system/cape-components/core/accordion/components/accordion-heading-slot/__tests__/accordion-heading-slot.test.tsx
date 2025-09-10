import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { AddIcon } from '@deliveryhero/cape-icons';
import { createRef } from 'react';
import { AccordionHeadingSlot } from '../accordion-heading-slot';

describe('<AccordionHeading />', () => {
  it('renders correctly', () => {
    render(
      <AccordionHeadingSlot>
        <AddIcon aria-label="Add icon" />
      </AccordionHeadingSlot>,
    );
    expect(screen.getByLabelText('Add icon')).toBeTruthy();
  });

  it('should forward ref to element', () => {
    const ref = createRef<HTMLDivElement>();
    render(
      <AccordionHeadingSlot ref={ref}>
        <AddIcon />
      </AccordionHeadingSlot>,
    );
    expect(ref.current).toBeTruthy();
  });
});

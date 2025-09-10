import { render, screen } from '@testing-library/react';
import { expect, describe, it } from 'vitest';
import { Heading } from '../heading';

describe('<Heading />', () => {
  it('renders without crashing', () => {
    render(<Heading level={1}>Test</Heading>);
    const headingElement = screen.getByText('Test');
    expect(headingElement).toBeInTheDocument();
  });

  it('renders the correct heading level based on the level prop', () => {
    render(<Heading level={3}>Test</Heading>);
    const headingElement = screen.getByText('Test');
    expect(headingElement.tagName).toBe('H3');
  });

  it('overrides the default variant if a custom variant is provided', () => {
    render(
      <Heading level={4} variant="displayXLarge">
        Test
      </Heading>,
    );
    const headingElement = screen.getByText('Test');
    expect(headingElement.dataset.variant).toBe('displayXLarge');
  });

  it('sets primary color by default when the color prop is not set.', () => {
    render(<Heading level={2}>Test</Heading>);
    const headingElement = screen.getByText('Test');
    expect(headingElement.dataset.color).toBe('primary');
  });

  it('sets the color data attribute if a color is provided', () => {
    render(
      <Heading level={2} color="danger">
        Test
      </Heading>,
    );
    const headingElement = screen.getByText('Test');
    expect(headingElement.dataset.color).toBe('danger');
  });

  it('applies custom class name and allows style overrides via class', () => {
    render(
      <Heading level={1} className="custom-heading">
        Test
      </Heading>,
    );
    const headingElement = screen.getByText('Test');

    expect(headingElement).toHaveClass('custom-heading');
  });
});

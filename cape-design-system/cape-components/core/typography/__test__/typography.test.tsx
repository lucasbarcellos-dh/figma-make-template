import { render, screen } from '@testing-library/react';
import { expect, describe, it } from 'vitest';
import { Typography } from '../typography';

describe('Typography Component', () => {
  it('should render without crashing', () => {
    render(
      <Typography as="h1" variant="displayLarge">
        Test
      </Typography>,
    );
    const typographyElement: HTMLElement = screen.getByText('Test');
    expect(typographyElement).toBeInTheDocument();
  });

  it('should render the proper HTML element based on the "as" prop', () => {
    render(
      <Typography as="h1" variant="displayLarge">
        Test
      </Typography>,
    );
    const typographyElement: HTMLElement = screen.getByText('Test');
    expect(typographyElement.tagName).toBe('H1');
  });

  it('should have primary color by default when the color prop is not set.', () => {
    render(
      <Typography as="h1" variant="displayLarge">
        Test
      </Typography>,
    );
    const typographyElement: HTMLElement = screen.getByText('Test');
    expect(typographyElement.dataset.color).toBe('primary');
  });
});

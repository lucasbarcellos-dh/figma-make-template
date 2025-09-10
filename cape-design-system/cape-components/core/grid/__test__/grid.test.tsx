import { render, screen } from '@testing-library/react';
import { expect, describe, it } from 'vitest';
import { createRef } from 'react';
import { Grid } from '../grid';

describe('Grid Component', () => {
  it('renders without crashing', () => {
    render(<Grid />);
  });

  it('applies default gutter spacing if not provided', () => {
    render(<Grid data-testid="grid" />);

    const gridElement = screen.getByTestId('grid');

    expect(gridElement).toHaveStyle(
      '--cp-grid-gap-xs: var(--cp-grid-gutter-wide)',
    );
    expect(gridElement).toHaveStyle(
      '--cp-grid-gap-sm: var(--cp-grid-gutter-wide)',
    );
    expect(gridElement).toHaveStyle(
      '--cp-grid-gap-md: var(--cp-grid-gutter-wide)',
    );
    expect(gridElement).toHaveStyle(
      '--cp-grid-gap-lg: var(--cp-grid-gutter-wide)',
    );
    expect(gridElement).toHaveStyle(
      '--cp-grid-gap-xl: var(--cp-grid-gutter-wide)',
    );
    expect(gridElement).toHaveStyle(
      '--cp-grid-gap-xxl: var(--cp-grid-gutter-wide)',
    );
  });

  it('overrides gutter spacing with provided props', () => {
    render(<Grid data-testid="grid" gap={{ xs: 'narrow', lg: 'condensed' }} />);
    const gridElement = screen.getByTestId('grid');
    expect(gridElement).toHaveStyle(
      '--cp-grid-gap-xs: var(--cp-grid-gutter-narrow)',
    );
    expect(gridElement).toHaveStyle(
      '--cp-grid-gap-lg: var(--cp-grid-gutter-condensed)',
    );
    expect(gridElement).toHaveStyle(
      '--cp-grid-gap-md: var(--cp-grid-gutter-wide)',
    );
    expect(gridElement).toHaveStyle(
      '--cp-grid-gap-xxl: var(--cp-grid-gutter-wide)',
    );
    expect(gridElement).toHaveStyle(
      '--cp-grid-gap-sm: var(--cp-grid-gutter-wide)',
    );
    expect(gridElement).toHaveStyle(
      '--cp-grid-gap-xl: var(--cp-grid-gutter-wide)',
    );
  });

  it('passes children correctly', () => {
    function ChildComponent() {
      return <div>Child Component</div>;
    }
    render(
      <Grid>
        <ChildComponent />
      </Grid>,
    );
    expect(screen.getByText('Child Component')).toBeInTheDocument();
  });

  it('forwards ref correctly', () => {
    const ref = createRef<HTMLDivElement>();
    render(<Grid ref={ref} />);
    expect(ref.current).toBeInTheDocument();
  });
});

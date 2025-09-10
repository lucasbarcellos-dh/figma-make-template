import { render, screen } from '@testing-library/react';
import { expect, describe, it } from 'vitest';
import { GridItem } from '../grid-item';

describe('GridItem', () => {
  it('renders children correctly', () => {
    render(
      <GridItem>
        <div>Test Child</div>
      </GridItem>,
    );

    expect(screen.getByText('Test Child')).toBeInTheDocument();
  });

  it('applies default className correctly', () => {
    render(<GridItem data-testid="grid-item" />);
    const gridItem = screen.getByTestId('grid-item');
    expect(gridItem.className).toContain('grid-item');
  });

  it('applies custom className correctly', () => {
    render(<GridItem className="custom-class" data-testid="grid-item" />);
    const gridItem = screen.getByTestId('grid-item');

    expect(gridItem).toHaveClass('custom-class');
  });

  it('applies correct CSS properties based on props', () => {
    render(
      <GridItem
        data-testid="grid-item"
        lg={3}
        md={4}
        sm={5}
        xl={2}
        xs={6}
        xxl={1}
      />,
    );
    const gridItem = screen.getByTestId('grid-item');
    expect(gridItem).toHaveStyle({
      '--cp-grid-column-xs': '6',
      '--cp-grid-column-sm': '5',
      '--cp-grid-column-md': '4',
      '--cp-grid-column-lg': '3',
      '--cp-grid-column-xl': '2',
      '--cp-grid-column-xxl': '1',
    });
  });

  it('applies default breakpoints and passed breakpoints together', () => {
    render(<GridItem data-testid="grid-item" lg={3} sm={5} xxl={1} />);
    const gridItem = screen.getByTestId('grid-item');
    expect(gridItem).toHaveStyle({
      '--cp-grid-column-sm': '5',
      '--cp-grid-column-md': '5',
      '--cp-grid-column-lg': '3',
      '--cp-grid-column-xl': '3',
      '--cp-grid-column-xxl': '1',
    });
  });
});

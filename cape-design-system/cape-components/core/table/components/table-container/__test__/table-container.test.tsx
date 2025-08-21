import { render, screen } from '@testing-library/react';
import { expect, describe, it } from 'vitest';
import { TableContainer } from '..';

describe('<TableContainer />', () => {
  it('renders the component', () => {
    render(
      <TableContainer data-testid="table-container">
        Table Container
      </TableContainer>,
    );

    const element = screen.getByTestId('table-container');

    expect(element).toBeInTheDocument();
  });

  it('renders with a custom class', () => {
    render(
      <TableContainer className="custom-class" data-testid="table-container" />,
    );
    const element = screen.getByTestId('table-container');
    expect(element).toHaveClass('custom-class');
  });
});

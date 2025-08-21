import { render, screen } from '@testing-library/react';
import { expect, describe, it } from 'vitest';
import { TableRow } from '../../table-row';
import { Table } from '../../../table';
import { TableBody } from '../../table-body';

describe('<TableRow />', () => {
  it('renders the component', () => {
    render(
      <Table>
        <TableBody>
          <TableRow data-testid="table-row" />
        </TableBody>
      </Table>,
    );

    const element = screen.getByTestId('table-row');

    expect(element).toBeInTheDocument();
    expect(element.nodeName).toBe('TR');
  });

  it('renders with a custom class', () => {
    render(
      <Table>
        <TableBody>
          <TableRow className="custom-class" data-testid="table-header" />
        </TableBody>
      </Table>,
    );
    const element = screen.getByTestId('table-header');
    expect(element).toHaveClass('custom-class');
  });
});

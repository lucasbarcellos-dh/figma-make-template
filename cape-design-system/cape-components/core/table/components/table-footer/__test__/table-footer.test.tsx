import { render, screen, within } from '@testing-library/react';
import { expect, describe, it } from 'vitest';
import { TableFooter } from '../table-footer';
import { TableRow } from '../../table-row';
import { TableCell } from '../../table-cell';
import { Table } from '../../../table';

describe('<TableFooter />', () => {
  it('renders the component', () => {
    render(
      <Table>
        <TableFooter data-testid="table-footer">
          <TableRow>
            <TableCell colSpan={2}>Footer</TableCell>
          </TableRow>
        </TableFooter>
      </Table>,
    );

    const element = screen.getByTestId('table-footer');

    expect(element).toBeInTheDocument();
    expect(element.nodeName).toBe('TFOOT');
    expect(within(element).getAllByText('Footer')).toHaveLength(1);
  });

  it('renders with a custom class', () => {
    render(
      <Table>
        <TableFooter className="custom-class" data-testid="table-footer" />
      </Table>,
    );
    const element = screen.getByTestId('table-footer');
    expect(element).toHaveClass('custom-class');
  });
});

import { render, screen, within } from '@testing-library/react';
import { expect, describe, it } from 'vitest';
import { TableBody } from '../table-body';
import { TableRow } from '../../table-row';
import { TableCell } from '../../table-cell';
import { Table } from '../../../table';

describe('<TableBody />', () => {
  it('renders the component', () => {
    render(
      <Table>
        <TableBody data-testid="table-body">
          <TableRow>
            <TableCell>John Doe</TableCell>
            <TableCell>john.doe@deliveryhero.com</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>John Doe</TableCell>
            <TableCell>john.doe@deliveryhero.com</TableCell>
          </TableRow>
        </TableBody>
      </Table>,
    );

    const element = screen.getByTestId('table-body');
    expect(element).toBeInTheDocument();
    expect(within(element).getAllByText('John Doe')).toHaveLength(2);
  });

  it('renders with a custom class', () => {
    render(
      <Table>
        <TableBody className="custom-class" data-testid="table-body" />
      </Table>,
    );

    const element = screen.getByTestId('table-body');
    expect(element).toHaveClass('custom-class');
  });
});

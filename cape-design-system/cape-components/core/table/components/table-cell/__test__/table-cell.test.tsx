import { render, screen } from '@testing-library/react';
import { expect, describe, it } from 'vitest';
import { TableCell } from '..';
import { TableRow } from '../../table-row';
import { Table } from '../../../table';
import { TableBody } from '../../table-body';

describe('<TableCell />', () => {
  it('renders the component', () => {
    render(
      <Table>
        <TableBody>
          <TableRow>
            <TableCell data-testid="table-cell">John Doe</TableCell>
          </TableRow>
        </TableBody>
      </Table>,
    );

    const element = screen.getByTestId('table-cell');
    expect(element).toBeInTheDocument();
    expect(element.nodeName).toBe('TD');
  });

  it('renders with a custom class', () => {
    render(
      <Table>
        <TableBody>
          <TableRow>
            <TableCell className="custom-class" data-testid="table-cell" />
          </TableRow>
        </TableBody>
      </Table>,
    );
    const element = screen.getByTestId('table-cell');
    expect(element).toHaveClass('custom-class');
  });
});

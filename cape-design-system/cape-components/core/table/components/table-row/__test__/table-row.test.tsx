import { render, screen, within } from '@testing-library/react';
import { expect, describe, it } from 'vitest';
import { TableHeader } from '../../table-header';
import { TableRow } from '..';
import { TableCell } from '../../table-cell';
import { Table } from '../../../table';

describe('<TableHeader />', () => {
  it('renders the component', () => {
    render(
      <Table>
        <TableHeader data-testid="table-header">
          <TableRow>
            <TableCell colSpan={2}>Header</TableCell>
          </TableRow>
        </TableHeader>
      </Table>,
    );

    const element = screen.getByTestId('table-header');

    expect(element).toBeInTheDocument();
    expect(element.nodeName).toBe('THEAD');
    expect(within(element).getAllByText('Header')).toHaveLength(1);
  });

  it('renders with a custom class', () => {
    render(
      <Table>
        <TableHeader className="custom-class" data-testid="table-header" />
      </Table>,
    );
    const element = screen.getByTestId('table-header');
    expect(element).toHaveClass('custom-class');
  });
});

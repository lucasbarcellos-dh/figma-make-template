import { render, screen } from '@testing-library/react';
import { expect, describe, it } from 'vitest';
import { TableHead } from '..';
import { TableRow } from '../../table-row';
import { Table } from '../../../table';
import { TableHeader } from '../../table-header';

describe('<TableHead />', () => {
  it('renders the component', () => {
    render(
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead data-testid="table-head">John Doe</TableHead>
          </TableRow>
        </TableHeader>
      </Table>,
    );

    const element = screen.getByTestId('table-head');
    expect(element).toBeInTheDocument();
    expect(element.nodeName).toBe('TH');
  });

  it('renders with a custom class', () => {
    render(
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="custom-class" data-testid="table-head" />
          </TableRow>
        </TableHeader>
      </Table>,
    );
    const element = screen.getByTestId('table-head');
    expect(element).toHaveClass('custom-class');
  });
});

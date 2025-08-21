import { render, screen, within } from '@testing-library/react';
import { expect, describe, it } from 'vitest';
import { Table } from '../table';
import { TableHeader } from '../components/table-header';
import { TableRow } from '../components/table-row';
import { TableHead } from '../components/table-head';
import { TableBody } from '../components/table-body';
import { TableCell } from '../components/table-cell';
import { TableFooter } from '../components/table-footer';
import { TableCaption } from '../components/table-caption';

describe('<Table />', () => {
  it('renders basic structure', () => {
    render(
      <Table data-testid="table">
        <TableCaption>Users</TableCaption>
        <TableHeader data-testid="table-header">
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>E-mail</TableHead>
          </TableRow>
        </TableHeader>
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
        <TableFooter data-testid="table-footer">
          <TableRow>
            <TableCell colSpan={3}>Footer area of the table</TableCell>
          </TableRow>
        </TableFooter>
      </Table>,
    );
    const tableElement = screen.getByTestId('table');
    const tableHeaderElement = screen.getByTestId('table-header');
    const tableBodyElement = screen.getByTestId('table-body');
    const tableFooterElement = screen.getByTestId('table-footer');
    const tableCaptionElement = screen.getByText('Users');

    expect(tableElement).toBeInTheDocument();
    expect(tableHeaderElement).toBeInTheDocument();
    expect(tableBodyElement).toBeInTheDocument();
    expect(tableFooterElement).toHaveTextContent('Footer area of the table');
    expect(tableCaptionElement).toBeInTheDocument();
    expect(within(tableHeaderElement).getByText('Name')).toBeInTheDocument();
    expect(within(tableBodyElement).getAllByText('John Doe')).toHaveLength(2);
  });

  it('renders with a custom class', () => {
    render(<Table className="custom-class" data-testid="table" />);

    const element = screen.getByTestId('table');
    expect(element).toHaveClass('custom-class');
  });

  it('renders with a custom size', () => {
    render(<Table data-testid="table" size="small" />);

    const element = screen.getByTestId('table');
    expect(element).toHaveAttribute('data-size', 'small');
  });

  it('applies system props', () => {
    render(<Table data-testid="table" style={{ width: 100 }} />);

    const element = screen.getByTestId('table');
    expect(element).toHaveStyle({
      width: '100px',
    });
  });
});

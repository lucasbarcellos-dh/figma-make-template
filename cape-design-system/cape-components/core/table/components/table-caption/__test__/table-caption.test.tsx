import { render, screen } from '@testing-library/react';
import { expect, describe, it } from 'vitest';
import { TableCaption } from '..';

describe('<TableCaption />', () => {
  it('renders the component', () => {
    render(<TableCaption>Table caption</TableCaption>);

    const element = screen.getByText('Table caption');

    expect(element).toBeInTheDocument();
    expect(element.nodeName).toBe('CAPTION');
  });

  it('renders with a custom class', () => {
    render(
      <TableCaption className="custom-class" data-testid="table-caption" />,
    );
    const element = screen.getByTestId('table-caption');
    expect(element).toHaveClass('custom-class');
  });
});

import { expect, describe, it } from 'vitest';
import { createRef } from 'react';
import { render, screen } from '@testing-library/react';
import { List, ListItem, ListItemText } from '..';
import { useListContext } from '../context';

describe('List', () => {
  it('should have medium size by default', () => {
    render(
      <List>
        <ListItem data-testid="list-item">
          <ListItemText>List Item 1</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>List Item 2</ListItemText>
        </ListItem>
      </List>,
    );

    expect(screen.getByText('List Item 1').dataset.size).toBe('medium');
  });

  it('renders a list with children', () => {
    render(
      <List>
        <li>List Item 1</li>
        <li>List Item 2</li>
      </List>,
    );

    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(2);
  });

  it('passes ref to the underlying ul element', () => {
    const ref = createRef<HTMLUListElement>();
    render(
      <List ref={ref}>
        <li>List Item 1</li>
      </List>,
    );

    expect(ref.current).toBeInstanceOf(HTMLUListElement); // Ref should be attached to a ul element
  });

  it('applies additional props to the underlying ul element', () => {
    render(
      <List className="custom-class" data-testid="custom-list">
        <li>List Item 1</li>
      </List>,
    );

    const listElement = screen.getByTestId('custom-list');
    expect(listElement).toHaveClass('custom-class'); // Expect the custom class to be applied
  });

  it('provides context values to children', () => {
    function ListItemMock(): JSX.Element {
      const context = useListContext();
      return <div>Size: {context.size}</div>;
    }

    render(
      <List size="large">
        <ListItemMock />
      </List>,
    );

    expect(screen.getByText(/Size: large/)).toBeInTheDocument();
  });
});

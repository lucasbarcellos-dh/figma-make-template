import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { expect, describe, it, vi } from 'vitest';
import { createRef } from 'react';
import { ListItem } from '../list-item';
import { List } from '../../../list';

describe('ListItem', () => {
  it('renders without crashing', () => {
    render(<ListItem>List Item text</ListItem>);
    expect(screen.getByText('List Item text')).toBeInTheDocument();
  });

  it('forwards the ref correctly', () => {
    const ref = createRef<HTMLLIElement>();
    render(<ListItem ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLLIElement);
  });

  it('renders children correctly', () => {
    render(<ListItem>Child Content</ListItem>);
    expect(screen.getByText('Child Content')).toBeInTheDocument();
  });

  it('renders secondary action when provided', () => {
    render(
      <ListItem
        secondaryAction={
          <div data-testid="secondary-action">Secondary Action</div>
        }
      />,
    );
    expect(screen.getByTestId('secondary-action')).toBeInTheDocument();
  });

  it('renders List with ListItems', () => {
    render(
      <List>
        <ListItem>Item 1</ListItem>
        <ListItem>Item 2</ListItem>
      </List>,
    );

    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Item 2')).toBeInTheDocument();
  });

  it('handles click events on ListItem', async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();

    render(
      <List>
        <ListItem onClick={handleClick}>Clickable Item</ListItem>
      </List>,
    );

    await user.click(screen.getByText('Clickable Item'));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('handles click events on multiple ListItems', async () => {
    const user = userEvent.setup();
    const firstItemClick = vi.fn();
    const secondItemClick = vi.fn();

    render(
      <List>
        <ListItem onClick={firstItemClick}>Item 1</ListItem>
        <ListItem onClick={secondItemClick}>Item 2</ListItem>
      </List>,
    );

    await user.click(screen.getByText('Item 1'));
    expect(firstItemClick).toHaveBeenCalledTimes(1);

    await user.click(screen.getByText('Item 2'));
    expect(secondItemClick).toHaveBeenCalledTimes(1);
  });

  it('does not trigger click event when ListItem is disabled', async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();

    render(
      <List>
        <ListItem disabled onClick={handleClick}>
          Disabled Item
        </ListItem>
      </List>,
    );

    /**
     * INFO: Since userevent emits an error regarding pointer events when clicked on disable element.
     * More explanation in this thread https://github.com/testing-library/user-event/issues/974#issuecomment-1158692211
     */
    await expect(() =>
      user.click(screen.getByText('Disabled Item')),
    ).rejects.toThrow(/pointer-events: none/);
    expect(handleClick).not.toHaveBeenCalled();
  });

  it('applies disabled state correctly to ListItem', () => {
    render(
      <List>
        <ListItem disabled>Disabled Item</ListItem>
      </List>,
    );

    const disabledItem = screen.getByText('Disabled Item');
    expect(disabledItem).toHaveAttribute('data-disabled');
  });
});

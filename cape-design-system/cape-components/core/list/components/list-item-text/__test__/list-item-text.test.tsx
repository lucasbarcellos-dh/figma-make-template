import { render, screen } from '@testing-library/react';
import type { Mock } from 'vitest';
import { expect, describe, it, beforeEach, vi } from 'vitest';
import { createRef } from 'react';
import { ListItemText } from '../list-item-text';
import { useListItemText } from '../hooks/use-list-item-text';

vi.mock('../hooks/use-list-item-text', () => ({
  useListItemText: vi.fn(),
}));

describe('ListItemText', () => {
  beforeEach(() => {
    (useListItemText as Mock).mockReturnValue({
      rootProps: {
        'data-testid': 'list-item-text-root',
      },
      contentProps: {
        primaryText: {
          node: 'Test Title',
          'data-testid': 'primaryText',
        },
        secondaryText: {
          node: 'Test SubTitle',
          'data-testid': 'secondaryText',
        },
      },
    });
  });

  it('renders without crashing', () => {
    render(<ListItemText />);
    expect(screen.getByTestId('list-item-text-root')).toBeInTheDocument();
  });

  it('forwards the ref correctly', () => {
    const ref = createRef<HTMLDivElement>();
    render(<ListItemText ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it('renders title and subtitle when provided', () => {
    render(<ListItemText />);
    expect(screen.getByTestId('primaryText')).toHaveTextContent('Test Title');
    expect(screen.getByTestId('secondaryText')).toHaveTextContent(
      'Test SubTitle',
    );
  });

  it('does not render title and subtitle when not provided', () => {
    (useListItemText as Mock).mockReturnValue({
      rootProps: {},
      contentProps: {
        primaryText: { node: null },
        secondaryText: { node: null },
      },
    });
    render(<ListItemText />);
    expect(screen.queryByTestId('title')).not.toBeInTheDocument();
    expect(screen.queryByTestId('subtitle')).not.toBeInTheDocument();
  });

  it('renders additional children if passed', () => {
    render(
      <ListItemText>
        <span data-testid="additional-child">Additional Child</span>
      </ListItemText>,
    );
    expect(screen.getByTestId('additional-child')).toHaveTextContent(
      'Additional Child',
    );
  });
});

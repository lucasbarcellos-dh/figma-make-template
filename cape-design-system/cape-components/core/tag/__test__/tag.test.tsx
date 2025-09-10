import { render, screen } from '@testing-library/react';
import { expect, describe, it } from 'vitest';
import { Tag } from '../tag';

describe('Tag Component', () => {
  it('should render without crashing', () => {
    render(<Tag>test</Tag>);
    const tagElement: HTMLElement = screen.getByText('test');
    expect(tagElement).toBeInTheDocument();
  });

  it('should have branded variant by default when the status prop is not set.', () => {
    render(<Tag data-testid="tag-root">test</Tag>);
    const tagRootElement: HTMLElement = screen.getByTestId('tag-root');
    expect(tagRootElement.dataset.status).toBe('branded');
  });

  it('renders with size="medium" by default', () => {
    render(<Tag data-testid="tag-root">test</Tag>);
    const tagRootElement: HTMLElement = screen.getByTestId('tag-root');
    expect(tagRootElement.dataset.size).toBe('medium');
  });

  it('renders with startIcon and endIcon', () => {
    render(
      <Tag endIcon={<span>endIcon</span>} startIcon={<span>startIcon</span>}>
        test
      </Tag>,
    );

    expect(screen.getByText('startIcon')).toBeInTheDocument();
    expect(screen.getByText('endIcon')).toBeInTheDocument();
  });
});

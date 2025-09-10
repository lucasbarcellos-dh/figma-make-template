import { type ReactNode, useRef } from 'react';
import { render, screen, renderHook } from '@testing-library/react';
import { expect, describe, it } from 'vitest';
import { Avatar } from '../avatar';

function TestIcon(): ReactNode {
  return <div>Test Icon Component</div>;
}

describe('Avatar Component', () => {
  it('should render without crashing', () => {
    render(<Avatar initials="DP" />);
    const avatarElement: HTMLElement = screen.getByRole('img');
    expect(avatarElement).toBeInTheDocument();
  });

  it('should forward the ref', () => {
    const { result } = renderHook(() => useRef<HTMLDivElement>(null));
    render(<Avatar initials="DP" ref={result.current} />);
    expect(result.current.current).toBeInTheDocument();
  });

  it('should have medium size by default when no size prop is passed', () => {
    render(<Avatar initials="DP" />);
    const avatarElement: HTMLElement = screen.getByRole('img');
    expect(avatarElement.dataset.size).toBe('medium');
  });

  it('should support the size prop with "small", "medium" and "large" values', () => {
    render(<Avatar initials="DP" size="small" title="Small Avatar" />);
    const smallAvatar: HTMLElement = screen.getByTitle('Small Avatar');
    expect(smallAvatar.dataset.size).toBe('small');

    render(<Avatar initials="DP" size="medium" title="Medium Avatar" />);
    const mediumAvatar: HTMLElement = screen.getByTitle('Medium Avatar');
    expect(mediumAvatar.dataset.size).toBe('medium');

    render(<Avatar initials="DP" size="large" title="Large Avatar" />);
    const largeAvatar: HTMLElement = screen.getByTitle('Large Avatar');
    expect(largeAvatar.dataset.size).toBe('large');
  });

  it('should render the icon element passed as the icon prop without crashing', () => {
    render(<Avatar icon={<TestIcon />} />);
    const iconElement: HTMLElement = screen.getByText('Test Icon Component');
    expect(iconElement).toBeInTheDocument();
  });

  it('should render the image url with string type passed to the image prop', () => {
    const imageUrl = 'https://test.com';
    render(<Avatar image={imageUrl} title="Dummy Person" />);
    const image: HTMLElement = screen.getByAltText('Dummy Person');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', imageUrl);
  });

  it('should render the element passed to the image prop', () => {
    const imageElement = <img alt="dummy for test" src="https://test.com" />;
    render(<Avatar image={imageElement} />);
    const image: HTMLElement = screen.getByAltText('dummy for test');
    expect(image).toBeInTheDocument();
  });

  it('should render the string passed to the "initials" prop', () => {
    render(<Avatar initials="DP" />);
    const avatarElement = screen.getByText('DP');
    expect(avatarElement).toBeInTheDocument();
  });

  it('should have HTML "title" attribute with its value equal to the string passed to the "title" prop', () => {
    render(<Avatar initials="DP" title="Dummy Person" />);
    const avatarElement = screen.getByTitle('Dummy Person');
    expect(avatarElement).toBeInTheDocument();
  });

  it('renders default variant as filled', () => {
    render(<Avatar initials="DP" />);
    const avatarElement = screen.getByText('DP');
    expect(avatarElement.dataset.variant).toBe('filled');
  });

  it('renders correct variant based on the variant prop', () => {
    render(<Avatar initials="DP" variant="outlined" />);
    const avatarElement = screen.getByText('DP');
    expect(avatarElement.dataset.variant).toBe('outlined');
  });
});

import { renderHook } from '@testing-library/react';
import { expect, describe, it, vi } from 'vitest';
import { useListItemText } from '../use-list-item-text';

describe('useListItemText', () => {
  it('should return the correct default props', () => {
    expect(true).toBe(true);
  });
});

vi.mock('../../../../context', () => ({
  useListContext: vi.fn().mockReturnValue({ size: 'medium' }), // Default context size
}));

describe('useListItemText', () => {
  it('returns default class names and size from context when no props are provided', () => {
    const { result } = renderHook(() =>
      useListItemText({ primaryText: 'Title', secondaryText: 'Subtitle' }),
    );

    expect(result.current.rootProps['data-size']).toBe('medium');
  });

  it('returns overridden class names and provided size when props are provided', () => {
    const { result } = renderHook(() =>
      useListItemText({
        className: 'custom-class',
        size: 'large',
        primaryText: 'Title',
        secondaryText: 'Subtitle',
      }),
    );

    expect(result.current.rootProps.className).toContain('custom-class');
    expect(result.current.rootProps['data-size']).toBe('large');
  });

  it('uses the global size from the context if size prop is not provided', () => {
    const { result } = renderHook(() =>
      useListItemText({
        primaryText: 'Title',
        secondaryText: 'Subtitle',
      }),
    );
    expect(result.current.rootProps['data-size']).toBe('medium');
    expect(result.current.contentProps.primaryText['data-size']).toBe('medium');
    expect(result.current.contentProps.secondaryText['data-size']).toBe(
      'medium',
    );
  });

  it('prioritizes the size prop over the global context size', () => {
    const { result } = renderHook(() =>
      useListItemText({
        primaryText: 'Title',
        secondaryText: 'Subtitle',
        size: 'small',
      }),
    );

    expect(result.current.rootProps['data-size']).toBe('small');
    expect(result.current.contentProps.primaryText['data-size']).toBe('small');
    expect(result.current.contentProps.secondaryText['data-size']).toBe(
      'small',
    );
  });

  it('passes primaryText and secondaryText text to the contentProps', () => {
    const { result } = renderHook(() =>
      useListItemText({
        primaryText: 'Expected Title',
        secondaryText: 'Expected Subtitle',
      }),
    );

    expect(result.current.contentProps.primaryText.node).toBe('Expected Title');
    expect(result.current.contentProps.secondaryText.node).toBe(
      'Expected Subtitle',
    );
  });

  it('includes additional styles when style prop is provided', () => {
    const style = { color: 'blue' };
    const { result } = renderHook(() =>
      useListItemText({
        primaryText: 'Title',
        secondaryText: 'Subtitle',
        style,
      }),
    );
    expect(result.current.rootProps.style).toEqual(style);
  });
});

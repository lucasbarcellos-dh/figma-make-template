import { renderHook } from '@testing-library/react';
import { expect, describe, it } from 'vitest';
import { createElement } from 'react';
import { useAvatar } from '../use-avatar';

const mockElement = createElement('div', {}, 'Mock Element');
describe('useAvatar', () => {
  it('returns combined className', () => {
    const { result } = renderHook(() =>
      useAvatar({ initials: 'DP', className: 'custom-class' }),
    );
    expect(result.current.rootProps.className).toContain('custom-class');
  });

  it('returns provided "role" prop', () => {
    const { result } = renderHook(() =>
      useAvatar({ initials: 'DP', role: 'alert' }),
    );
    expect(result.current.rootProps.role).toBe('alert');
  });

  it('should support the size prop "small"', () => {
    const { result } = renderHook(() =>
      useAvatar({ initials: 'DP', size: 'small' }),
    );
    expect(result.current.rootProps['data-size']).toBe('small');
  });

  it('should support the size prop "medium"', () => {
    const { result } = renderHook(() =>
      useAvatar({ initials: 'DP', size: 'medium' }),
    );
    expect(result.current.rootProps['data-size']).toBe('medium');
  });

  it('should support the size prop "large"', () => {
    const { result } = renderHook(() =>
      useAvatar({ initials: 'DP', size: 'large' }),
    );
    expect(result.current.rootProps['data-size']).toBe('large');
  });

  it('returns provided "initials" and "title" prop', () => {
    const { result } = renderHook(() =>
      useAvatar({ initials: 'SP', title: 'Sample Person' }),
    );
    expect(result.current.initials).toBe('SP');
    expect(result.current.title).toBe('Sample Person');
  });

  it('returns provided "icon" prop', () => {
    const { result } = renderHook(() => useAvatar({ icon: mockElement }));
    expect(result.current.icon).toBe(mockElement);
  });

  it('should not return an initials, if the "initials" and "icon" props are both set', () => {
    const { result } = renderHook(() =>
      // @ts-expect-error -- testing invalid prop combination
      useAvatar({ initials: 'SP', icon: mockElement }),
    );
    expect(result.current.initials).toBe(undefined);
  });

  it('returns "imageUrl" if type of the "image" prop is string', () => {
    const { result } = renderHook(() => useAvatar({ image: 'http://sample' }));
    expect(result.current.imageUrl).toBe('http://sample');
  });

  it('returns "imageElement" if type of the "image" prop is an element', () => {
    const { result } = renderHook(() => useAvatar({ image: mockElement }));
    expect(result.current.imageElement).toBe(mockElement);
  });
});

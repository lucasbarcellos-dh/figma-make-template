import { renderHook } from '@testing-library/react';
import { expect, describe, it } from 'vitest';
import { useLink } from '../use-link';

describe('useLink', () => {
  it('returns combined className', () => {
    const { result } = renderHook(() => useLink({ className: 'custom-class' }));
    expect(result.current.rootProps.className).toContain('custom-class');
  });

  it('generates correct rootProps', () => {
    const { result } = renderHook(() =>
      useLink({
        className: 'primary-class',
      }),
    );

    expect(result.current.rootProps.className).toContain('primary-class');
  });
});

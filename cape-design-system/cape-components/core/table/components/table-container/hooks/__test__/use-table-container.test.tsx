import { renderHook } from '@testing-library/react';
import { expect, describe, it } from 'vitest';
import { useTableContainer } from '../use-table-container';

describe('useTableContainer', () => {
  it('returns combined className', () => {
    const { result } = renderHook(() =>
      useTableContainer({ className: 'custom-class' }),
    );

    expect(result.current.rootProps.className).toContain('custom-class');
  });

  it('returns table container attributes', () => {
    const { result } = renderHook(() =>
      useTableContainer({ style: { marginBottom: '1rem' } }),
    );

    expect(result.current.rootProps.style).toHaveProperty('marginBottom');
  });
});

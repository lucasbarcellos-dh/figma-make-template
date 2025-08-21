import { renderHook } from '@testing-library/react';
import { expect, describe, it } from 'vitest';
import { useSearch } from '../use-search';

describe('useSearch', () => {
  it('returns combined class name prop', () => {
    const { result } = renderHook(() =>
      useSearch({ className: 'custom-class' }),
    );
    expect(result.current.className).includes('custom-class');
  });
});

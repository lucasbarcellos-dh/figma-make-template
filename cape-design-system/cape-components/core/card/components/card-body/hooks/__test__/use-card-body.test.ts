import { renderHook } from '@testing-library/react';
import { expect, describe, it } from 'vitest';
import { useCardBody } from '../use-card-body';

describe('useCardBody', () => {
  it('returns combined className', () => {
    const { result } = renderHook(() =>
      useCardBody({ className: 'custom-class' }),
    );
    expect(result.current.rootProps.className).toContain('custom-class');
  });
});

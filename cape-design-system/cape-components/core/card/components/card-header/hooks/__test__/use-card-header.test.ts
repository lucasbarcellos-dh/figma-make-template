import { renderHook } from '@testing-library/react';
import { expect, describe, it } from 'vitest';
import { useCardHeader } from '../use-card-header';

describe('useCardHeader', () => {
  it('returns combined className', () => {
    const { result } = renderHook(() =>
      useCardHeader({ className: 'custom-class' }),
    );
    expect(result.current.rootProps.className).toContain('custom-class');
  });
});

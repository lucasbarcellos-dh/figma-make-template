import { renderHook } from '@testing-library/react';
import { expect, describe, it } from 'vitest';
import { useCardFooter } from '../use-card-footer';

describe('useCardFooter', () => {
  it('returns combined className', () => {
    const { result } = renderHook(() =>
      useCardFooter({ className: 'custom-class' }),
    );
    expect(result.current.rootProps.className).toContain('custom-class');
  });
});

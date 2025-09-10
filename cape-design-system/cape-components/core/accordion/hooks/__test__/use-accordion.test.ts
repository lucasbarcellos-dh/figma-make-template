import { renderHook } from '@testing-library/react';
import { expect, describe, it } from 'vitest';
import { useAccordion } from '../use-accordion';

describe('useAccordion', () => {
  it('returns combined className', () => {
    const { result } = renderHook(() =>
      useAccordion({ className: 'custom-class' }),
    );
    expect(result.current.rootProps.className).toContain('custom-class');
  });
});

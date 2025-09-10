import { renderHook } from '@testing-library/react';
import { expect, describe, it } from 'vitest';
import { useDatePickerBodyFooter } from '../hooks/use-date-picker-body-footer';

describe('useDatePickerBodyFooter', () => {
  it('returns footer-wrapper className by default', () => {
    const { result } = renderHook(() => useDatePickerBodyFooter({}));
    expect(result.current.rootProps.className).toContain('footer-wrapper');
  });
  it('returns combined className', () => {
    const { result } = renderHook(() =>
      useDatePickerBodyFooter({ className: 'custom-class' }),
    );
    expect(result.current.rootProps.className).toContain('custom-class');
  });
});

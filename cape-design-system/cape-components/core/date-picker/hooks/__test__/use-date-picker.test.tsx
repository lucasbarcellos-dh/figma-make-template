import { renderHook } from '@testing-library/react';
import { expect, describe, it, vi } from 'vitest';
import { useDatePicker } from '../use-date-picker';

const mockOnOpenChange = vi.fn();

describe('useDatePicker', () => {
  it('returns combined className', () => {
    const { result } = renderHook(() =>
      useDatePicker({ className: 'custom-class' }),
    );
    expect(result.current.rootProps.className).toContain('custom-class');
  });

  it('returns bottom-end as placement default value for popover props', () => {
    const { result } = renderHook(() => useDatePicker({}));
    expect(result.current.popoverProps).toEqual({
      placement: 'bottom-end',
    });
  });

  it('returns popover props correctly', () => {
    const { result } = renderHook(() =>
      useDatePicker({
        defaultOpen: true,
        closeOnOutsideClick: true,
        closeOnEsc: true,
        closeOnFocusOut: true,
        disablePortal: true,
        offset: 10,
        onOpenChange: mockOnOpenChange,
        open: true,
        placement: 'left-start',
        triggerType: 'hover',
        zIndex: 2,
      }),
    );
    expect(result.current.popoverProps).toEqual({
      defaultOpen: true,
      closeOnOutsideClick: true,
      closeOnEsc: true,
      closeOnFocusOut: true,
      disablePortal: true,
      offset: 10,
      onOpenChange: mockOnOpenChange,
      open: true,
      placement: 'left-start',
      triggerType: 'hover',
      zIndex: 2,
    });
  });
});

import { renderHook, act } from '@testing-library/react';
import { expect, describe, it, vi } from 'vitest';
import type { MouseEvent } from 'react';
import { useChip } from '../use-chip';

describe('useChip', () => {
  it('handles uncontrolled selected state', () => {
    const { result } = renderHook(() =>
      useChip({
        label: 'Test Chip',
        onSelectionChange: (selectedState) => {
          return selectedState;
        },
      }),
    );

    // Initially not selected
    expect(result.current.rootProps['data-selected']).toBe(false);

    // Simulate a click to select the chip
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call -- no need to type check act
    act(() => {
      result.current.rootProps.onClick?.({} as never);
    });

    // Now should be selected
    expect(result.current.rootProps['data-selected']).toBe(true);
  });

  it('handles controlled selected state', () => {
    const onSelectionChange = vi.fn();
    const { result } = renderHook(() =>
      useChip({ selected: false, onSelectionChange, label: 'Test Chip' }),
    );

    // Simulate a click to select the chip
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call -- no need to type check act
    act(() => {
      result.current.rootProps.onClick?.({} as never);
    });

    // onSelectionChange should be called
    expect(onSelectionChange).toHaveBeenCalledWith(true);
  });

  it('does not change state if disabled', () => {
    const { result } = renderHook(() =>
      useChip({ disabled: true, label: 'Test Chip' }),
    );

    // Simulate a click
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call -- no need to type check act
    act(() => {
      result.current.rootProps.onClick?.({} as never);
    });

    // Should not be selected because it's disabled
    expect(result.current.rootProps).not.toHaveProperty('data-selected');
  });

  it('calls onDelete when the delete icon is clicked', () => {
    const onDelete = vi.fn();
    const { result } = renderHook(() =>
      useChip({ onDelete, label: 'Test Chip' }),
    );

    // Make sure iconButtonProps exist and onDelete can be called
    expect(result.current.iconButtonProps).toBeDefined();

    // Simulate a click on the delete icon
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call -- no need to type check act
    act(() => {
      result.current.iconButtonProps?.onClick?.({
        stopPropagation: vi.fn(),
      } as unknown as MouseEvent<HTMLButtonElement>);
    });

    // onDelete should be called
    expect(onDelete).toHaveBeenCalled();
  });

  it('does not call onSelectionChange if chip is not interactive', () => {
    const onSelectionChange = vi.fn();
    const { result } = renderHook(() => useChip({ label: 'Test Chip' }));

    // Assuming `isInteractive` is false when `onSelectionChange` is not provided
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call -- no need to type check act
    act(() => {
      result.current.rootProps.onClick?.({} as never);
    });

    // onSelectionChange should not be called if not interactive
    expect(onSelectionChange).not.toHaveBeenCalled();
  });

  it('provides the correct size to the icon button when a size is specified', () => {
    const size = 'medium';
    const expectedIconButtonSize = 'xsmall'; // based on the mapping
    const { result } = renderHook(() =>
      useChip({ size, onDelete: vi.fn(), label: 'Test Chip' }),
    );

    expect(result.current.iconButtonProps?.size).toBe(expectedIconButtonSize);
  });

  it('should be deletable when onDelete is provided', () => {
    const { result } = renderHook(() =>
      useChip({ onDelete: vi.fn(), label: 'Test Chip' }),
    );

    expect(result.current.iconButtonProps?.onClick).toBeTruthy();
  });

  it('should not be deletable when onDelete is not provided', () => {
    const { result } = renderHook(() => useChip({ label: 'Test Chip' }));

    expect(result.current.rootProps).not.toHaveProperty('data-interactive');
  });

  it('passes additional props to the root element', () => {
    const style = { backgroundColor: 'red' };
    const { result } = renderHook(() => useChip({ label: 'Test Chip', style }));

    expect(result.current.rootProps.style).toBe(style);
  });

  it('sets tabIndex to 0 for interactive chips', () => {
    const { result } = renderHook(() =>
      useChip({ label: 'Test Chip', onSelectionChange: vi.fn() }),
    );

    expect(result.current.rootProps.tabIndex).toBe(0);
  });

  it('sets role to button for interactive chips when selection mode is enabled', () => {
    const { result } = renderHook(() =>
      useChip({ label: 'Test Chip', onSelectionChange: vi.fn() }),
    );

    expect(result.current.rootProps.role).toBe('button');
  });

  it('toggles selected state on click when uncontrolled', () => {
    const { result } = renderHook(() =>
      useChip({ label: 'Test Chip', onSelectionChange: vi.fn() }),
    );

    // eslint-disable-next-line @typescript-eslint/no-unsafe-call -- no need to type check act
    act(() => {
      result.current.rootProps.onClick?.({} as never);
    });

    expect(result.current.rootProps['data-selected']).toBe(true);

    // eslint-disable-next-line @typescript-eslint/no-unsafe-call -- no need to type check act
    act(() => {
      result.current.rootProps.onClick?.({} as never);
    });

    expect(result.current.rootProps['data-selected']).toBe(false);
  });

  it('does not toggle selected state on click when controlled', () => {
    const { result } = renderHook(() =>
      useChip({ label: 'Test Chip', selected: true }),
    );

    // eslint-disable-next-line @typescript-eslint/no-unsafe-call -- no need to type check act
    act(() => {
      result.current.rootProps.onClick?.({} as never);
    });

    // Since it's controlled, the selected state should not change internally
    expect(result.current.rootProps['data-selected']).toBe(true);
  });

  it('is not interactive when disabled, even with onDelete or onSelectionChange provided', () => {
    const { result } = renderHook(() =>
      useChip({ label: 'Test Chip', onDelete: vi.fn(), disabled: true }),
    );

    expect(result.current.rootProps).not.toHaveProperty('data-interactive');
  });

  it('does not trigger onSelectionChange when chip is clicked while disabled', () => {
    const onSelectionChange = vi.fn();
    const { result } = renderHook(() =>
      useChip({ label: 'Test Chip', onSelectionChange, disabled: true }),
    );

    // eslint-disable-next-line @typescript-eslint/no-unsafe-call -- no need to type check act
    act(() => {
      result.current.rootProps.onClick?.({} as never);
    });

    expect(onSelectionChange).toHaveBeenCalledTimes(0);
  });

  it('does not trigger onDelete when delete icon is clicked while disabled', () => {
    const onDelete = vi.fn();
    const { result } = renderHook(() =>
      useChip({ label: 'Test Chip', onDelete, disabled: true }),
    );

    // eslint-disable-next-line @typescript-eslint/no-unsafe-call -- no need to type check act
    act(() => {
      result.current.iconButtonProps?.onClick?.({} as never);
    });

    expect(onDelete).not.toHaveBeenCalled();
  });

  it('should not set role to "button" when delete functionality is enabled', () => {
    const { result } = renderHook(() =>
      useChip({ label: 'Test Chip', onDelete: vi.fn() }),
    );

    expect(result.current.rootProps.role).not.toBe('button');
  });

  it('does not set a role for non-interactive chips', () => {
    const { result } = renderHook(() => useChip({ label: 'Test Chip' }));

    expect(result.current.rootProps.role).toBeUndefined();
  });
});

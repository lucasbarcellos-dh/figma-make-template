import { renderHook } from '@testing-library/react';
import { expect, describe, it, vi } from 'vitest';
import { useListItem } from '../use-list-item';
import type { ListItemProps } from '../../type';

vi.mock('../../../../context', () => ({
  useListContext: vi.fn().mockReturnValue({ size: 'medium', divider: true }),
}));

describe('useListItem', () => {
  it('returns default values when called without arguments', () => {
    const { result } = renderHook(() => useListItem({}));
    expect(result.current.rootProps['data-divider']).toBe(true);
  });

  it('returns custom values when props are provided', () => {
    const { result } = renderHook(() =>
      useListItem({
        className: 'custom-class',
        size: 'large',
        divider: false,
        selected: true,
        disabled: true,
      }),
    );

    expect(result.current.rootProps.className).toContain('custom-class');
    expect(result.current.rootProps['data-size']).toBe('large');
    expect(result.current.rootProps['data-selected']).toBeUndefined();
    expect(result.current.rootProps['data-disabled']).toBe(true);
    expect(result.current.rootProps['data-divider']).toBe(false);
  });

  it('sets interactive data attribute when onClick is provided', () => {
    const { result } = renderHook(() => useListItem({ onClick: () => ({}) }));

    expect(result.current.rootProps['data-interactive']).toBe(true);
  });

  it('uses the global size and divider from context if size and divider props are not provided', () => {
    const { result } = renderHook(() => useListItem({}));

    expect(result.current.rootProps['data-size']).toBe('medium'); // Default to context size
    expect(result.current.rootProps['data-divider']).toBe(true); // Default to context divider
  });

  it('prioritizes size and divider props over global context values', () => {
    const { result } = renderHook(() =>
      useListItem({
        size: 'small',
        divider: false,
      }),
    );

    expect(result.current.rootProps['data-size']).toBe('small');
    expect(result.current.rootProps['data-divider']).toBe(false);
  });

  it('handles the selected state correctly', () => {
    const { result } = renderHook(() =>
      useListItem({
        selected: true,
        disabled: false,
      }),
    );

    expect(result.current.rootProps['data-selected']).toBe(true);
  });

  it('does not set selected state if disabled', () => {
    const { result } = renderHook(() =>
      useListItem({
        selected: true,
        disabled: true,
      }),
    );

    expect(result.current.rootProps['data-selected']).toBeUndefined();
  });

  it('handles the presence of secondaryAction correctly', () => {
    const secondaryActionComponent = <div>Secondary Action</div>;
    const { result } = renderHook(() =>
      useListItem({
        secondaryAction: secondaryActionComponent,
      }),
    );

    expect(result.current.content.secondaryAction.component).toEqual(
      secondaryActionComponent,
    );
  });

  it('applies sanitized custom styles correctly', () => {
    const customStyleProps: ListItemProps = {
      style: {
        display: 'flex',
        flexDirection: 'column',
        margin: '10px',
        padding: '10px',
        width: '20px',
        height: '20px',
        boxSizing: 'border-box',
        borderColor: 'red',
        backgroundColor: 'blue',
        position: 'absolute',
      },
    };
    const { result } = renderHook(() => useListItem(customStyleProps));

    expect(result.current.rootProps.style).toEqual(customStyleProps.style);
  });
});

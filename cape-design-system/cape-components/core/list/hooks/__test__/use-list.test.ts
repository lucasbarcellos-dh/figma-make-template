import { expect, describe, it } from 'vitest';
import { renderHook } from '@testing-library/react';
import { useList } from '../use-list';
import type { ListProps } from '../../type';

describe('useList', () => {
  it('returns custom values when props are provided', () => {
    const { result } = renderHook(() =>
      useList({
        className: 'custom-class',
        divider: false,
        size: 'large',
      }),
    );

    expect(result.current.rootProps.className).toContain('custom-class');
    expect(result.current.listContextProps.divider).toBe(false);
    expect(result.current.listContextProps.size).toBe('large');
  });

  it('combines class names properly', () => {
    const { result } = renderHook(() =>
      useList({
        className: 'additional-class',
      }),
    );

    expect(result.current.rootProps.className).toContain('additional-class');
  });

  it('returns system props', () => {
    const customStyleProps: ListProps = {
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
    const { result } = renderHook(() => useList(customStyleProps));

    expect(result.current.rootProps.style).toEqual(customStyleProps.style);
  });
});

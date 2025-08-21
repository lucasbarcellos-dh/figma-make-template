import { renderHook } from '@testing-library/react';
import { expect, describe, it } from 'vitest';
import { useTag } from '../use-tag';
import type { TagProps } from '../../type';

describe('useTag', () => {
  it('returns combined className', () => {
    const { result } = renderHook(() => useTag({ className: 'custom-class' }));
    expect(result.current.rootProps.className).toContain('custom-class');
  });

  it('should forward system props', () => {
    const { result } = renderHook(() => useTag({ style: { margin: '10px' } }));
    expect(result.current.rootProps.style).toMatchObject({
      margin: '10px',
    });
  });

  it.each([
    'branded',
    'info',
    'error',
    'warning',
    'success',
    'inverse',
    'disabled',
  ])('returns provided %s status prop', (status) => {
    const { result } = renderHook(() =>
      useTag({ status: status as TagProps['status'] }),
    );
    expect([
      'branded',
      'info',
      'error',
      'warning',
      'success',
      'inverse',
      'disabled',
    ]).toContain(status);
    expect(result.current.rootProps['data-status']).toBe(status);
  });

  it.each(['small', 'medium'])('returns provided %s size prop', (size) => {
    const { result } = renderHook(() =>
      useTag({ size: size as TagProps['size'] }),
    );
    expect(['small', 'medium']).toContain(size);
    expect(result.current.rootProps['data-size']).toBe(size);
  });

  it('returns icon classname in iconProps', () => {
    const { result } = renderHook(() => useTag({}));

    expect(result.current.iconProps.className).toContain('icon');
  });

  it('returns label classname in labelProps', () => {
    const { result } = renderHook(() => useTag({}));

    expect(result.current.labelProps.className).toContain('label');
  });
});

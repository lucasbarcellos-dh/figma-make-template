import { renderHook } from '@testing-library/react';
import { expect, describe, it } from 'vitest';
import { useSearchInput } from '../use-search-input';

describe('useSearchInput', () => {
  it('returns custom className', () => {
    const { result } = renderHook(() =>
      useSearchInput({ className: 'custom-class' }),
    );
    expect(result.current.rootProps.className).toContain('custom-class');
  });

  it('returns disabled prop', () => {
    const { result } = renderHook(() => useSearchInput({ disabled: true }));
    expect(result.current.rootProps.disabled).toBeTruthy();
  });

  it('returns input name prop', () => {
    const { result } = renderHook(() => useSearchInput({ name: 'input-name' }));
    expect(result.current.inputProps.name).toEqual('input-name');
  });

  it('returns search icon size prop with correct mapping for xsmall size', () => {
    const { result } = renderHook(() => useSearchInput({ size: 'xsmall' }));
    expect(result.current.searchIconProps.size).toEqual('small');
  });

  it('returns search icon size prop with correct mapping for large size', () => {
    const { result } = renderHook(() => useSearchInput({ size: 'large' }));
    expect(result.current.searchIconProps.size).toEqual('medium');
  });

  it('returns clear icon size prop with correct mapping for small size', () => {
    const { result } = renderHook(() => useSearchInput({ size: 'small' }));
    expect(result.current.searchIconProps.size).toEqual('small');
  });

  it('returns clear icon size prop with correct mapping for medium size', () => {
    const { result } = renderHook(() => useSearchInput({ size: 'medium' }));
    expect(result.current.searchIconProps.size).toEqual('medium');
  });
});

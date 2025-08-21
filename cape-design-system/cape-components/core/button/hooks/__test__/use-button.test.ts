import { renderHook } from '@testing-library/react';
import { expect, describe, it } from 'vitest';
import { useButton } from '../use-button';

describe('useButton', () => {
  it('should override default props when provided', () => {
    const {
      result: {
        current: { rootProps },
      },
    } = renderHook(() =>
      useButton({
        size: 'large',
        disabled: true,
      }),
    );

    expect(rootProps['data-size']).toBe('large');
    expect(rootProps.disabled).toBe(true);
  });

  it('generates correct rootProps', () => {
    const { result } = renderHook(() =>
      useButton({
        variant: 'primary',
        status: 'error',
        size: 'large',
        className: 'primary-class',
      }),
    );

    expect(result.current.rootProps.className).toContain('primary-class');
    expect(result.current.rootProps['data-variant']).toEqual('primary');
    expect(result.current.rootProps['data-status']).toEqual('error');
    expect(result.current.rootProps['data-size']).toEqual('large');
  });

  it('generates correct contentProps', () => {
    const { result } = renderHook(() =>
      useButton({
        variant: 'tertiary',
        status: 'error',
        size: 'large',
        startIcon: 'icon',
        endIcon: 'icon',
      }),
    );

    expect(result.current.contentProps.startIcon).toEqual('icon');
    expect(result.current.contentProps.endIcon).toEqual('icon');
    expect(result.current.contentProps['data-variant']).toEqual('tertiary');
    expect(result.current.contentProps['data-status']).toEqual('error');
    expect(result.current.contentProps['data-size']).toEqual('large');
  });

  it('sets the disabled property correctly', () => {
    const { result } = renderHook(() =>
      useButton({
        variant: 'primary',
        status: 'error',
        size: 'large',
        disabled: true, // Test with disabled set to true
      }),
    );

    expect(result.current.rootProps.disabled).toBe(true);
  });

  it('sets hasStartContent and hasEndContent correctly', () => {
    const { result } = renderHook(() =>
      useButton({
        variant: 'primary',
        size: 'large',
        disabled: false,
        startIcon: 'icon', // Test with startIcon present
        endIcon: undefined, // Test with endIcon not present
      }),
    );

    expect(result.current.rootProps.hasStartContent).toBe(true);
    expect(result.current.rootProps.hasEndContent).toBe(false);
  });

  it('sets classNameStartContent and classNameEndContent correctly', () => {
    const { result } = renderHook(() =>
      useButton({
        variant: 'tertiary',
        size: 'large',
        disabled: false,
        startIcon: 'icon',
        endIcon: 'icon',
      }),
    );

    expect(result.current.contentProps.classNameStartContent).toContain(
      'start-content',
    );
    expect(result.current.contentProps.classNameEndContent).toContain(
      'end-content',
    );
  });

  it('sets data attributes correctly', () => {
    const { result } = renderHook(() =>
      useButton({
        variant: 'tertiary',
        status: 'inverse',
        size: 'large',
      }),
    );

    expect(result.current.rootProps['data-variant']).toEqual('tertiary');
    expect(result.current.rootProps['data-status']).toEqual('inverse');
    expect(result.current.rootProps['data-size']).toEqual('large');
  });

  it('sets rootProps disabled when isDisabled is true', () => {
    const { result } = renderHook(() =>
      useButton({
        disabled: true,
        loading: false,
      }),
    );

    expect(result.current.rootProps.disabled).toBe(true);
  });

  it('sets rootProps disabled when loading is true', () => {
    const { result } = renderHook(() =>
      useButton({
        disabled: false,
        loading: true,
      }),
    );

    expect(result.current.rootProps.disabled).toBe(true);
  });

  it('sets contentProps disabled when isDisabled is true', () => {
    const { result } = renderHook(() =>
      useButton({
        disabled: true,
        loading: false,
      }),
    );

    expect(result.current.contentProps.disabled).toBe(true);
  });

  it('sets contentProps disabled when loading is true', () => {
    const { result } = renderHook(() =>
      useButton({
        disabled: false,
        loading: true,
      }),
    );

    expect(result.current.contentProps.disabled).toBe(true);
  });
});

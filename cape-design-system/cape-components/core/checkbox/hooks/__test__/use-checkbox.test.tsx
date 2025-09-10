import { renderHook } from '@testing-library/react';
import { expect, describe, it } from 'vitest';
import { useCheckbox } from '../use-checkbox';

describe('useCheckbox', () => {
  it('returns combined className', () => {
    const { result } = renderHook(() =>
      useCheckbox({ className: 'custom-class' }),
    );
    expect(result.current.rootProps.className).toContain('custom-class');
  });

  it('should add data-error attribute to control props when the error parameter is set to true.', () => {
    const { result } = renderHook(() => useCheckbox({ error: true }));
    expect(result.current.controlProps).toMatchObject({
      'data-error': true,
    });
  });

  it('should add label-hidden className to label props when the hideLabel prop is set to true.', () => {
    const { result } = renderHook(() => useCheckbox({ hideLabel: true }));
    expect(result.current.labelProps.className).toContain('label-hidden');
  });

  it('returns data-error with undefined when the error parameter is not set.', () => {
    const { result } = renderHook(() => useCheckbox({}));
    expect(result.current.controlProps).toMatchObject({
      'data-error': undefined,
    });
  });
});

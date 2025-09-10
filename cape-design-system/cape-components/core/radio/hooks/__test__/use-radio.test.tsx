import { renderHook } from '@testing-library/react';
import { expect, describe, it } from 'vitest';
import { useRadio } from '../use-radio';

describe('useRadio', () => {
  it('returns combined className', () => {
    const { result } = renderHook(() =>
      useRadio({ className: 'custom-class' }),
    );
    expect(result.current.rootProps.className).toContain('custom-class');
  });

  it('should forward system props', () => {
    const { result } = renderHook(() =>
      useRadio({ style: { margin: '10px' } }),
    );
    expect(result.current.rootProps.style).toMatchObject({
      margin: '10px',
    });
  });

  it('should add data-error attribute to control props when the error parameter is set to true.', () => {
    const { result } = renderHook(() => useRadio({ error: true }));
    expect(result.current.controlProps).toMatchObject({
      'data-error': true,
    });
  });

  it('returns data-error with undefined when the error parameter is not set.', () => {
    const { result } = renderHook(() => useRadio({}));
    expect(result.current.controlProps).toMatchObject({
      'data-error': undefined,
    });
  });
});

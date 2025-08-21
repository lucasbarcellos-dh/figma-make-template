import { createElement } from 'react';
import { renderHook } from '@testing-library/react';
import { expect, describe, it } from 'vitest';
import { useAlert } from '../use-alert';
import type { AlertProps } from '../../type';

const mockIconElement = createElement('div', {}, 'Mock Element');
describe('useAlert', () => {
  it('returns combined className', () => {
    const { result } = renderHook(() =>
      useAlert({ className: 'custom-class' }),
    );
    expect(result.current.rootProps.className).toContain('custom-class');
  });

  it.each(['branded', 'info', 'error', 'warning', 'success', 'neutral'])(
    'returns provided %s variant prop',
    (variant) => {
      const { result } = renderHook(() =>
        useAlert({ variant: variant as AlertProps['variant'] }),
      );
      expect([
        'branded',
        'info',
        'error',
        'warning',
        'success',
        'neutral',
      ]).toContain(variant);
      expect(result.current.rootProps['data-variant']).toBe(variant);
    },
  );

  it('returns icon classname in iconProps', () => {
    const { result } = renderHook(() => useAlert({}));
    expect(result.current.iconProps.className).toContain('icon');
  });

  it('returns content-wrapper classname in contentWrapperProps', () => {
    const { result } = renderHook(() => useAlert({}));
    expect(result.current.contentWrapperProps.className).toContain(
      'content-wrapper',
    );
  });

  it('returns content classname in contentProps', () => {
    const { result } = renderHook(() => useAlert({}));
    expect(result.current.contentProps.className).toContain('content');
  });

  it('should return null when the icon prop is set to false.', () => {
    const { result } = renderHook(() => useAlert({ icon: false }));
    expect(result.current.iconElement).toBe(null);
  });

  it('should return the custom icon element that is set for icon prop.', () => {
    const { result } = renderHook(() => useAlert({ icon: mockIconElement }));
    expect(result.current.iconElement).toBe(mockIconElement);
  });
});

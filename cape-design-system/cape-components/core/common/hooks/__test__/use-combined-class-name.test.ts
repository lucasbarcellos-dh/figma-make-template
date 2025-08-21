import { renderHook } from '@testing-library/react';
import { useCombinedClassName } from '../use-combined-class-name';

describe('useCombinedClassName Hook', () => {
  it('should return undefined when both "className" and "overrideClassName" are empty strings', () => {
    const { result } = renderHook(() =>
      useCombinedClassName({ className: '', overrideClassName: '' }),
    );
    expect(result.current).toBeUndefined();
  });

  it('should return undefined when both "className" and "overrideClassName" are blank strings', () => {
    const { result } = renderHook(() =>
      useCombinedClassName({ className: '   ', overrideClassName: '   ' }),
    );
    expect(result.current).toBeUndefined();
  });

  it('should return "className" value when only "className" is provided', () => {
    const { result } = renderHook(() =>
      useCombinedClassName({ className: 'test-class' }),
    );
    expect(result.current).toBe('test-class');
  });

  it('should return "overrideClassName" value when only "overrideClassName" is provided', () => {
    const { result } = renderHook(() =>
      useCombinedClassName({ overrideClassName: 'override-test-class' }),
    );
    expect(result.current).toBe('override-test-class');
  });

  it('should return combined className when both "className" and "overrideClassName" are provided', () => {
    const { result } = renderHook(() =>
      useCombinedClassName({
        className: 'test-class',
        overrideClassName: 'override-test-class',
      }),
    );
    expect(result.current).toBe('test-class override-test-class');
  });
});

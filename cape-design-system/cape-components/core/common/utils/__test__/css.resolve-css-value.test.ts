import { resolveCssValue } from '../css';

describe('resolveCssValue function', () => {
  it('should return undefined if the value is undefined', () => {
    const result = resolveCssValue({ property: 'width', value: undefined });
    expect(result).toBeUndefined();
  });

  it('should format a number with "px"', () => {
    const result = resolveCssValue({ property: 'width', value: 42 });
    expect(result).toBe('42px');
  });

  it('should wrap a CSS variable value with "var()"', () => {
    const result = resolveCssValue({
      property: 'color',
      value: '--primary-color',
    });

    expect(result).toBe('var(--primary-color)');
  });

  it('should return a string as is', () => {
    const result = resolveCssValue({
      property: 'font-family',
      value: 'Arial, sans-serif',
    });
    expect(result).toBe('Arial, sans-serif');
  });

  it('should return unsupported properties as is', () => {
    const result = resolveCssValue({
      property: 'unsupported-property',
      value: 'unsupported-value',
    });
    expect(result).toBe('unsupported-value');
  });
});

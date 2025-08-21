import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { CssNormalize } from '../css-normalize';

describe('cssNormalize component', () => {
  it('should load normalize css correctly', () => {
    const { baseElement } = render(<CssNormalize />);

    const bodyStyles = getComputedStyle(baseElement);
    expect(bodyStyles.margin).toBe('0px');
  });

  it('should return null', () => {
    const result = CssNormalize();
    expect(result).toBeNull();
  });
});

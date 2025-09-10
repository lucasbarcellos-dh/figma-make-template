import type { CSSProperties } from 'react';
import { sanitizeCustomProperties } from '../css';

describe('sanitizeCustomProperties', () => {
  it('removes properties with null values', () => {
    const styles = {
      color: 'red',
      fontSize: null,
      margin: '10px',
      padding: null,
    };

    const result = sanitizeCustomProperties(styles);
    expect(result).toEqual({
      color: 'red',
      margin: '10px',
    });
  });

  it('should remove properties with undefined value', () => {
    const styles: CSSProperties = {
      display: 'flex',
      flexDirection: 'column',
      flexFlow: undefined,
    };
    const result = sanitizeCustomProperties(styles);
    expect(result).toEqual({
      display: 'flex',
      flexDirection: 'column',
    });
  });

  it('returns undefined if all properties are null', () => {
    const styles = {
      padding: null,
    };

    const result = sanitizeCustomProperties(styles);
    expect(result).toBeUndefined();
  });

  it('returns the same object if no properties are null', () => {
    const styles = {
      color: 'blue',
      margin: '5px',
    };
    const result = sanitizeCustomProperties(styles);
    expect(result).toEqual(styles);
  });

  it('should not remove CSS properties with zero value', () => {
    const styles = {
      margin: 0,
      padding: '20px',
      paddingRight: 0,
    };
    const result = sanitizeCustomProperties(styles);
    expect(result).toEqual(styles);
  });
});

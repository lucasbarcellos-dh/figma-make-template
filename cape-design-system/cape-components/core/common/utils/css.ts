import { CSS_PROPERTY_VALUE_FORMATS } from './constants';

/**
 * Sanitizes the provided styles object by removing properties with `null` values.
 *
 * This function iterates over the provided styles object and filters out any properties
 * that have a value of `null`. The sanitized styles are then returned as a new object.
 * If all properties in the styles object have `null` values, the function returns `undefined`.
 *
 * @param styles - The styles object containing CSS properties to be sanitized.
 * @returns A new styles object with properties having non-null values, or `undefined` if all properties are `null`.
 */
export const sanitizeCustomProperties = (
  styles: React.CSSProperties | Record<`--cp-${string}`, string>,
): React.CSSProperties | undefined => {
  const truthyOrZeroValues = Object.entries(styles).filter(
    ([_, value]) => value || value === 0,
  );

  return truthyOrZeroValues.length
    ? Object.fromEntries(truthyOrZeroValues)
    : undefined;
};

/**
 * Resolves a given value to its appropriate CSS representation.
 *
 * - If the value is `undefined`, it returns `undefined`.
 * - If the value is a string that starts with "--" (indicating a CSS variable),
 *   it wraps the value with `var()` for CSS variable usage.
 * - If the value is a number, it appends "px" to the number, converting it to a pixel value.
 * - If the value is a string (other than CSS variable), it returns the string as-is.
 *
 * @param value - The value to be resolved. Can be a string, number, or undefined.
 * @returns The resolved CSS value as a string or undefined.
 */
export const resolveCssValue = <T>({
  property,
  value,
}: {
  property: string;
  value?: string | number;
}): T | undefined => {
  if (typeof value === 'undefined') return undefined;

  if (typeof value === 'string' && value.startsWith('--')) {
    return `var(${value})` as T;
  }

  // Check if the property is in the mapping, and format the value accordingly
  if (Object.hasOwnProperty.call(CSS_PROPERTY_VALUE_FORMATS, property)) {
    const format = CSS_PROPERTY_VALUE_FORMATS[property];
    return typeof value === 'number'
      ? (`${value}${format}` as T)
      : (value.toString() as T);
  }

  // For custom properties or unsupported properties, return as is
  return value as T;
};

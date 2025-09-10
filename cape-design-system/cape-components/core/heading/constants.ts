import type { HeadingLevel } from './type';

export const headingLevels = [1, 2, 3, 4, 5, 6] as const;

export const headingTagMap: Record<HeadingLevel, keyof JSX.IntrinsicElements> =
  {
    1: 'h1',
    2: 'h2',
    3: 'h3',
    4: 'h4',
    5: 'h5',
    6: 'h6',
  };

export const headingColorList = [
  'primary',
  'secondary',
  'disabled',
  'inverse',
  'branded',
  'onbranded',
  'danger',
  'ondanger',
  'success',
  'onsuccess',
  'info',
  'oninfo',
  'onwarning',
  'onneutral',
] as const;

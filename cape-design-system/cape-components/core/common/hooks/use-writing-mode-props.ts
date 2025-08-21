import type { CSSProperties } from 'react';
import { resolveCssValue } from '../utils/css';
import type { WritingModeProps } from './type';

export const useWritingModeProps = (props: WritingModeProps): CSSProperties => {
  const styles: CSSProperties = {};

  if (props.writingMode) {
    styles.writingMode = resolveCssValue<CSSProperties['writingMode']>({
      property: 'writingMode',
      value: props.writingMode,
    });
  }

  return styles;
};

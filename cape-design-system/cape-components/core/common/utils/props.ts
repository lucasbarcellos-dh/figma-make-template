import { type CSSProperties } from 'react';
import { StylePropsList } from './constants';

export const omitStyleProps = (props: CSSProperties): Record<string, unknown> =>
  Object.fromEntries(
    Object.entries(props).filter(
      ([key]) => !Object.prototype.hasOwnProperty.call(StylePropsList, key),
    ),
  );

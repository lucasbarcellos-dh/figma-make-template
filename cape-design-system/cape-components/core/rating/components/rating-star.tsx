import { type ReactNode } from 'react';
import { StarFilledIcon, StarHalfIcon } from '@deliveryhero/cape-icons';
import type { RatingStarProps } from '../type';
import styles from '../rating.module.scss';
import { VisuallyHidden } from '../../visually-hidden';

export function RatingStar({
  value,
  readOnly,
  onMouseEnter,
  onChange,
  checked,
  hover,
  name,
  size,
  halfFilled,
  label,
}: RatingStarProps): ReactNode {
  return (
    <label
      className={styles.label}
      data-checked={checked || undefined}
      data-hover={hover || undefined}
      data-testid={`cape-rating-label-${value}`}
      onMouseEnter={() => {
        if (!readOnly) {
          onMouseEnter(value);
        }
      }}
    >
      <VisuallyHidden as="span">{label}</VisuallyHidden>
      <input
        checked={checked}
        className={`${styles['visually-hidden']} ${styles.input}`}
        disabled={readOnly}
        name={name}
        onChange={() => {
          onChange(value);
        }}
        type="radio"
        value={value}
      />
      <div
        className={styles.icon}
        data-filled={halfFilled ? 'half' : undefined}
        data-testid="cape-rating-icon"
      >
        {halfFilled ? <StarHalfIcon size={size} /> : null}
        <StarFilledIcon size={size} />
      </div>
    </label>
  );
}

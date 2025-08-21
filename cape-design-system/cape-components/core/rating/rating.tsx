import React, { forwardRef, useRef, useState } from 'react';
import { useControllableState } from '../common/hooks';
import { VisuallyHidden } from '../visually-hidden';
import type { RatingProps } from './type';
import { useRating } from './hooks/use-rating';
import { RatingStar } from './components/rating-star';
import { generateRandomName, roundRatingToHalfIncremental } from './utils';

/**
 * @see Docs https://cape.deliveryhero.com/2bfa22855/p/07fddc-rating
 */
export const Rating = forwardRef<HTMLDivElement, RatingProps>(
  (
    {
      variant = 'default',
      size = 'small',
      max = 5,
      readOnly = false,
      value,
      name,
      defaultValue,
      onMouseLeave,
      onMouseEnter,
      onChange,
      setStarLabel = (val: number) => val.toString(),
      ...restProps
    }: RatingProps,
    ref: React.ForwardedRef<HTMLDivElement>,
  ) => {
    const { rootProps } = useRating({
      variant,
      size,
      max,
      readOnly,
      ...restProps,
    });

    const [rating, setRating] = useControllableState({
      value: roundRatingToHalfIncremental(value),
      defaultValue: roundRatingToHalfIncremental(defaultValue),
      onChange,
    });

    const [starHover, setStarHover] = useState(0);
    const labelFor = setStarLabel;

    const inputBlockName = useRef(name || generateRandomName());
    const starsConfig = [
      ...Array(max)
        .fill(null)
        .map((_, index) => {
          const inputValue = index + 1;
          return {
            value: inputValue,
            checked: Math.ceil(rating) === inputValue,
            hover: starHover === inputValue,
            halfFilled: inputValue - rating === 0.5,
            size,
            label: labelFor(inputValue),
          };
        }),
    ];

    const handleStarEnter = (val: number): void => {
      setStarHover(val);
      onMouseEnter?.(val);
    };

    return (
      <div
        {...rootProps}
        data-hover={starHover !== 0 || undefined}
        data-size={size}
        data-value={rating}
        data-variant={variant}
        onMouseLeave={() => {
          setStarHover(0);
          onMouseLeave?.();
        }}
        ref={ref}
        role="radiogroup"
        tabIndex={0}
      >
        <VisuallyHidden>
          <svg fill="none" viewBox="0 0 0 0">
            <defs>
              <linearGradient id={`cape-rating-gradient-${variant}`}>
                <stop offset="0.5" />
                <stop offset="0.5" />
              </linearGradient>
            </defs>
          </svg>
        </VisuallyHidden>

        {starsConfig.map((props) => (
          <RatingStar
            {...props}
            key={props.value}
            label={props.label}
            name={inputBlockName.current}
            onChange={setRating}
            onMouseEnter={() => {
              handleStarEnter(props.value);
            }}
            readOnly={readOnly}
          />
        ))}
      </div>
    );
  },
);

Rating.displayName = 'Rating';

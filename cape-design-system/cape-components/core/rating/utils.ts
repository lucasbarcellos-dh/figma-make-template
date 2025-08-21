/**
 * Rounds the rating to the nearest half incremental value
 * @param rating
 * -
 */
export const roundRatingToHalfIncremental = (
  rating?: number,
): number | undefined => {
  if (rating) {
    return Math.round(rating * 2) / 2;
  }
};

export const generateRandomName = () => {
  return Math.random()
    .toString(36)
    .replace(/[^a-z]+/g, '')
    .substring(0, 7);
};

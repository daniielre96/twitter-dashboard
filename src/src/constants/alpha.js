const DEFAULT_ALPHA = 50;

export const alpha = (color, alpha = DEFAULT_ALPHA) => {
  const result = color.concat(alpha)

  return result;
};
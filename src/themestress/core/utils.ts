/** Apply a CSS style variable to the :root of the DOM. */
export const applyStyleVar = (
  key: string,
  value: string | number,
  isVar: boolean = false,
) => {
  document.documentElement.style.setProperty(
    `--${key}`,
    String(isVar ? `var(--${value})` : value),
  );
};

/** Check if value is {} */
export const isObject = (obj: unknown) =>
  obj === Object(obj) &&
  Object.prototype.toString.call(obj) !== '[object Array]';

export const nullish = (value: unknown) =>
  value === null || value === undefined;

/** Clamp value to the given range [min,max]. */
export const clamp = (value: number, min = 0, max = 100) =>
  Math.min(Math.max(min, value), max);

/** Normalise an array of numbers between 0 - 1. */
export const normaliseRange = (values: number[]) => {
  const min = Math.min(...values);
  const max = Math.max(...values);
  const rng = max - min;
  return values.map(v => (v - min) / rng);
};

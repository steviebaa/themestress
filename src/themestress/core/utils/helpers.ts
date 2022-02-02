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

/** Check if value is {}. */
export const isObject = (obj: unknown) =>
  obj === Object(obj) &&
  Object.prototype.toString.call(obj) !== '[object Array]' &&
  typeof obj !== 'function';

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

/** Call a function on every value deep in an object except for object. */
export const objDeep = (
  value: unknown,
  fn: (v: unknown) => void,
  ignoreKeys: string[] = [],
) => {
  Object.entries(value).forEach(([k, v]) => {
    if (isObject(v)) {
      objDeep(v, fn, ignoreKeys);
    } else if (!ignoreKeys.includes(k)) {
      fn(v);
    }
  });
};

/** Merge two objects deep */
export function mergeDeep(target: Object, source: Object) {
  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      if (isObject(source[key])) {
        if (!target[key]) Object.assign(target, {[key]: {}});
        mergeDeep(target[key], source[key]);
      } else {
        Object.assign(target, {[key]: source[key]});
      }
    }
  }
  return target;
}

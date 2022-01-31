/** Check a value is a "key-value pair" object */
export const isObject = (v: unknown) =>
  typeof v === 'object' && !Array.isArray(v) && v !== null;

/** Call a function on every value in an object */
export const objDeep = (
  value: unknown,
  fn: (v: unknown) => void,
  ignoreKeys: string[] = [],
) => {
  Object.entries(value).forEach(([k, v]) => {
    if (!ignoreKeys.includes(k)) {
      fn(v);
      if (isObject(v)) objDeep(v, fn);
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

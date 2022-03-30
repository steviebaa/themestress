import {
  applyStyleVar,
  clamp,
  isObject,
  mergeDeep,
  normaliseRange,
  nullish,
  objDeep,
  titleCase,
} from './helpers';

describe('Utils helpers', () => {
  it('should set a css style variable', () => {
    applyStyleVar('test-key', 'test-value');
    applyStyleVar('test-key2', 'test-value2', true);

    const style = document.documentElement.style;
    expect(style['_values']['--test-key']).toEqual('test-value');
    expect(style['_values']['--test-key2']).toEqual('var(--test-value2)');
  });
  it('should check if a value is a key-value object', () => {
    expect(isObject(() => {})).toEqual(false);
    expect(isObject(function () {})).toEqual(false);
    expect(isObject({})).toEqual(true);
    expect(isObject([])).toEqual(false);
    expect(isObject(null)).toEqual(false);
  });
  it('should be nullish', () => {
    expect(nullish(null)).toEqual(true);
    expect(nullish(undefined)).toEqual(true);
    expect(nullish(0)).toEqual(false);
    expect(nullish('')).toEqual(false);
  });
  it('should clamp a value to a range', () => {
    expect(clamp(-1, 0, 1)).toEqual(0);
    expect(clamp(2, 0, 1)).toEqual(1);
    expect(clamp(0.3)).toEqual(0.3);
  });
  it('should normalise a range', () => {
    expect(normaliseRange([-2, -1.5, -1])).toEqual([0, 0.5, 1]);
    expect(normaliseRange([10, 0, 6])).toEqual([1, 0, 0.6]);
  });
  it('should call a function on every deep value in an object and ignore given keys', () => {
    const values: string[] = [];
    objDeep(
      {l1: 'v1', l2: {k2: 'v2', ignoreThisKey: 'bleh', l3: {k3: 'v3'}}},
      val => values.push(String(val)),
      ['ignoreThisKey'],
    );
    expect(values.length).toEqual(3);
    expect(values).toEqual(['v1', 'v2', 'v3']);
  });
  it('should call a function on every deep value in an object and default to no ignore keys', () => {
    const values: string[] = [];
    objDeep(
      {layer1: 'value1', layer2: {key2: 'value2', layer3: {key3: 'value3'}}},
      val => values.push(String(val)),
    );
    expect(values.length).toEqual(3);
    expect(values).toEqual(['value1', 'value2', 'value3']);
  });
  it('should merge two objects deep', () => {
    const obj1 = {k1: 'v1', k2: 'v2'};
    const obj2 = {k3: 'v3', k2: 'newValue', deep: {deepKey: 'deepVal'}};
    mergeDeep(obj1, obj2);

    expect(obj1).toEqual({
      deep: {deepKey: 'deepVal'},
      k1: 'v1',
      k2: 'newValue',
      k3: 'v3',
    });
  });
  it('should title case a string', () => {
    expect(titleCase('Test string')).toEqual('Test String');
  });
});

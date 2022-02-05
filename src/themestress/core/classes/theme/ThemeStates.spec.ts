import {ThemeStates} from './ThemeStates';

describe('Class ThemeStates', () => {
  it('should have defaults', () => {
    const states = new ThemeStates();
    expect(states.drag.opacity).toEqual(0.16);
  });
  it('should have custom value', () => {
    const states = new ThemeStates({hover: {opacity: 0.06}});
    expect(states.hover.opacity).toEqual(0.06);
  });
  it('should set the global css vars', () => {
    const states = new ThemeStates();
    const addStyle = jest.fn();
    states.setGlobalCssVars(addStyle);
    expect(addStyle).toHaveBeenCalledTimes(4);
  });
});

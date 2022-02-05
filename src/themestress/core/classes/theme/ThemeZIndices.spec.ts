import {ThemeZIndices} from './ThemeZIndices';

describe('Class ThemeZIndices', () => {
  it('should set the default props', () => {
    const zIndices = new ThemeZIndices();
    expect(zIndices.navbar).toEqual(1100);
    expect(zIndices.backdrop).toEqual(1300);
    expect(zIndices.modal).toEqual(1400);
    expect(zIndices.snackbar).toEqual(1500);
    expect(zIndices.tooltip).toEqual(1600);
  });
  it('should set the custom props', () => {
    const zIndices = new ThemeZIndices({
      navbar: 1,
      backdrop: 2,
      modal: 3,
      snackbar: 4,
      tooltip: 5,
    });
    expect(zIndices.navbar).toEqual(1);
    expect(zIndices.backdrop).toEqual(2);
    expect(zIndices.modal).toEqual(3);
    expect(zIndices.snackbar).toEqual(4);
    expect(zIndices.tooltip).toEqual(5);
  });
  it('should set the global css variables', () => {
    const addStyle = jest.fn();
    const zIndices = new ThemeZIndices();
    zIndices.setGlobalCssVars(addStyle);

    expect(addStyle).toHaveBeenLastCalledWith('md-sys-z-index-tooltip', '1600');
  });
});

import {ThemeZIndices} from './ThemeZIndices';

describe('Class ThemeZIndices', () => {
  it('should set the default props', () => {
    const zIndices = new ThemeZIndices();
    expect(zIndices.navbar).toEqual({size: 1100, unit: 'px'});
    expect(zIndices.backdrop).toEqual({size: 1300, unit: 'px'});
    expect(zIndices.modal).toEqual({size: 1400, unit: 'px'});
    expect(zIndices.snackbar).toEqual({size: 1500, unit: 'px'});
    expect(zIndices.tooltip).toEqual({size: 1600, unit: 'px'});
  });
  it('should set the custom props', () => {
    const zIndices = new ThemeZIndices({
      navbar: {size: 1, unit: 'cm'},
      backdrop: {size: 2, unit: 'cm'},
      modal: {size: 3, unit: 'cm'},
      snackbar: {size: 4, unit: 'cm'},
      tooltip: {size: 5, unit: 'cm'},
    });
    expect(zIndices.navbar.size).toEqual(1);
    expect(zIndices.backdrop.size).toEqual(2);
    expect(zIndices.modal.size).toEqual(3);
    expect(zIndices.snackbar.size).toEqual(4);
    expect(zIndices.tooltip.size).toEqual(5);
  });
  it('should set the global css variables', () => {
    const zIndices = new ThemeZIndices();
    zIndices.setGlobalCssVars();

    const style = document.documentElement.style;
    expect(style['_values']['--md-sys-z-index-modal']).toEqual('1400px');
  });
});

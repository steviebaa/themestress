import {ColorUtility} from './ColorUtility';

describe('ColorUtility.rgb', () => {
  it('should correctly validate an RGB string', () => {
    const {isValid} = ColorUtility.rgb;
    expect(isValid('rgb(5,5,5)')).toEqual(true);
    expect(isValid('rbg(5,5,5)')).toEqual(false);
    expect(isValid('rgb(5,5,5 / 5)')).toEqual(true);
    expect(isValid('rgb(5,5,5, 0.5)')).toEqual(true);
    expect(isValid('rgb(5,5)')).toEqual(false);
  });
  it('should throw from bad RGB color', () => {
    const {rgb} = ColorUtility;
    expect(() => rgb.validateWithError('ddd')).toThrow(
      'ColorUtility.rgb.validateWithError',
    );
  });
  it('should report if RGB color is RGBA format', () => {
    const {isRgba} = ColorUtility.rgb;
    expect(isRgba('rgb(5,5,5)')).toEqual(false);
    expect(isRgba('rgb(5,5,5,0.4)')).toEqual(true);
    expect(isRgba('rgb(5,5,5/0.4)')).toEqual(true);
    expect(isRgba('rgb(5,5  5 / 0.4)')).toEqual(true);
  });
  describe('.get', () => {
    it('should get the red of an RGB color', () => {
      const {get} = ColorUtility.rgb;
      expect(get.red('rgb(5,6,7)')).toEqual(5);
      expect(get.red('rgb(5,6,7,0.4)')).toEqual(5);
    });
    it('should get the green of an RGB color', () => {
      const {get} = ColorUtility.rgb;
      expect(get.green('rgb(5,6,7)')).toEqual(6);
      expect(get.green('rgb(5,6,7,0.4)')).toEqual(6);
    });
    it('should get the blue of an RGB color', () => {
      const {get} = ColorUtility.rgb;
      expect(get.blue('rgb(5,6,7)')).toEqual(7);
      expect(get.blue('rgb(5,6,7,0.4)')).toEqual(7);
    });
    it('should get the opacity of an RGB color', () => {
      const {get} = ColorUtility.rgb;
      expect(get.opacity('rgb(5,5,5)')).toEqual(1);
      expect(get.opacity('rgb(5,5,5,0.4)')).toEqual(0.4);
    });
  });
  describe('.set', () => {
    it('should set the red of an RGB color', () => {
      const {set} = ColorUtility.rgb;
      expect(set.red('rgb(5,6,7)', 10)).toEqual('rgb(10,6,7)');
      expect(set.red('rgb(5,6,7,0.4)', 10)).toEqual('rgb(10,6,7,0.4)');
    });
    it('should set the green of an RGB color', () => {
      const {set} = ColorUtility.rgb;
      expect(set.green('rgb(5,6,7)', 10)).toEqual('rgb(5,10,7)');
      expect(set.green('rgb(5,6,7,0.4)', 10)).toEqual('rgb(5,10,7,0.4)');
    });
    it('should set the blue of an RGB color', () => {
      const {set} = ColorUtility.rgb;
      expect(set.blue('rgb(5,6,7)', 10)).toEqual('rgb(5,6,10)');
      expect(set.blue('rgb(5,6,7,0.4)', 10)).toEqual('rgb(5,6,10,0.4)');
    });
    it('should set the opacity of an RGB color', () => {
      const {set} = ColorUtility.rgb;
      expect(set.opacity('rgb(5,6,7)', 10)).toEqual('rgb(5,6,7,0.1)');
      expect(set.opacity('rgb(5,6,7,0.4)', 10)).toEqual('rgb(5,6,7,0.1)');
    });
  });
  it('should decompose an RGB color to numeric values', () => {
    const {decomposeNumeric} = ColorUtility.rgb;
    expect(decomposeNumeric('rgb(5,5,5)')).toEqual([5, 5, 5]);
    expect(decomposeNumeric('rgb(5,5,5,0.4)')).toEqual([5, 5, 5, 0.4]);
    expect(decomposeNumeric('rgb(5,5,5/0.4)')).toEqual([5, 5, 5, 0.4]);
    expect(decomposeNumeric('rgb(5,5  5 / 0.4)')).toEqual([5, 5, 5, 0.4]);
  });
  it('should decompose an RGB color to string values', () => {
    const {decompose} = ColorUtility.rgb;
    expect(decompose('rgb(5,5,5)')).toEqual(['5', '5', '5']);
    expect(decompose('rgb(5,5,5,0.4)')).toEqual(['5', '5', '5', '0.4']);
    expect(decompose('rgb(5,5,5/0.4)')).toEqual(['5', '5', '5', '0.4']);
    expect(decompose('rgb(5,5  5 / 0.4)')).toEqual(['5', '5', '5', '0.4']);
  });
  it('should clean an RGB color to a predictable format', () => {
    const {clean} = ColorUtility.rgb;
    expect(clean('rgba(5,5,5)')).toEqual('rgb(5,5,5)');
    expect(clean('rgb(5,5,5,0.4)')).toEqual('rgb(5,5,5,0.4)');
    expect(clean('rgb(5,5,5/0.4)')).toEqual('rgb(5,5,5,0.4)');
    expect(clean('rgb(5,5  5 / 0.4)')).toEqual('rgb(5,5,5,0.4)');
    expect(clean('rgb(5,5  5 , )')).toEqual('rgb(5,5,5)');
  });
  it('should compose an RGB color to an RGB string', () => {
    const {compose: compose} = ColorUtility.rgb;
    expect(compose(['5', '5', '5'])).toEqual('rgb(5,5,5)');
    expect(compose(['5', '5', '5', '0.4'])).toEqual('rgb(5,5,5,0.4)');
    expect(compose(['5', '5', '5', '0.4'])).toEqual('rgb(5,5,5,0.4)');
    expect(compose(['5', '5', '5', '0.4'])).toEqual('rgb(5,5,5,0.4)');
    expect(compose(['5', '5', '5', '40'])).toEqual('rgb(5,5,5,0.4)');
    expect(() => compose(['5', '5'])).toThrow('ColorUtility.rgb.compose');
  });
  describe('.to', () => {
    it('should convert an RGB color to HEX', () => {
      const {to} = ColorUtility.rgb;
      expect(to.hex('rgba(5,5,5)')).toEqual('#050505');
      expect(to.hex('rgb(5,5,5,0.4)')).toEqual('#05050566');
      expect(to.hex('rgb(5,5,5/0.4)')).toEqual('#05050566');
      expect(to.hex('rgb(5,5  5 / 0.4)')).toEqual('#05050566');
      expect(to.hex('#050505')).toEqual('#050505');
    });
    it('should convert an RGB color to HSL', () => {
      const {hsl} = ColorUtility.rgb.to;
      expect(hsl('rgba(49,94,141)')).toEqual('hsl(211deg,48%,37%)');
      expect(hsl('rgb(49,94,141,0.4)')).toEqual('hsl(211deg,48%,37%,0.4)');
      expect(hsl('rgb(49,94,141/0.4)')).toEqual('hsl(211deg,48%,37%,0.4)');
      expect(hsl('rgb(49,94  141 / 0.4)')).toEqual('hsl(211deg,48%,37%,0.4)');
      expect(hsl('rgb(49,94  141 / 0.0)')).toEqual('hsl(211deg,48%,37%,0)');
      expect(hsl('rgb(49,1,3)')).toEqual('hsl(357deg,96%,10%)');
      expect(hsl('rgb(1,30,3)')).toEqual('hsl(124deg,94%,6%)');
    });
  });
});

describe('ColorUtility.hsl', () => {
  it('should correctly validate an HSL string', () => {
    const {isValid} = ColorUtility.hsl;
    expect(isValid('hsl(211deg,48%,37%)')).toEqual(true);
    expect(isValid('hls(211deg,48%,37%)')).toEqual(false);
    expect(isValid('hsl(211deg,48%,37% / 5)')).toEqual(true);
    expect(isValid('hsl(211deg,48%,37%, 0.5)')).toEqual(true);
    expect(isValid('hsl(211deg,48%)')).toEqual(false);
  });
  it('should throw from bad HSL color', () => {
    const {hsl} = ColorUtility;
    expect(() => hsl.validateWithError('ddd')).toThrow(
      'ColorUtility.hsl.validateWithError',
    );
  });
  it('should report if HSL color has opacity', () => {
    const {isHsla} = ColorUtility.hsl;
    expect(isHsla('hsl(211deg,48%,37%)')).toEqual(false);
    expect(isHsla('hsl(211deg,48%,37%,0.4)')).toEqual(true);
    expect(isHsla('hsl(211deg,48%,37% / 5)')).toEqual(true);
    expect(isHsla('hsl(211deg,48%,37%, 0.5)')).toEqual(true);
  });
  describe('.get', () => {
    it('should get the hue of an HSL color', () => {
      const {get} = ColorUtility.hsl;
      expect(get.hue('hsl(211deg,48%,37%)')).toEqual(211);
      expect(get.hue('hsl(211deg,48%,37%,0.4)')).toEqual(211);
    });
    it('should get the saturation of an HSL color', () => {
      const {get} = ColorUtility.hsl;
      expect(get.saturation('hsl(211deg,48%,37%)')).toEqual(48);
      expect(get.saturation('hsl(211deg,48%,37%,0.4)')).toEqual(48);
    });
    it('should get the lightness of an HSL color', () => {
      const {get} = ColorUtility.hsl;
      expect(get.lightness('hsl(211deg,48%,37%)')).toEqual(37);
      expect(get.lightness('hsl(211deg,48%,37%,0.4)')).toEqual(37);
    });
    it('should get the opacity of an HSL color', () => {
      const {get} = ColorUtility.hsl;
      expect(get.opacity('hsl(211deg,48%,37%)')).toEqual(1);
      expect(get.opacity('hsl(211deg,48%,37%,0.4)')).toEqual(0.4);
    });
  });
  describe('.set', () => {
    it('should set the hue of an HSL color', () => {
      const {set} = ColorUtility.hsl;
      expect(set.hue('hsl(8deg,8%,7%)', 2)).toEqual('hsl(2deg,8%,7%)');
      expect(set.hue('hsl(8deg,8%,7%,0.4)', 3)).toEqual('hsl(3deg,8%,7%,0.4)');
      expect(set.hue('hsl(8deg,8%,7%)', -11)).toEqual('hsl(349deg,8%,7%)');
      expect(set.hue('hsl(8deg,8%,7%)', 361)).toEqual('hsl(1deg,8%,7%)');
    });
    it('should set the saturation of an HSL color', () => {
      const {saturation: s} = ColorUtility.hsl.set;
      expect(s('hsl(8deg,8%,7%)', 2)).toEqual('hsl(8deg,2%,7%)');
      expect(s('hsl(8deg,8%,7%,0.4)', 3)).toEqual('hsl(8deg,3%,7%,0.4)');
      expect(s('hsl(8deg,8%,7%,0.4)', -3)).toEqual('hsl(8deg,0%,7%,0.4)');
      expect(s('hsl(8deg,8%,7%,0.4)', 101)).toEqual('hsl(8deg,100%,7%,0.4)');
    });
    it('should set the lightness of an HSL color', () => {
      const {lightness} = ColorUtility.hsl.set;
      expect(lightness('hsl(8deg,8%,7%)', 2)).toEqual('hsl(8deg,8%,2%)');
      expect(lightness('hsl(8deg,8%,7%,0.4)', 3)).toEqual(
        'hsl(8deg,8%,3%,0.4)',
      );
    });
    it('should set the opacity of an HSL color', () => {
      const {opacity} = ColorUtility.hsl.set;
      expect(opacity('hsl(8deg,8%,7%)', 2)).toEqual('hsl(8deg,8%,7%,0.02)');
      expect(opacity('hsl(8deg,8%,7%,0.4)', 10)).toEqual('hsl(8deg,8%,7%,0.1)');
    });
  });
  it('should decompose an HSL color to numeric values', () => {
    const {decomposeNumeric: decompose} = ColorUtility.hsl;
    expect(decompose('hsl(211deg,48%,37%)')).toEqual([211, 48, 37]);
    expect(decompose('hsl(211deg,48%,37%,0.4)')).toEqual([211, 48, 37, 0.4]);
    expect(decompose('hsl(211deg,48%,37% / 5)')).toEqual([211, 48, 37, 0.05]);
    expect(decompose('hsl(211deg,48%,37%, 0.5)')).toEqual([211, 48, 37, 0.5]);
  });
  it('should decompose an HSL color to string values', () => {
    const {decompose: d} = ColorUtility.hsl;
    expect(d('hsl(21deg,9%,8%)')).toEqual(['21deg', '9%', '8%']);
    expect(d('hsl(21deg,9%,8%,0.4)')).toEqual(['21deg', '9%', '8%', '0.4']);
    expect(d('hsl(21deg,9%,8% / 5)')).toEqual(['21deg', '9%', '8%', '0.05']);
    expect(d('hsl(21deg,9%,8%, 0.5)')).toEqual(['21deg', '9%', '8%', '0.5']);
  });
  it('should compose an HSL color to string values', () => {
    const {compose: r} = ColorUtility.hsl;
    expect(r(['21deg', '9%', '8%'])).toEqual('hsl(21deg,9%,8%)');
    expect(r(['21deg', '9%', '8%', '0.4'])).toEqual('hsl(21deg,9%,8%,0.4)');
    expect(r(['21deg', '9%', '8%', '0.05'])).toEqual('hsl(21deg,9%,8%,0.05)');
    expect(r(['21deg', '9%', '8%', '0.5'])).toEqual('hsl(21deg,9%,8%,0.5)');
    expect(() => r(['21deg', '9%'])).toThrow('ColorUtility.hsl.compose');
    expect(r(['21deg', '9%', '8%', '2%'])).toEqual('hsl(21deg,9%,8%,0.02)');
  });
  it('should clean an HSL color to a predictable format', () => {
    const {clean} = ColorUtility.hsl;
    expect(clean('hsl(21deg,48%,37%)')).toEqual('hsl(21deg,48%,37%)');
    expect(clean('hsl(21deg,48%,37%,0.4)')).toEqual('hsl(21deg,48%,37%,0.4)');
    expect(clean('hsl(21deg,48%,37% / 5)')).toEqual('hsl(21deg,48%,37%,0.05)');
    expect(clean('hsl(21deg,48%,37%, 0.5)')).toEqual('hsl(21deg,48%,37%,0.5)');
    expect(clean('hsl(21deg,48%,37%, )')).toEqual('hsl(21deg,48%,37%)');
  });
  describe('.to', () => {
    it('should convert an HSL color to HEX', () => {
      const {to} = ColorUtility.hsl;
      expect(to.hex('hsl(2deg,8%,9%)')).toEqual('#191515');
      expect(to.hex('hsl(2deg,8%,9%,0.4)')).toEqual('#19151566');
      expect(to.hex('hsl(2deg,8%,9% / 5)')).toEqual('#1915150d');
      expect(to.hex('hsl(2deg,8%,9%, 0.5)')).toEqual('#19151580');
    });
    it('should convert an HSL color to RGB', () => {
      const {to} = ColorUtility.hsl;
      expect(to.rgb('hsl(2deg,8%,9%)')).toEqual('rgb(25,21,21)');
      expect(to.rgb('hsl(2deg,8%,9%,0.4)')).toEqual('rgb(25,21,21,0.4)');
      expect(to.rgb('hsl(2deg,8%,9%,0.4)')).toEqual('rgb(25,21,21,0.4)');
      expect(to.rgb('hsl(2deg,8%,9%,0.4)')).toEqual('rgb(25,21,21,0.4)');
      expect(to.rgb('hsl(2deg,8% 9% / 0.0)')).toEqual('rgb(25,21,21,0)');
      expect(to.rgb('rgb(25,21,21)')).toEqual('rgb(25,21,21)');
    });
    it('should convert an HSL color to HSL without alpha', () => {
      const {to} = ColorUtility.hsl;
      expect(to.hsl('hsl(2deg,8%,9%)')).toEqual('hsl(2deg,8%,9%)');
      expect(to.hsl('hsl(2deg,8%,9%,0.4)')).toEqual('hsl(2deg,8%,9%)');
    });
    it('should convert an HSL color to HSLA with alpha', () => {
      const {to} = ColorUtility.hsl;
      expect(to.hsla('hsl(2deg,8%,9%)', 0.5)).toEqual('hsl(2deg,8%,9%,0.5)');
      expect(to.hsla('hsl(2deg,8%,9%,0.4)', 0.5)).toEqual(
        'hsl(2deg,8%,9%,0.5)',
      );
    });
  });
});

describe('ColorUtility.hex', () => {
  it('should correctly validate a HEX string', () => {
    const {isValid} = ColorUtility.hex;
    expect(isValid('#aa')).toEqual(false);
    expect(isValid('#abc')).toEqual(true);
    expect(isValid('#aabc')).toEqual(true);
    expect(isValid('#aabbc')).toEqual(false);
    expect(isValid('#aabbcc')).toEqual(true);
    expect(isValid('#aabbccee')).toEqual(true);
    expect(isValid('abc')).toEqual(false);
  });
  it('should throw from bad HEX color', () => {
    const {hex} = ColorUtility;
    expect(() => hex.validateWithError('ddd')).toThrow(
      'ColorUtility.hex.validateWithError',
    );
  });
  it('should report if HEX color has an opacity designation', () => {
    const {containsAlphaDesignation} = ColorUtility.hex;
    expect(containsAlphaDesignation('#abc')).toEqual(false);
    expect(containsAlphaDesignation('#abce')).toEqual(true);
    expect(containsAlphaDesignation('#aabbcc')).toEqual(false);
    expect(containsAlphaDesignation('#aabbccee')).toEqual(true);
  });

  describe('.get', () => {
    it('should get the red part of a HEX string', () => {
      const {get} = ColorUtility.hex;
      expect(get.redAsString('#abc')).toEqual('aa');
      expect(get.redAsString('#abce')).toEqual('aa');
      expect(get.redAsString('#aabbcc')).toEqual('aa');
      expect(get.redAsString('#aabbcc03')).toEqual('aa');
    });
    it('should get the green part of a HEX string', () => {
      const {get} = ColorUtility.hex;
      expect(get.greenAsString('#abc')).toEqual('bb');
      expect(get.greenAsString('#abce')).toEqual('bb');
      expect(get.greenAsString('#aabbcc')).toEqual('bb');
      expect(get.greenAsString('#aabbcc03')).toEqual('bb');
    });
    it('should get the blue part of a HEX string', () => {
      const {get} = ColorUtility.hex;
      expect(get.blueAsString('#abc')).toEqual('cc');
      expect(get.blueAsString('#abce')).toEqual('cc');
      expect(get.blueAsString('#aabbcc')).toEqual('cc');
      expect(get.blueAsString('#aabbcc03')).toEqual('cc');
    });
    it('should get the opacity part of a HEX string', () => {
      const {get} = ColorUtility.hex;
      expect(get.opacityAsString('#abc')).toEqual('ff');
      expect(get.opacityAsString('#abce')).toEqual('ee');
      expect(get.opacityAsString('#aabbcc')).toEqual('ff');
      expect(get.opacityAsString('#aabbcc03')).toEqual('03');
    });
    it('should get the red part of a HEX color as a number', () => {
      const {get} = ColorUtility.hex;
      expect(get.redAsNumber('#abc')).toEqual(170);
      expect(get.redAsNumber('#abce')).toEqual(170);
      expect(get.redAsNumber('#aabbcc')).toEqual(170);
      expect(get.redAsNumber('#aabbcc03')).toEqual(170);
    });
    it('should get the green part of a HEX color as a number', () => {
      const {get} = ColorUtility.hex;
      expect(get.greenAsNumber('#abc')).toEqual(187);
      expect(get.greenAsNumber('#abce')).toEqual(187);
      expect(get.greenAsNumber('#aabbcc')).toEqual(187);
      expect(get.greenAsNumber('#aabbcc03')).toEqual(187);
    });
    it('should get the blue part of a HEX color as a number', () => {
      const {get} = ColorUtility.hex;
      expect(get.blueAsNumber('#abc')).toEqual(204);
      expect(get.blueAsNumber('#abce')).toEqual(204);
      expect(get.blueAsNumber('#aabbcc')).toEqual(204);
      expect(get.blueAsNumber('#aabbcc03')).toEqual(204);
    });
    it('should get the opacity of a HEX color as a number', () => {
      const {get} = ColorUtility.hex;
      expect(get.opacityAsNumber('#abc')).toEqual(1);
      expect(get.opacityAsNumber('#abce')).toEqual(0.93);
      expect(get.opacityAsNumber('#aabbcc')).toEqual(1);
      expect(get.opacityAsNumber('#aabbcc03')).toEqual(0.01);
    });
  });
  describe('.set', () => {
    it('should set the red part of a HEX color as a number', () => {
      const {set} = ColorUtility.hex;
      expect(set.red('#abc', 'ff')).toEqual('#ffbbcc');
      expect(set.red('#abce', 'ff')).toEqual('#ffbbccee');
      expect(set.red('#aabbcc', 'ff')).toEqual('#ffbbcc');
      expect(set.red('#aabbcc03', 'ff')).toEqual('#ffbbcc03');
    });
    it('should set the green part of a HEX color as a number', () => {
      const {set} = ColorUtility.hex;
      expect(set.green('#abc', 'ff')).toEqual('#aaffcc');
      expect(set.green('#abce', 'ff')).toEqual('#aaffccee');
      expect(set.green('#aabbcc', 'ff')).toEqual('#aaffcc');
      expect(set.green('#aabbcc03', 'ff')).toEqual('#aaffcc03');
    });
    it('should set the blue part of a HEX color as a number', () => {
      const {set} = ColorUtility.hex;
      expect(set.blue('#abc', 'ff')).toEqual('#aabbff');
      expect(set.blue('#abce', 'ff')).toEqual('#aabbffee');
      expect(set.blue('#aabbcc', 'ff')).toEqual('#aabbff');
      expect(set.blue('#aabbcc03', 'ff')).toEqual('#aabbff03');
    });
    it('should set the opacity of a HEX color as a number', () => {
      const {set} = ColorUtility.hex;
      expect(set.opacity('#abc', 'ff')).toEqual('#aabbccff');
      expect(set.opacity('#abce', 'ff')).toEqual('#aabbccff');
      expect(set.opacity('#aabbcc', 'ff')).toEqual('#aabbccff');
      expect(set.opacity('#aabbcc03', 'ff')).toEqual('#aabbccff');
    });
  });
  it('should clean a HEX color to a predictable format', () => {
    const {clean} = ColorUtility.hex;
    expect(clean('#abc')).toEqual('#aabbcc');
    expect(clean('#abce')).toEqual('#aabbccee');
    expect(clean('#aabbcc')).toEqual('#aabbcc');
    expect(clean('#aabbcc03')).toEqual('#aabbcc03');
    expect(() => clean('ddd')).toThrow('ColorUtility.hex.clean');
  });
  it('should decompose a HEX color to string values', () => {
    const {decompose} = ColorUtility.hex;
    expect(decompose('#abc')).toEqual(['aa', 'bb', 'cc']);
    expect(decompose('#abce')).toEqual(['aa', 'bb', 'cc', 'ee']);
    expect(decompose('#aabbcc')).toEqual(['aa', 'bb', 'cc']);
    expect(decompose('#aabbcc03')).toEqual(['aa', 'bb', 'cc', '03']);
  });
  it('should compose a HEX color to string values', () => {
    const {compose} = ColorUtility.hex;
    expect(compose(['A', 'b', 'c'])).toEqual('#aabbcc');
    expect(compose(['aa', 'bb', 'cc'])).toEqual('#aabbcc');
    expect(compose(['aa', 'bb', 'cc', 'ee'])).toEqual('#aabbccee');
    expect(compose(['aa', 'bb', 'cc'])).toEqual('#aabbcc');
    expect(compose(['aa', 'bb', 'cc', '03'])).toEqual('#aabbcc03');
    expect(() => compose(['a', 'b'])).toThrow('ColorUtility.hex.compose');
  });
  describe('.to', () => {
    it('should convert a HEX color to RGB', () => {
      const {to} = ColorUtility.hex;
      expect(to.rgb('#abc')).toEqual('rgb(170,187,204)');
      expect(to.rgb('#abce')).toEqual('rgb(170,187,204,0.93)');
      expect(to.rgb('#aabbcc')).toEqual('rgb(170,187,204)');
      expect(to.rgb('#aabbcc03')).toEqual('rgb(170,187,204,0.01)');
      expect(to.rgb('rgb(1,1,1)')).toEqual('rgb(1,1,1)');
    });
    it('should convert a HEX color to HSL', () => {
      const {to} = ColorUtility.hex;
      expect(to.hsl('#abc')).toEqual('hsl(210deg,25%,73%)');
      expect(to.hsl('#abce')).toEqual('hsl(210deg,25%,73%,0.93)');
      expect(to.hsl('#aabbcc')).toEqual('hsl(210deg,25%,73%)');
      expect(to.hsl('#aabbcc03')).toEqual('hsl(210deg,25%,73%,0.01)');
      expect(to.hsl('hsl(1deg,2%,3%)')).toEqual('hsl(1deg,2%,3%)');
    });
    it('should convert a number to a HEX representation', () => {
      const {to} = ColorUtility.hex;
      expect(to.number('#fF')).toEqual(255);
      expect(to.number('FF')).toEqual(255);
    });
  });
});

describe('ColorUtility.css', () => {
  it('should correctly validate an CSS string', () => {
    const {isValid} = ColorUtility.css;
    expect(isValid('red')).toEqual(true);
    expect(isValid('ddd')).toEqual(false);
  });
  it('should throw from bad CSS color', () => {
    const {css} = ColorUtility;
    expect(() => css.validateWithError('ddd')).toThrow(
      'ColorUtility.css.validateWithError',
    );
  });
  describe('.to', () => {
    it('should convert an CSS string to HEX', () => {
      const {css} = ColorUtility;
      expect(css.to.hex('yellow')).toEqual('#ffff00');
    });
    it('should convert an CSS string to HSL', () => {
      const {css} = ColorUtility;
      expect(css.to.hsl('yellow')).toEqual('hsl(60deg,100%,50%)');
    });
    it('should convert an CSS string to RGB', () => {
      const {css} = ColorUtility;
      expect(css.to.rgb('yellow')).toEqual('rgb(255,255,0)');
    });
  });
});

describe('ColorUtility', () => {
  describe('ColorUtility.get ', () => {
    it('should get the red of a supported color', () => {
      const {get} = ColorUtility;
      expect(get.red('rgb(5,5,5)')).toEqual(5);
      expect(get.red('hsl(211deg,48%,37%)')).toEqual(49);
      expect(get.red('#abc')).toEqual(170);
      expect(get.red('red')).toEqual(255);
      expect(() => get.red('bad')).toThrow('ColorUtility.get.red');
    });
    it('should get the green of a supported color', () => {
      const {get} = ColorUtility;
      expect(get.green('rgb(5,5,5)')).toEqual(5);
      expect(get.green('hsl(211deg,48%,37%)')).toEqual(93);
      expect(get.green('#abc')).toEqual(187);
      expect(get.green('green')).toEqual(128);
      expect(() => get.green('bad')).toThrow('ColorUtility.get.green');
    });
    it('should get the blue of a supported color', () => {
      const {get} = ColorUtility;
      expect(get.blue('rgb(5,5,5)')).toEqual(5);
      expect(get.blue('hsl(211deg,48%,37%)')).toEqual(140);
      expect(get.blue('#abc')).toEqual(204);
      expect(get.blue('blue')).toEqual(255);
      expect(() => get.blue('bad')).toThrow('ColorUtility.get.blue');
    });
    it('should get the opacity of a supported color', () => {
      const {get} = ColorUtility;
      expect(get.opacity('rgb(5,5,5)')).toEqual(1);
      expect(get.opacity('rgb(5,5  5 / 0.4)')).toEqual(0.4);
      expect(get.opacity('hsl(211deg,48%,37%)')).toEqual(1);
      expect(get.opacity('hsl(211deg,48%,37% / 5)')).toEqual(0.05);
      expect(get.opacity('#abc')).toEqual(1);
      expect(get.opacity('#aabbcc03')).toEqual(0.01);
      expect(get.opacity('red')).toEqual(1);
      expect(() => get.opacity('bad')).toThrow('ColorUtility.get.opacity');
    });
    it('should get the hue of a supported color', () => {
      const {get} = ColorUtility;
      expect(get.hue('rgb(28,17,0)')).toEqual(36);
      expect(get.hue('hsl(211deg,48%,37%)')).toEqual(211);
      expect(get.hue('#abc')).toEqual(210);
      expect(get.hue('royalblue')).toEqual(225);
      expect(() => get.hue('bad')).toThrow('ColorUtility.get.hue');
    });
    it('should get the saturation of a supported color', () => {
      const {saturation} = ColorUtility.get;
      expect(saturation('rgb(28,17,0)')).toEqual(100);
      expect(saturation('hsl(211deg,48%,37%)')).toEqual(48);
      expect(saturation('#abc')).toEqual(25);
      expect(saturation('royalblue')).toEqual(73);
      expect(() => saturation('bad')).toThrow('ColorUtility.get.saturation');
    });
    it('should get the lightness of a supported color', () => {
      const {lightness} = ColorUtility.get;
      expect(lightness('rgb(28,17,0)')).toEqual(5);
      expect(lightness('hsl(211deg,48%,37%)')).toEqual(37);
      expect(lightness('#abc')).toEqual(73);
      expect(lightness('royalblue')).toEqual(57);
      expect(() => lightness('bad')).toThrow('ColorUtility.get.lightness');
    });
    it('should get the luminance of a color', () => {
      const {luminance} = ColorUtility.get;
      const color = '#448aff';
      const lum = luminance(color);
      expect(lum).toEqual(0.266);
    });
    it('should get the contrast ratio between two colors', () => {
      const {contrast} = ColorUtility.get;
      expect(contrast('#448aff', 'white')).toBeCloseTo(3.322);
      expect(contrast('#000', '#fff')).toEqual(21);
      expect(contrast('white', 'black')).toEqual(21);
    });
    it('should calculate an appropriate "on" color', () => {
      const {onColor} = ColorUtility.get;
      expect(onColor('#448aff')).toEqual('#001333');
      expect(onColor('#227733')).toEqual('#d7f4dd');
    });
  });

  describe('ColorUtility.to ', () => {
    it('should convert a supported color to a HEX color', () => {
      const {to} = ColorUtility;
      expect(to.hex('rgb(5,5,5,0.4)')).toEqual('#05050566');
      expect(to.hex('hsl(2deg,8%,9% / 5)')).toEqual('#1915150d');
      expect(to.hex('#1915150d')).toEqual('#1915150d');
      expect(to.hex('yellow')).toEqual('#ffff00');
      expect(() => to.hex('bad')).toThrow('ColorUtility.to.hex');
    });
    it('should convert a supported color to an HSL color', () => {
      const {to} = ColorUtility;
      expect(to.hsl('rgb(5,5,5,0.4)')).toEqual('hsl(0deg,0%,2%,0.4)');
      expect(to.hsl('hsl(2deg,8%,9% / 5)')).toEqual('hsl(2deg,8%,9%,0.05)');
      expect(to.hsl('#1915150d')).toEqual('hsl(0deg,9%,9%,0.05)');
      expect(to.hsl('yellow')).toEqual('hsl(60deg,100%,50%)');
      expect(() => to.hsl('bad')).toThrow('ColorUtility.to.hsl');
    });
    it('should convert a supported color to an RGB color', () => {
      const {to} = ColorUtility;
      expect(to.rgb('rgb(5,5,5,0.4)')).toEqual('rgb(5,5,5,0.4)');
      expect(to.rgb('hsl(2deg,8%,9% / 5)')).toEqual('rgb(25,21,21,0.05)');
      expect(to.rgb('#1915150d')).toEqual('rgb(25,21,21,0.05)');
      expect(to.rgb('yellow')).toEqual('rgb(255,255,0)');
      expect(() => to.rgb('bad')).toThrow('ColorUtility.to.rgb');
    });
  });

  it('should convert [0,1] to a hex value', () => {
    expect(ColorUtility.fractionToHex(0)).toEqual('00');
    expect(ColorUtility.fractionToHex(0.3)).toEqual('4d');
    expect(ColorUtility.fractionToHex(1)).toEqual('ff');
    expect(ColorUtility.fractionToHex(1.2)).toEqual('ff');
    expect(ColorUtility.fractionToHex(-0.3)).toEqual('00');
  });
  it('should convert [0,255] to a hex value', () => {
    expect(ColorUtility.numberToHex(-3)).toEqual('00');
    expect(ColorUtility.numberToHex(0)).toEqual('00');
    expect(ColorUtility.numberToHex(150)).toEqual('96');
    expect(ColorUtility.numberToHex(255)).toEqual('ff');
    expect(ColorUtility.numberToHex(2000)).toEqual('ff');
  });
});

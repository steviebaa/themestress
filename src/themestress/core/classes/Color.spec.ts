import {Color} from './Color';

describe('Class Color', () => {
  it('should set opacities', () => {
    const color = new Color('rgb(30,30,30)');
    expect(color['_opacity']).toEqual(1);
    expect(color['_opacityHex']).toEqual(undefined);

    color.set('hsla(30,20,20,0.4)');
    expect(color['_opacity']).toEqual(0.4);
    expect(color['_opacityHex']).toEqual(undefined);
  });

  describe('getters', () => {
    it('should return correct boolean for hasOpacity getter', () => {
      const color = new Color('rgb(30,30,30,0.5)');
      expect(color.hasOpacity).toEqual(true);
      color.set('rgb(30,30,30,1)');
      expect(color.hasOpacity).toEqual(false);
    });
    it('should return correct value for hsl getter', () => {
      const color = new Color('rgb(34,30,28)');
      expect(color.hsl).toEqual('hsl(20deg,10%,12%)');
    });
    it('should return correct value for hsla getter', () => {
      const color = new Color('rgb(34,30,28,0.5)');
      expect(color.hsla).toEqual('hsl(20deg,10%,12%,0.5)');
    });
    it('should return correct value for rgb getter', () => {
      const color = new Color('rgb(30,30,30)');
      expect(color.rgb).toEqual('rgb(31,31,31)');
    });
    it('should return correct value for rgba getter', () => {
      const color = new Color('rgb(30,30,30,0.5)');
      expect(color.rgba).toEqual('rgb(31,31,31,0.5)');
    });
    it('should return correct value for hex getter', () => {
      const color = new Color('rgb(30,30,30,0.5)');
      expect(color.hex).toEqual('#1f1f1f');
    });
    it('should return correct value for hexAlpha getter', () => {
      const color = new Color('rgb(30,30,30,0.5)');
      expect(color.hexAlpha).toEqual('#1f1f1f80');
    });
    it('should return correct number for red getter', () => {
      const color = new Color('rgb(100,30,30,0.1)');
      expect(color.red).toEqual(98);
    });
    it('should return correct number for green getter', () => {
      const color = new Color('rgb(100,30,30,0.1)');
      expect(color.green).toEqual(29);
    });
    it('should return correct number for blue getter', () => {
      const color = new Color('rgb(100,30,60,0.1)');
      expect(color.blue).toEqual(59);
    });
    it('should return correct number for hue getter', () => {
      const color = new Color('rgb(80,70,30,0.5)');
      expect(color.hue).toEqual(48);
    });
    it('should return correct number for saturation getter', () => {
      const color = new Color('rgb(80,70,30,0.5)');
      expect(color.saturation).toEqual(45);
    });
    it('should return correct number for lightness getter', () => {
      const color = new Color('rgb(80,70,30,0.5)');
      expect(color.lightness).toEqual(22);
    });
    it('should return correct number for opacity getter', () => {
      const color = new Color('rgb(30,30,30,0.5)');
      expect(color.opacity).toEqual(0.5);
      color.set('rgb(30,30,30,1)');
      expect(color.opacity).toEqual(1);
    });
    it('should return correct number for opacityAsHex getter', () => {
      const color = new Color('rgb(30,30,30,0.5)');
      expect(color.opacityAsHex).toEqual('80');
      color.set('rgb(30,30,30,1)');
      expect(color.opacityAsHex).toEqual('ff');
    });
    it('should return an appropriate "on" color', () => {
      const color = new Color('#448aff');
      const onColor = color.on;
      expect(onColor.hex).toEqual('#001333');
    });
  });

  describe('setters', () => {
    it('should correctly adjust the red of the color', () => {
      const color = new Color('rgb(0,255,0,0.5)');
      color.red = 255;
      expect(color.hsla).toEqual('hsl(60deg,100%,50%,0.5)');
    });
    it('should correctly adjust the green of the color', () => {
      const color = new Color('rgb(0,0,0,0.5)');
      color.green = 255;
      expect(color.hsla).toEqual('hsl(120deg,100%,50%,0.5)');
    });
    it('should correctly adjust the blue of the color', () => {
      const color = new Color('rgb(0,0,0,0.5)');
      color.blue = 255;
      expect(color.hsla).toEqual('hsl(240deg,100%,50%,0.5)');
    });
    it('should correctly adjust the hue of the color', () => {
      const color = new Color('hsl(34,30,28,0.5)');
      color.hue = 10;
      expect(color.hsla).toEqual('hsl(10deg,30%,28%,0.5)');
      color.hue = -11;
      expect(color.hsla).toEqual('hsl(349deg,30%,28%,0.5)');
    });
    it('should correctly adjust the saturation of the color', () => {
      const color = new Color('hsl(34,30,28,0.5)');
      color.saturation = 10;
      expect(color.hsla).toEqual('hsl(34deg,10%,28%,0.5)');
      color.saturation = -11;
      expect(color.hsla).toEqual('hsl(34deg,0%,28%,0.5)');
    });
    it('should correctly adjust the lightness of the color', () => {
      const color = new Color('hsl(34,30,28,0.5)');
      color.lightness = 10;
      expect(color.hsla).toEqual('hsl(34deg,30%,10%,0.5)');
      color.lightness = -11;
      expect(color.hsla).toEqual('hsl(34deg,30%,0%,0.5)');
    });
    it('should correctly adjust the opacity of the color', () => {
      const color = new Color('hsl(34,30,28,0.5)');
      color.opacity = 10;
      expect(color.hsla).toEqual('hsl(34deg,30%,28%,0.1)');
      color.opacity = -11;
      expect(color.hsla).toEqual('hsl(34deg,30%,28%,0)');
    });
  });

  it('should clone the color', () => {
    const color = new Color('hsl(34,30,28,0.5)');
    const clone = color.clone();

    expect(color === clone).toBeFalsy();
    expect(clone instanceof Color).toBeTruthy();
  });
});

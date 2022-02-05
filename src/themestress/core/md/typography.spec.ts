import {
  applyTypographySystemTokens,
  getRootElementSize,
  spToRem,
  typographyRefTokens,
  typographySystemTokens,
} from './typography';

describe('MD typography utilities', () => {
  beforeAll(() => {
    Object.defineProperty(window, 'getComputedStyle', {
      value: () => ({getPropertyValue: (_: string) => '16'}),
    });
  });
  it('should convert sp units to rem', () => {
    expect(spToRem(64)).toEqual(4);
    expect(spToRem(64, 8)).toEqual(8);
  });
  it('should get the root element size', () => {
    getRootElementSize();
    expect(getRootElementSize()).toEqual('16');
  });
  it('should return the ref tokens object with the default or specific prefix', () => {
    const tokens1 = typographyRefTokens();
    expect(tokens1.regular.font).toEqual('ref-typeface-font-regular');

    const tokens2 = typographyRefTokens('ts');
    expect(tokens2.regular.font).toEqual('ts-typeface-font-regular');
  });
  it('should return the system tokens object with the default or specific prefix', () => {
    const tokens1 = typographySystemTokens();
    expect(tokens1['sys-typescale-display-large'].size).toEqual({value: 57});

    const tokens2 = typographySystemTokens('ts', 'ts');
    expect(tokens2['ts-typescale-display-large'].size).toEqual({value: 57});
  });
  it('should set the typography system tokens global css vars', () => {
    const addStyle = jest.fn();
    const tokens1 = typographySystemTokens();
    applyTypographySystemTokens(tokens1, addStyle);

    expect(addStyle).toHaveBeenLastCalledWith(
      'sys-typescale-body-small-weight',
      'ref-typeface-weight-regular',
      true,
    );
  });
});

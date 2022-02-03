import {applyStyleVar} from '../utils/helpers';
import {colorRefTokenStubs, systemColorTokens} from './color';
import {
  applyTypographySystemTokens,
  getRootElementSize,
  spToRem,
  typographyRefTokens,
  typographySystemTokens,
} from './typography';

describe('MD color utilities', () => {
  it('should return the ref tokens object with the default or specific prefix', () => {
    const tokens1 = colorRefTokenStubs();
    expect(tokens1.primary).toEqual('md-ref-palette-primary');

    const tokens2 = colorRefTokenStubs('ts');
    expect(tokens2.primary).toEqual('ts-palette-primary');
  });
  it('should return the system tokens object with the default or specific prefix', () => {
    const tokens1 = systemColorTokens();
    expect(tokens1['md-sys-color-primary'].light).toEqual(
      'md-ref-palette-primary-40',
    );

    const tokens2 = systemColorTokens('ts', 'ts');
    expect(tokens2['ts-color-primary'].light).toEqual('ts-palette-primary-40');
  });
});

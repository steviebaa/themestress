import {systemElevationStyles} from './elevation';

describe('MD elevation utilities', () => {
  it('should return styles for light theme and default colors', () => {
    const styles = systemElevationStyles();

    expect(styles[1].elevation).toEqual(
      '0px 1px 2px rgb(0,0,0,0.3), 0px 1px 3px 1px rgb(0,0,0,0.15)',
    );
    expect(styles[1].overlay).toEqual(
      'linear-gradient(0deg, rgb(103,80,164,0.05), rgb(103,80,164,0.05))',
    );
  });
  it('should return styles for dark theme', () => {
    const styles = systemElevationStyles('dark', '#fba91a', '#888888');

    expect(styles[1].elevation).toEqual(
      '0px 1px 3px 1px rgb(136,136,136,0.15), 0px 1px 2px rgb(136,136,136,0.3)',
    );
    expect(styles[1].overlay).toEqual(
      'linear-gradient(0deg, rgb(251,169,26,0.05), rgb(251,169,26,0.05))',
    );
  });
});

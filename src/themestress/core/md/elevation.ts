import {ElevationToken} from '..';
import {ElevationTokens} from '../definitions';
import {applyStyleVar} from '../utils';

const elevation = (elevation: number) => {
  // Fraction function
  const f = (max: number) => Math.ceil((elevation / 24) * max);
  // Shadow line 1 and line 2
  // const l1 = `0px ${f(11)}px ${f(15)}px ${f(-7)}px rgb(0 0 0 / 24%)`;
  // const l2 = `0px ${f(9)}px ${f(46)}px ${f(8)}px rgb(0 0 0 / 14%)`;
  const l1 = `0px ${f(11)}px ${f(15)}px ${f(-7)}px`;
  // const l2 = `0px ${f(9)}px ${f(46)}px ${f(8)}px`;
  return `${l1}`;
};

export const applySystemElevationTokens = (tokens: ElevationTokens) => {
  for (const token in defaultElevationTokens) {
    const props = tokens[token] as ElevationToken;
    applyStyleVar(token, props.transform);
  }
};

export const defaultElevationTokens: ElevationTokens = {
  'md-sys-elevation-level1': {
    role: 'Shadow Level 1',
    token: 'md-sys-elevation-level1',
    elevation: 1,
    transform: elevation(1),
  },
  'md-sys-elevation-level2': {
    role: 'Shadow Level 2',
    token: 'md-sys-elevation-level2',
    elevation: 2,
    transform: elevation(2),
  },
  'md-sys-elevation-level3': {
    role: 'Shadow Level 3',
    token: 'md-sys-elevation-level3',
    elevation: 3,
    transform: elevation(3),
  },
  'md-sys-elevation-level4': {
    role: 'Shadow Level 4',
    token: 'md-sys-elevation-level4',
    elevation: 4,
    transform: elevation(4),
  },
  'md-sys-elevation-level5': {
    role: 'Shadow Level 5',
    token: 'md-sys-elevation-level5',
    elevation: 5,
    transform: elevation(5),
  },
  'md-sys-elevation-level6': {
    role: 'Shadow Level 6',
    token: 'md-sys-elevation-level6',
    elevation: 6,
    transform: elevation(6),
  },
  'md-sys-elevation-level7': {
    role: 'Shadow Level 7',
    token: 'md-sys-elevation-level7',
    elevation: 7,
    transform: elevation(7),
  },
  'md-sys-elevation-level8': {
    role: 'Shadow Level 8',
    token: 'md-sys-elevation-level8',
    elevation: 8,
    transform: elevation(8),
  },
  'md-sys-elevation-level9': {
    role: 'Shadow Level 9',
    token: 'md-sys-elevation-level9',
    elevation: 9,
    transform: elevation(9),
  },
};

import {ThemeProps} from './classes/theme/Theme';

export const getMarginAndPadding = (props: {
  theme: ThemeProps;
  margin?: number;
  marginLeft?: number;
  marginRight?: number;
  marginTop?: number;
  marginBottom?: number;
  padding?: number;
  paddingLeft?: number;
  paddingRight?: number;
  paddingTop?: number;
  paddingBottom?: number;
}) => {
  const {theme} = props;

  const targets: [string, string][] = [
    ['margin', 'margin'],
    ['marginLeft', 'margin-left'],
    ['marginRight', 'margin-right'],
    ['marginTop', 'margin-top'],
    ['marginBottom', 'margin-bottom'],
    ['padding', 'padding'],
    ['paddingLeft', 'padding-left'],
    ['paddingRight', 'padding-right'],
    ['paddingTop', 'padding-top'],
    ['paddingBottom', 'padding-bottom'],
  ];

  const calc = (prop: [string, string]) => {
    return [undefined, null].includes(props[prop[0]])
      ? null
      : `${prop[1]}: ${theme.spacing.size * props[prop[0]]}px; `;
  };

  let styles = '';
  targets.forEach(prop => (styles += calc(prop) ?? ''));

  return styles;
};

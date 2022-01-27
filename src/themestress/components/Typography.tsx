// https://material.io/design/typography/the-type-system.html#type-scale
import React from 'react';
import styled from '@emotion/styled';
import {ReactHTMLProps, TColor} from '../core/definitions';
import {
  colorFromTheme,
  onColorFromTheme,
  getMarginAndPadding,
} from '../core/themeUtils';

type Variant = keyof typeof variantStyles;
type MappedVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'code' | 'p';

export interface TypographyProps extends ReactHTMLProps<HTMLTitleElement> {
  variant?: Variant;
  fontSize?: string;
  align?: 'center' | 'inherit' | 'justify' | 'left' | 'right';
  paragraph?: boolean;
  capitalize?: boolean;
  uppercase?: boolean;
  fontColor?: TColor;
  bgColor?: TColor;
  weight?: number | string;
  bold?: boolean;
  lineHeight?: string;

  margin?: number;
  marginTop?: number;
  marginRight?: number;
  marginBottom?: number;
  marginLeft?: number;

  padding?: number;
  paddingTop?: number;
  paddingRight?: number;
  paddingBottom?: number;
  paddingLeft?: number;
}

const variantBaseline = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  body1: 'p',
  body2: 'p',
  subtitle1: 'h6',
  subtitle2: 'h6',
  overline: 'p',
  button: 'p',
  caption: 'p',
  code: 'code',
};

const variantStyles = {
  h1: `
	line-height: 1.2;
	font-weight: 300;
	font-size: 97px;
	letter-spacing: -1.5px;
	`,
  h2: `
	line-height: 1.2;
	font-weight: 300;
	font-size: 61px;
	letter-spacing: -0.5px;
	`,
  h3: `
	line-height: 1.2;
	font-weight: 400;
	font-size: 48px;
	letter-spacing: 0px;
	`,
  h4: `
	line-height: 1.2;
	font-weight: 400;
	font-size: 34px;
	letter-spacing: 0.25rem;
	`,
  h5: `
	line-height: 1.33;
	font-weight: 400;
	font-size: 24px;
	letter-spacing: 0px;
	`,
  h6: `
	line-height: 1.6;
	font-weight: 500;
	font-size: 20px;
	letter-spacing: 0.15px;
	`,
  subtitle1: `
	line-height: 1.75;
	font-weight: 400;
	font-size: 16px;
	letter-spacing: 0.15px;
	`,
  subtitle2: `
	line-height: 1.57;
	font-weight: 500;
	font-size: 14px;
	letter-spacing: 0.1px;
	`,
  body1: `
	line-height: 1.5;
	font-weight: 400;
	font-size: 16px;
	letter-spacing: 0.5px;
	`,
  body2: `
	line-height: 1.43;
	font-weight: 400;
	font-size: 14px;
	letter-spacing: 0.25px;
	`,
  button: `
	line-height: 2.66;
	font-weight: 500;
	font-size: 14px;
	letter-spacing: 1.25px;
	text-transform: uppercase;
	`,
  caption: `
	line-height: 2.66;
	font-weight: 400;
	font-size: 12px;
	letter-spacing: 0.4px;
	`,
  overline: `
	line-height: 2.66;
	font-weight: 400;
	font-size: 10px;
	letter-spacing: 1.5px;
	`,
  code: `
	line-height: 1.2;
	font-weight: 300;
	font-size: 14px;
	letter-spacing: 1.25px;
	display: inline-block;
	align-self: flex-start;
	`,
  inherit: `
	line-height: inherit;
	font-weight: inherit;
	font-size: inherit;
	letter-spacing: inherit;
	`,
};

const createStyledComponent = (mappedVariant: MappedVariant) => styled(
  mappedVariant,
)<TypographyProps>`
  user-select: none;

  ${props => variantStyles[props.variant]}
  ${props => getMarginAndPadding(props)}
  ${({variant}) => (variant === 'code' ? `padding: 1px 4px 4px 4px` : '')};

  line-height: ${({lineHeight}) => lineHeight ?? ''};
  text-align: ${({align}) => align ?? ''};
  font-size: ${({fontSize}) => fontSize ?? ''};
  font-weight: ${({weight, bold}) => (bold ? 'bold' : weight ?? '')};
  border-radius: ${({variant}) => (variant === 'code' ? `4px` : '')};
  text-transform: ${({variant, capitalize, uppercase}) =>
    variant === 'overline'
      ? 'uppercase'
      : capitalize
      ? 'capitalize'
      : uppercase
      ? 'uppercase'
      : ['button', 'overline'].includes(variant)
      ? ''
      : 'none'};
  background-color: ${({theme, bgColor: bg, variant}) =>
    bg === undefined
      ? variant === 'code'
        ? `rgba(127,127,127,0.2)`
        : 'transparent'
      : colorFromTheme(theme, bg)};
  color: ${({theme, fontColor: fc, bgColor: bg}) => {
    let color = 'inherit';
    if (bg && !fc) color = onColorFromTheme(theme, bg);
    else if (fc) color = colorFromTheme(theme, fc);
    return color;
  }};
`;

export const Typography: React.FC<TypographyProps> = ({
  children,
  ...props
}: TypographyProps) => {
  props.variant = props.variant ?? 'body1';

  const baseVariant = props.paragraph
    ? 'p'
    : (variantBaseline[props.variant] as MappedVariant);

  const Component = createStyledComponent(baseVariant);

  return (
    <Component className="_Typography" {...props}>
      {children}
    </Component>
  );
};

import React from 'react';
import styled from '@emotion/styled';

import { ReactHTMLProps, TColor } from '../core/definitions';
import { colorFromTheme } from '../core/themeUtils';

type Variant = keyof typeof variantMapping;
type MappedVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'code' | 'p';

export interface TextProps extends ReactHTMLProps<HTMLTitleElement> {
  variant?: Variant;
  fontSize?: string;
  align?: 'center' | 'inherit' | 'justify' | 'left' | 'right';
  className?: string;
  paragraph?: boolean;
  capitalize?: boolean;
  uppercase?: boolean;
  fontColor?: TColor;
  weight?: number | string;
  margin?: string;
}

const spToRem = (sp: number | string) =>
  typeof sp === 'number' ? sp / 16 : sp;

const variantMapping = {
	h1: {
    variant: 'h1',
    lineHeight: 1.2,
    weight: 300,
    fontSize: 96,
    spacing: '-0.0156rem',
  },
  h2: {
    variant: 'h2',
    lineHeight: 1.2,
    weight: 300,
    fontSize: 60,
    spacing: '-0.0083rem',
  },
  h3: {
    variant: 'h3',
    lineHeight: 1.2,
    weight: 400,
    fontSize: 48,
    spacing: '0rem',
  },
  h4: {
    variant: 'h4',
    lineHeight: 1.2,
    weight: 400,
    fontSize: 34,
    spacing: '0.00735rem',
  },
  h5: {
    variant: 'h5',
    lineHeight: 1.33,
    weight: 400,
    fontSize: 24,
    spacing: '0rem',
  },
  h6: {
    variant: 'h6',
    lineHeight: 1.6,
    weight: 500,
    fontSize: 20,
    spacing: '0.0075rem',
  },
  subtitle1: {
    variant: 'h6',
    lineHeight: 1.75,
    weight: 300,
    fontSize: 16,
    spacing: '0.0094rem',
  },
  subtitle2: {
    variant: 'h6',
    lineHeight: 1.57,
    weight: 500,
    fontSize: 14,
    spacing: '0.0071rem',
  },
  body1: {
    variant: 'p',
    lineHeight: 1.5,
    weight: 300,
    fontSize: 16,
    spacing: '0.0094rem',
  },
  body2: {
    variant: 'p',
    lineHeight: 1.43,
    weight: 300,
    fontSize: 14,
    spacing: '0.0107rem',
  },
  button: {
    variant: 'p',
    lineHeight: 2.66,
    weight: 500,
    fontSize: 10,
    spacing: '0.0286rem',
  },
  caption: {
    variant: 'p',
    lineHeight: 2.66,
    weight: 300,
    fontSize: 10,
    spacing: '0.03333rem',
  },
  overline: {
    variant: 'p',
    lineHeight: 2.66,
    weight: 400,
    fontSize: 10,
    spacing: '0.0833rem',
  },
  code: {
    variant: 'code',
    lineHeight: 1.2,
    weight: 300,
    fontSize: 14,
    spacing: '0.0833rem',
  },
  inherit: {
    variant: 'p',
    lineHeight: 'inherit',
    weight: 'inherit',
    fontSize: 'inherit',
    spacing: 'inherit',
  },
};

const createStyledComponent = (mappedVariant: MappedVariant) => styled(
  mappedVariant,
)<TextProps>`
  font-family: Roboto, Helvetica, Arial, sans-serif;
  margin: 0px 0px 0.35em;
  margin: ${({ margin }) => margin || '0px 0px 0.35em'};
  color: ${({ theme, fontColor }) => colorFromTheme(theme, fontColor)};
  line-height: ${({ variant }) => variantMapping[variant].lineHeight};
  letter-spacing: ${({ variant }) => variantMapping[variant].spacing};
  text-align: ${({ align }) => align || 'initial'};
  font-size: ${({ fontSize, variant }) =>
    fontSize || spToRem(variantMapping[variant].fontSize) + 'rem'};
  font-weight: ${({ variant, weight }) =>
    weight ? weight : variantMapping[variant].weight};
  text-transform: ${({ variant, capitalize, uppercase }) =>
    variant === 'overline'
      ? 'uppercase'
      : capitalize
      ? 'capitalize'
      : uppercase
      ? 'uppercase'
      : 'initial'};
`;

export const Text: React.FC<TextProps> = ({
  children,
  ...props
}: TextProps) => {
  props.variant = props.variant ?? 'body1';

  const mappedVariant = variantMapping[props.variant].variant as MappedVariant;

  const Component = createStyledComponent(mappedVariant);

  return (
    <Component className="_Text" {...props}>
      {children}
    </Component>
  );
};

/** @jsx jsx */
// https://material.io/design/typography/the-type-system.html#type-scale
import React, {Ref} from 'react';
import styled from '@emotion/styled';
import {css, jsx, Theme} from '@emotion/react';
import {ReactHTMLProps} from '../core/definitions';
import {getMarginAndPadding} from '../core/themeUtils';

export type TypographyRole =
  | 'display-large'
  | 'display-medium'
  | 'display-small'
  | 'headline-large'
  | 'headline-medium'
  | 'headline-small'
  | 'title-large'
  | 'title-medium'
  | 'title-small'
  | 'label-large'
  | 'label-medium'
  | 'label-small'
  | 'body-large'
  | 'body-medium'
  | 'body-small';

export interface TypographyProps
  extends ReactHTMLProps<
    HTMLHeadingElement | HTMLLabelElement | HTMLParagraphElement
  > {
  ref?: Ref<HTMLHeadingElement>;

  variant?: TypographyRole;
  fontSize?: string;
  align?: 'center' | 'inherit' | 'justify' | 'left' | 'right';
  element?: string;
  capitalize?: boolean;
  uppercase?: boolean;
  weight?: number | string;
  bold?: boolean;
  lineHeight?: string;
  fontColor?: string;
  bgColor?: string;

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

const variantElementMap = {
  display: 'h1',
  headline: 'h2',
  title: 'h3',
  label: 'label',
  body: 'p',
};

const baseStyles = (props: TypographyProps) => {
  const role = props.variant;
  return css`
    font-family: var(--md-sys-typescale-${role}-font);
    line-height: var(--md-sys-typescale-${role}-line-height);
    font-size: var(--md-sys-typescale-${role}-size);
    letter-spacing: var(--md-sys-typescale-${role}-tracking);
    font-weight: var(--md-sys-typescale-${role}-weight);
  `;
};

const customStyles = (props: TypographyProps & {theme: Theme}) => {
  const {capitalize, uppercase} = props;

  return css`
    color: ${props.fontColor ?? 'inherit'};
    background-color: ${props.bgColor ?? ''};
    line-height: ${props.lineHeight ?? ''};
    text-align: ${props.align ?? ''};
    font-size: ${props.fontSize ?? ''};
    font-weight: ${props.bold ? 'bold' : props.weight ?? ''};
    text-transform: ${capitalize ? 'capitalize' : uppercase ? 'uppercase' : ''};
    ${getMarginAndPadding(props)}
  `;
};

const createStyledComponent = (
  mappedVariant: 'h1' | 'h2' | 'h3' | 'label' | 'p',
) => styled(mappedVariant)<TypographyProps>`
  ${baseStyles}
  ${customStyles}
`;

export const Typography: React.FC<TypographyProps> = ({
  children,
  element,
  ...props
}) => {
  props.variant = props.variant ?? 'body-large';

  const Component = createStyledComponent(
    element ?? variantElementMap[props.variant.split('-')[0]],
  );

  return (
    <Component className="_Typography" {...props}>
      {children}
    </Component>
  );
};

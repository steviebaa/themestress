/** @jsx jsx */
import React, {ForwardedRef, forwardRef} from 'react';
import styled from '@emotion/styled';
import {css, jsx, Theme} from '@emotion/react';
import {getMarginAndPadding} from '../core/themeUtils';
import {BreakPoint} from '../core/definitions';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  fontColor?: string;
  bgColor?: string;
  borderColor?: string;
  elevation?: number;
  square?: boolean;
  radius?: number;
  width?: BreakPoint;
  height?: string;
  variant?: 'elevated' | 'outlined' | 'filled';

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
}

const elevatedStyles = (props: CardProps & {theme: Theme}) => {
  return css`
    color: var(--md-sys-color-on-surface);
    background-color: var(--md-sys-color-surface);
    background-image: var(--md-sys-overlay-level-${props.elevation});
    box-shadow: var(--md-sys-elevation-level-${props.elevation});

    :hover {
      box-shadow: var(--md-sys-elevation-level-2);
    }
  `;
};

const filledStyles = (props: CardProps & {theme: Theme}) => {
  return css`
    color: var(--md-sys-color-on-surface-variant);
    background-color: var(--md-sys-color-surface-variant);
  `;
};

const outlinedStyles = (props: CardProps & {theme: Theme}) => {
  return css`
    color: var(--md-sys-color-on-surface);
    background-color: var(--md-sys-color-surface);
    border: 1px solid var(--md-sys-color-outline);
  `;
};

const StyledDiv = styled.div<CardProps>`
  ${props => props.variant === 'elevated' && elevatedStyles}
  ${props => props.variant === 'filled' && filledStyles}
  ${props => props.variant === 'outlined' && outlinedStyles}
	
	margin: 4px;
  padding: 20px 16px;
  ${props => getMarginAndPadding(props)}

  color: ${({fontColor}) => fontColor ?? ''};
  border-color: ${({fontColor}) => fontColor ?? ''};
  background-color: ${({bgColor}) => bgColor};
  height: ${({height}) => height ?? ''};
  width: ${({theme, width}) => theme.breakpoints.parse(width)};
  max-width: ${({theme, width}) => theme.breakpoints.parse(width)};
  border-radius: ${({theme, radius}) =>
    `${radius === undefined ? 12 : theme.spacing.size * radius}px`};
`;

export const Card: React.FC<CardProps> = forwardRef(
  (
    {variant, elevation, ...props}: CardProps,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    if (variant === undefined) variant = 'elevated';
    if (elevation === undefined) elevation = 1;

    if (elevation < 0 || elevation > 5) {
      console.error('Paper: elevation should be between 0 and 24 inclusive.');
    }

    return (
      <StyledDiv
        ref={ref}
        className="_Paper"
        variant={variant}
        elevation={elevation}
        {...props}
      >
        {props.children}
      </StyledDiv>
    );
  },
);

import React, { ForwardedRef, forwardRef } from 'react';
import styled from '@emotion/styled';

import { Ripple } from './Ripple';
import { colorFromTheme } from '../core/themeUtils';
import { ReactHTMLProps, TColor } from '../core/definitions';

export interface ButtonProps extends ReactHTMLProps<HTMLButtonElement> {
  disableRipple?: boolean;
  variant?: 'contained' | 'outlined' | 'text';
  align?: 'left' | 'center' | 'right';
  icon?: boolean;
  noTransform?: boolean;
  fontColor?: TColor;
  bgColor?: TColor;
  borderColor?: TColor;
  marginLeft?: number;
  noElevation?: boolean;
}

const StyledButton = styled.button<ButtonProps>`
  overflow: hidden;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: ${({ align }) => (align ? align : 'center')};
  box-sizing: border-box;
  outline: 0px;
  margin: 0px;
  cursor: pointer;
  user-select: none;
  vertical-align: middle;
  appearance: none;
  text-decoration: none;
  font-family: Roboto, Helvetica, Arial, sans-serif;
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.75;
  letter-spacing: 0.02857em;
  text-transform: ${({ noTransform: t }) => (t ? 'initial' : 'uppercase')};
  padding: 6px 16px;
  border-radius: 4px;
  min-width: ${({ icon }) => (icon ? '0px' : '64px')};

  margin-left: ${({ theme, marginLeft }) =>
    marginLeft ? `${theme.spacing * marginLeft}px` : 'initial'};

  border: ${({ theme, variant: v, fontColor, borderColor }) => {
    let color = 'transparent';

    if (v === 'outlined') color = theme.palette.primary.main;
    if (v !== 'text' && fontColor) color = colorFromTheme(theme, fontColor);
    if (v === 'contained') return 'initial';
    if (borderColor) color = colorFromTheme(theme, borderColor);

    return `1px solid ${color}`;
  }};

  background-color: ${({ theme, variant: v, bgColor }) => {
    let color = 'transparent';
    if (v === 'contained') color = theme.palette.primary.main;
    if (bgColor) color = colorFromTheme(theme, bgColor);
    return color;
  }};

  color: ${({ theme, variant, fontColor }) => {
    let color = theme.palette.primary.main;
    if (variant === 'contained') color = theme.palette.primary.on;
    if (fontColor) color = colorFromTheme(theme, fontColor);

    return color;
  }};

  box-shadow: ${({ variant, noElevation }) =>
    variant === 'contained' && !noElevation
      ? `rgb(0 0 0 / 20%) 0px 3px 1px -2px, rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px`
      : 'none'};

  &:hover {
    box-shadow: ${({ variant, noElevation }) =>
      variant === 'contained' && !noElevation
        ? `rgb(0 0 0 / 20%) 0px 2px 4px -1px, rgb(0 0 0 / 14%) 0px 4px 5px 0px, rgb(0 0 0 / 12%) 0px 1px 10px 0px`
        : 'none'};

    filter: brightness(90%);
  }

  &:active {
    box-shadow: ${({ variant, noElevation }) =>
      variant === 'contained' && !noElevation
        ? `rgb(0 0 0 / 20%) 0px 5px 5px -3px, rgb(0 0 0 / 14%) 0px 8px 10px 1px, rgb(0 0 0 / 12%) 0px 3px 14px 2px`
        : 'none'};
  }
`;

export const Button: React.FC<ButtonProps> = forwardRef(
  (
    { disableRipple, children, ...props }: ButtonProps,
    ref: ForwardedRef<HTMLButtonElement>,
  ) => {
    props.variant = props.variant ? props.variant : 'text';

    return (
      <StyledButton className="_Button" ref={ref} {...props}>
        {!disableRipple && <Ripple />}
        {children}
      </StyledButton>
    );
  },
);

import React, {ForwardedRef, forwardRef, Ref} from 'react';
import styled from '@emotion/styled';
import {Ripple} from './Ripple';
import {
  // colorFromTheme,
  // onColorFromTheme,
  getMarginAndPadding,
} from '../core/themeUtils';
import {ReactHTMLProps, TColor} from '../core/definitions';

export interface ButtonProps extends ReactHTMLProps<HTMLButtonElement> {
  disableRipple?: boolean;
  variant?: 'contained' | 'outlined' | 'text';
  align?: 'left' | 'center' | 'right';
  noTransform?: boolean;
  fontColor?: TColor;
  bgColor?: TColor;
  borderColor?: TColor;
  noElevation?: boolean;

  radius?: number;

  width?: string;
  height?: string;

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

const StyledButton = styled.button<ButtonProps>`
  overflow: hidden;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: ${({align}) => (align ? align : 'center')};
  box-sizing: border-box;
  outline: 0px;
  cursor: pointer;
  user-select: none;
  vertical-align: middle;
  appearance: none;
  text-decoration: none;
  font-family: inherit;
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.2;
  letter-spacing: 0.02857em;
  text-transform: ${({noTransform}) => (noTransform ? '' : 'uppercase')};
  border-radius: ${({theme, radius}) =>
    `${theme.spacing.size * (radius || 1)}px`};
  ${props => getMarginAndPadding(props)}
  padding: ${({theme, padding}) =>
    padding !== undefined ? `${theme.spacing.size * padding}px` : '10px 16px'};
  width: ${({width}) => width || ''};
  height: ${({height}) => height || ''};
  border: ${({theme, variant: v, fontColor, borderColor}) => {
    let color = 'transparent';

    if (v === 'outlined') color = theme.palette.primary.main.hex;
    // if (v !== 'text' && fontColor) color = colorFromTheme(theme, fontColor);
    if (v === 'contained') return 'initial';
    // if (borderColor) color = colorFromTheme(theme, borderColor);

    return `1px solid ${color}`;
  }};
  background-color: ${({theme, variant: v, bgColor}) => {
    let color = 'transparent';
    // if (v === 'contained') color = theme.palette.primary.main;
    // if (bgColor) color = colorFromTheme(theme, bgColor);
    return color;
  }};
  color: ${({theme, variant: v, fontColor, bgColor}) => {
    let color = theme.palette.primary.main.hex;
    if (v === 'contained') color = theme.palette.primary.main.on.hex;
    // if (bgColor && !fontColor) color = onColorFromTheme(theme, bgColor);
    // if (fontColor) color = colorFromTheme(theme, fontColor);
    return color;
  }};
  box-shadow: ${({variant, noElevation}) =>
    variant === 'contained' && !noElevation
      ? `rgb(0 0 0 / 20%) 0px 3px 1px -2px, rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px`
      : 'none'};

  &:hover {
    box-shadow: ${({variant, noElevation}) =>
      variant === 'contained' && !noElevation
        ? `rgb(0 0 0 / 20%) 0px 2px 4px -1px, rgb(0 0 0 / 14%) 0px 4px 5px 0px, rgb(0 0 0 / 12%) 0px 1px 10px 0px`
        : 'none'};
    filter: brightness(90%);
  }
  &:active {
    box-shadow: ${({variant, noElevation}) =>
      variant === 'contained' && !noElevation
        ? `rgb(0 0 0 / 20%) 0px 5px 5px -3px, rgb(0 0 0 / 14%) 0px 8px 10px 1px, rgb(0 0 0 / 12%) 0px 3px 14px 2px`
        : 'none'};
  }
  & > span {
    line-height: 1.2;
  }
`;

export const Button: React.FC<ButtonProps> = forwardRef(
  (
    {disableRipple, children, ...props}: ButtonProps,
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

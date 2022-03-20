import React, {forwardRef} from 'react';
import styled from '@emotion/styled';
import {css, Theme} from '@emotion/react';
import {Ripple} from './Ripple';
import {getMarginAndPadding, ReactHTMLProps} from '../core';
import {ColorUtility} from '../core/classes/base/ColorUtility';
import {createStateLayer} from '../core/md/color';

export interface OutlinedButtonProps extends ReactHTMLProps<HTMLButtonElement> {
  disableRipple?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  disabled?: boolean;
  elevation?: number | string;
  align?: 'left' | 'center' | 'right';
  fontColor?: string;
  bgColor?: string;
  borderColor?: string;
  borderWidth?: string;
  radius?: string;
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

const baseStyles = ({
  theme,
  startIcon,
  endIcon,
  align,
}: OutlinedButtonProps & {theme: Theme}) => {
  return css`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border: 1px solid var(--sys-color-outline);
    position: relative;
    overflow: hidden;
    min-height: 40px;
    border-radius: 9999px;
    padding-left: ${startIcon ? '16px' : '24px'};
    padding-right: ${endIcon ? '16px' : '24px'};
    background-color: var(--sys-color-surface);

    * {
      cursor: pointer;
    }

    ._Ripple {
      > span {
        background-color: ${ColorUtility.hex.set.opacity(
          theme.palette.neutral.surface.on.hex,
          ColorUtility.fractionToHex(0.12),
        )};
      }
    }

    > span._OutlinedButton-StartIcon {
      padding-right: 8px;
      display: flex;
      > svg {
        fill: var(--sys-color-primary);
        height: 24px;
        width: 24px;
      }
    }

    > span._OutlinedButton-EndIcon {
      padding-left: 8px;
      display: flex;
      > svg {
        fill: var(--sys-color-primary);
        height: 24px;
        width: 24px;
      }
    }

    > span._OutlinedButton-Label {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: ${align ?? 'center'};
      flex-grow: 1;
      color: var(--sys-color-primary);
      font-family: var(--sys-typescale-label-large-font);
      font-weight: var(--sys-typescale-label-large-weight);
      font-size: var(--sys-typescale-label-large-size);
      line-height: var(--sys-typescale-label-large-line-height);
      letter-spacing: var(--sys-typescale-label-large-tracking);
    }
  `;
};

const disabledStyle = ({theme}: OutlinedButtonProps & {theme: Theme}) => {
  const color = ColorUtility.hex.set.opacity(
    theme.palette.neutral.surface.on.hex,
    ColorUtility.fractionToHex(0.38),
  );

  return css`
    box-shadow: none;
    border-color: ${ColorUtility.hex.set.opacity(
      theme.palette.neutral.surface.on.hex,
      ColorUtility.fractionToHex(0.12),
    )};

    > span._OutlinedButton-StartIcon,
    > span._OutlinedButton-EndIcon {
      color: ${color};
      > svg {
        fill: ${color};
      }
    }

    > span._OutlinedButton-Label {
      color: ${color};
    }
  `;
};
const hoveredStyle = ({theme}: OutlinedButtonProps & {theme: Theme}) => {
  return css`
    border-color: var(--sys-color-outline);
    background-image: ${createStateLayer(
      theme.palette.primary.main,
      theme.states.hover.opacity,
    )};
  `;
};
const focusedStyle = ({theme}: OutlinedButtonProps & {theme: Theme}) => {
  return css`
    outline: 2px solid var(--sys-color-outline);
    border-color: var(--sys-color-primary);
    outline-offset: 2px;
    background-image: ${createStateLayer(
      theme.palette.primary.main,
      theme.states.focus.opacity,
    )};
  `;
};
const activeStyle = ({theme}: OutlinedButtonProps & {theme: Theme}) => {
  return css`
    border-color: var(--sys-color-outline);
    background-image: ${createStateLayer(
      theme.palette.primary.main,
      theme.states.press.opacity,
    )};
  `;
};

const StyledButton = styled.button<OutlinedButtonProps>`
  ${baseStyles}

  :not(:disabled):focus-visible {
    ${focusedStyle}
  }

  @media (hover: hover) {
    :not(:disabled):hover {
      ${hoveredStyle}
    }
  }

  :not(:disabled):active {
    ${activeStyle}
  }

  :disabled {
    ${disabledStyle}
  }

  width: ${({width}) => width ?? ''};
  height: ${({height}) => height ?? ''};
  text-align: ${({align}) => align ?? ''};
  border-radius: ${({radius}) => radius ?? ''};
  background-color: ${({bgColor}) => bgColor ?? ''};
  border-color: ${({borderColor}) => borderColor ?? ''};
  border-width: ${({borderWidth}) => borderWidth ?? ''};
  box-shadow: ${({elevation}) =>
    `var(--sys-elevation-level-${elevation ?? 0})`};

  > span._OutlinedButton-Label {
    color: ${({fontColor}) => fontColor ?? ''};
  }

  ${props => getMarginAndPadding(props)};
`;

export const OutlinedButton: React.FC<OutlinedButtonProps> = forwardRef(
  ({children, disableRipple, ...props}, ref) => {
    return (
      <StyledButton
        ref={ref}
        disabled={props.disabled}
        className="_OutlinedButton"
        {...props}
      >
        {!props.disabled && !disableRipple && <Ripple />}

        {props.startIcon && (
          <span className="_OutlinedButton-StartIcon">{props.startIcon}</span>
        )}

        <span className="_OutlinedButton-Label">{children}</span>

        {props.endIcon && (
          <span className="_OutlinedButton-EndIcon">{props.endIcon}</span>
        )}
      </StyledButton>
    );
  },
);

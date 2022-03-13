/** @jsx jsx */
import React, {forwardRef} from 'react';
import styled from '@emotion/styled';
import {css, jsx, Theme} from '@emotion/react';
import {Ripple} from './Ripple';
import {getMarginAndPadding, ReactHTMLProps} from '../core';
import {ColorUtility} from '../core/classes/base/ColorUtility';
import {createStateLayer} from '../core/md/color';

export interface TextButtonProps extends ReactHTMLProps<HTMLButtonElement> {
  disableRipple?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  disabled?: boolean;
  align?: 'left' | 'center' | 'right';
  fontColor?: string;
  bgColor?: string;
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
}: TextButtonProps & {theme: Theme}) => {
  return css`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border: none;
    position: relative;
    overflow: hidden;
    min-height: 40px;
    border-radius: 9999px;
    padding-left: ${startIcon || !endIcon ? '12px' : '16px'};
    padding-right: ${!startIcon || endIcon ? '12px' : '16px'};
    background-color: transparent;

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

    > span._TextButton-StartIcon {
      padding-right: 8px;
      display: flex;
      > svg {
        fill: var(--sys-color-primary);
        height: 24px;
        width: 24px;
      }
    }

    > span._TextButton-EndIcon {
      padding-left: 8px;
      display: flex;
      > svg {
        fill: var(--sys-color-primary);
        height: 24px;
        width: 24px;
      }
    }

    > span._TextButton-Label {
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

const disabledStyle = ({theme}: TextButtonProps & {theme: Theme}) => {
  const color = ColorUtility.hex.set.opacity(
    theme.palette.neutral.surface.on.hex,
    ColorUtility.fractionToHex(0.38),
  );

  return css`
    > span._TextButton-StartIcon,
    > span._TextButton-EndIcon {
      color: ${color};
      > svg {
        fill: ${color};
      }
    }

    > span._TextButton-Label {
      color: ${color};
    }
  `;
};
const hoveredStyle = ({theme}: TextButtonProps & {theme: Theme}) => {
  return css`
    background-image: ${createStateLayer(
      theme.palette.primary.main.on,
      theme.states.hover.opacity,
    )};
  `;
};
const focusedStyle = ({theme}: TextButtonProps & {theme: Theme}) => {
  return css`
    outline: 2px solid var(--sys-color-outline);
    outline-offset: 2px;
    background-image: ${createStateLayer(
      theme.palette.primary.main.on,
      theme.states.focus.opacity,
    )};
  `;
};
const activeStyle = ({theme}: TextButtonProps & {theme: Theme}) => {
  return css`
    transform: translateY(1px);
    background-image: ${createStateLayer(
      theme.palette.primary.main.on,
      theme.states.press.opacity,
    )};
  `;
};

const StyledButton = styled.button<TextButtonProps>`
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

  > span._TextButton-Label {
    color: ${({fontColor}) => fontColor ?? ''};
  }

  ${props => getMarginAndPadding(props)};
`;

export const TextButton: React.FC<TextButtonProps> = forwardRef(
  ({children, ...props}, ref) => {
    return (
      <StyledButton
        ref={ref}
        disabled={props.disabled}
        className="_TextButton"
        {...props}
      >
        {!props.disabled && <Ripple />}

        {props.startIcon && (
          <span className="_TextButton-StartIcon">{props.startIcon}</span>
        )}

        <span className="_TextButton-Label">{children}</span>

        {props.endIcon && (
          <span className="_TextButton-EndIcon">{props.endIcon}</span>
        )}
      </StyledButton>
    );
  },
);

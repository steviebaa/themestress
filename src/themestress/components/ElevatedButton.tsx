import React, {forwardRef} from 'react';
import styled from '@emotion/styled';
import {css, Theme} from '@emotion/react';
import {Ripple} from './Ripple';
import {getMarginAndPadding, ReactHTMLProps} from '../core';
import {ColorUtility} from '../core/classes/base/ColorUtility';
import {createStateLayer} from '../core/md/color';

export interface ElevatedButtonProps extends ReactHTMLProps<HTMLButtonElement> {
  disableRipple?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  disabled?: boolean;
  elevation?: number | string;
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
  align,
}: ElevatedButtonProps & {theme: Theme}) => {
  return css`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border: none;
    position: relative;
    overflow: hidden;
    min-height: 40px;
    border-radius: 9999px;
    padding-left: ${startIcon ? '16px' : '24px'};
    padding-right: ${endIcon ? '16px' : '24px'};
    background-color: var(--sys-color-surface);
    box-shadow: var(--sys-elevation-level-1);

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

    > span._ElevatedButton-StartIcon {
      padding-right: 8px;
      display: flex;
      > svg {
        fill: var(--sys-color-primary);
        height: 24px;
        width: 24px;
      }
    }

    > span._ElevatedButton-EndIcon {
      padding-left: 8px;
      display: flex;
      > svg {
        fill: var(--sys-color-primary);
        height: 24px;
        width: 24px;
      }
    }

    > span._ElevatedButton-Label {
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

const disabledStyle = ({theme}: ElevatedButtonProps & {theme: Theme}) => {
  const color = ColorUtility.hex.set.opacity(
    theme.palette.neutral.surface.on.hex,
    ColorUtility.fractionToHex(0.38),
  );

  return css`
    box-shadow: none;
    background-color: ${ColorUtility.hex.set.opacity(
      theme.palette.neutral.surface.on.hex,
      ColorUtility.fractionToHex(0.12),
    )};

    > span._ElevatedButton-StartIcon,
    > span._ElevatedButton-EndIcon {
      color: ${color};
      > svg {
        fill: ${color};
      }
    }

    > span._ElevatedButton-Label {
      color: ${color};
    }
  `;
};
const hoveredStyle = ({theme}: ElevatedButtonProps & {theme: Theme}) => {
  return css`
    box-shadow: var(--sys-elevation-level-2);
    background-image: ${createStateLayer(
      theme.palette.primary.main,
      theme.states.hover.opacity,
    )};
  `;
};
const focusedStyle = ({theme}: ElevatedButtonProps & {theme: Theme}) => {
  return css`
    outline: 2px solid var(--sys-color-outline);
    outline-offset: 2px;
    box-shadow: var(--sys-elevation-level-1);
    background-image: ${createStateLayer(
      theme.palette.primary.main,
      theme.states.focus.opacity,
    )};
  `;
};
const activeStyle = ({theme}: ElevatedButtonProps & {theme: Theme}) => {
  return css`
    transform: translateY(1px);
    box-shadow: var(--sys-elevation-level-1);
    background-image: ${createStateLayer(
      theme.palette.primary.main,
      theme.states.press.opacity,
    )};
  `;
};

const StyledButton = styled.button<ElevatedButtonProps>`
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
  box-shadow: ${({elevation}) => `var(--sys-elevation-level-${elevation})`};
  background-color: ${({bgColor}) => bgColor ?? ''};

  > span._ElevatedButton-Label {
    color: ${({fontColor}) => fontColor ?? ''};
  }

  ${props => getMarginAndPadding(props)};
`;

export const ElevatedButton = forwardRef<
  HTMLButtonElement,
  ElevatedButtonProps
>(({children, disableRipple, ...props}, ref) => {
  props.elevation = props.elevation === undefined ? 1 : props.elevation;

  return (
    <StyledButton
      ref={ref}
      disabled={props.disabled}
      className="_ElevatedButton"
      {...props}
    >
      {!props.disabled && !disableRipple && <Ripple />}

      {props.startIcon && (
        <span className="_ElevatedButton-StartIcon">{props.startIcon}</span>
      )}

      <span className="_ElevatedButton-Label">{children}</span>

      {props.endIcon && (
        <span className="_ElevatedButton-EndIcon">{props.endIcon}</span>
      )}
    </StyledButton>
  );
});

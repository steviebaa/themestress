import React, {forwardRef} from 'react';
import styled from '@emotion/styled';
import {css, Theme} from '@emotion/react';
import {Ripple} from './Ripple';
import {getMarginAndPadding, ReactHTMLProps} from '../core';
import {ColorUtility} from '../core/classes/base/ColorUtility';
import {createStateLayer} from '../core/md/color';

export interface FABProps extends ReactHTMLProps<HTMLButtonElement> {
  disableRipple?: boolean;
  icon?: React.ReactNode;
  variant?: 'surface' | 'primary' | 'secondary' | 'tertiary';
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  /** If true, the position will be fixed. Defaults to absolute. */
  fixed?: boolean;
  small?: boolean;
  large?: boolean;
  open?: boolean;
  lowered?: boolean;
  disabled?: boolean;
  elevation?: number | string;
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
  position,
  variant,
  large,
  small,
  lowered,
  fixed,
}: FABProps & {theme: Theme}) => {
  let color = 'var(--sys-color-on-primary-container)';
  let bgColor = 'var(--sys-color-primary-container)';

  if (variant === 'secondary') {
    color = 'var(--sys-color-on-secondary-container)';
    bgColor = 'var(--sys-color-secondary-container)';
  } else if (variant === 'tertiary') {
    color = 'var(--sys-color-on-tertiary-container)';
    bgColor = 'var(--sys-color-tertiary-container)';
  } else if (variant === 'surface') {
    color = 'var(--sys-color-primary)';
    bgColor = 'var(--sys-color-surface)';
  }

  let size = '56px';
  let margin = '16px';
  let padding = '16px';
  let radius = '16px';
  let iconSize = '24px';
  let top = '';
  let right = '';
  let bottom = '';
  let left = '';

  if (position === 'top-left') {
    top = '16px';
    left = '16px';
  } else if (position === 'top-right') {
    top = '16px';
    right = '16px';
  } else if (position === 'bottom-left') {
    left = '16px';
    bottom = '16px';
  } else if (position === 'bottom-right') {
    right = '16px';
    bottom = '16px';
  }

  if (small) {
    size = '40px';
    margin = '12px';
    padding = '8px';
    radius = '12px';
    iconSize = '24px';
  } else if (large) {
    size = '96px';
    margin = '16px';
    padding = '30px';
    radius = '28px';
    iconSize = '36px';
  }

  return css`
    position: ${(fixed && 'fixed') ?? 'absolute'};
    z-index: var(--sys-z-index-fab);
    top: ${top};
    right: ${right};
    bottom: ${bottom};
    left: ${left};
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border: none;
    overflow: hidden;
    min-height: ${size};
    min-width: ${size};
    border-radius: ${radius};
    margin: ${margin};
    padding: ${padding};
    box-shadow: var(--sys-elevation-level-${lowered ? 1 : 3});
    background-color: ${bgColor};

    ._Ripple {
      > span {
        background-color: ${ColorUtility.hex.set.opacity(
          theme.palette.neutral.surface.on.hex,
          ColorUtility.fractionToHex(0.12),
        )};
      }
    }

    > span._FAB-icon {
      display: flex;
      > svg {
        height: ${iconSize};
        width: ${iconSize};
        fill: ${color};
      }
    }

    > span._FAB-label {
      padding-left: 8px;
      flex-grow: 1;
      color: ${color};
      font-family: var(--sys-typescale-label-large-font);
      font-weight: var(--sys-typescale-label-large-weight);
      font-size: var(--sys-typescale-label-large-size);
      line-height: var(--sys-typescale-label-large-line-height);
      letter-spacing: var(--sys-typescale-label-large-tracking);
    }
  `;
};
const disabledStyle = ({theme, lowered}: FABProps & {theme: Theme}) => {
  return css`
    box-shadow: var(--sys-elevation-level-${lowered ? 1 : 3});
    background-color: ${ColorUtility.hex.set.opacity(
      theme.palette.neutral.surface.on.hex,
      ColorUtility.fractionToHex(0.12),
    )};

    > span._FAB-icon {
      > svg {
        fill: ${ColorUtility.hex.set.opacity(
          theme.palette.neutral.surface.on.hex,
          ColorUtility.fractionToHex(0.38),
        )};
      }
    }

    > span._FAB-label {
      color: ${ColorUtility.hex.set.opacity(
        theme.palette.neutral.surface.on.hex,
        ColorUtility.fractionToHex(0.38),
      )};
    }
  `;
};
const hoveredStyle = ({theme, lowered, variant}: FABProps & {theme: Theme}) => {
  let stateColor = theme.palette.primary.container.on;

  if (variant === 'secondary') {
    stateColor = theme.palette.secondary.container.on;
  } else if (variant === 'tertiary') {
    stateColor = theme.palette.tertiary.container.on;
  } else if (variant === 'surface') {
    stateColor = theme.palette.primary.main;
  }

  return css`
    box-shadow: var(--sys-elevation-level-${lowered ? 2 : 4});
    background-image: ${createStateLayer(
      stateColor,
      theme.states.hover.opacity,
    )};
  `;
};
const focusedStyle = ({theme, lowered, variant}: FABProps & {theme: Theme}) => {
  let stateColor = theme.palette.primary.container.on;

  if (variant === 'secondary') {
    stateColor = theme.palette.secondary.container.on;
  } else if (variant === 'tertiary') {
    stateColor = theme.palette.tertiary.container.on;
  } else if (variant === 'surface') {
    stateColor = theme.palette.primary.main;
  }

  return css`
    outline: 2px solid var(--sys-color-outline);
    box-shadow: var(--sys-elevation-level-${lowered ? 1 : 3});
    background-image: ${createStateLayer(
      stateColor,
      theme.states.focus.opacity,
    )};
  `;
};
const activeStyle = ({theme, lowered, variant}: FABProps & {theme: Theme}) => {
  let stateColor = theme.palette.primary.container.on;

  if (variant === 'secondary') {
    stateColor = theme.palette.secondary.container.on;
  } else if (variant === 'tertiary') {
    stateColor = theme.palette.tertiary.container.on;
  } else if (variant === 'surface') {
    stateColor = theme.palette.primary.main;
  }

  return css`
    transform: translateY(1px);
    box-shadow: var(--sys-elevation-level-${lowered ? 1 : 3});
    background-image: ${createStateLayer(
      stateColor,
      theme.states.press.opacity,
    )};
  `;
};

const StyledButton = styled.button<FABProps>`
  ${baseStyles}

  :not(:disabled):focus-visible {
    ${focusedStyle}
  }

  :not(:disabled):hover {
    ${hoveredStyle}
  }

  :not(:disabled):active {
    ${activeStyle}
  }

  :disabled {
    ${disabledStyle}
  }

  width: ${({width}) => width ?? ''};
  height: ${({height}) => height ?? ''};
  border-radius: ${({radius}) => radius ?? ''};
  box-shadow: ${({elevation}) =>
    elevation !== undefined && `var(--sys-elevation-level-${elevation})`};
  background-color: ${({bgColor}) => bgColor ?? ''};

  > span._FAB-label {
    color: ${({fontColor}) => fontColor ?? ''};
  }

  ${props => getMarginAndPadding(props)};
`;

export const FAB = forwardRef<HTMLButtonElement, FABProps>(
  ({...props}, ref) => {
    props.position = props.position ?? 'bottom-right';

    return (
      <StyledButton
        ref={ref}
        disabled={props.disabled}
        className="_FAB"
        {...props}
      >
        {!props.disabled && <Ripple />}

        {props.icon && <span className="_FAB-icon">{props.icon}</span>}

        {props.children && <span className="_FAB-label">{props.children}</span>}
      </StyledButton>
    );
  },
);

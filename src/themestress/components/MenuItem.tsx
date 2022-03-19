import React, {MutableRefObject} from 'react';
import styled from '@emotion/styled';
import {css, Theme} from '@emotion/react';
import {ReactHTMLProps} from '../core/definitions';
import {getMarginAndPadding} from '../core/themeUtils';
import {createStateLayer} from '../core/md/color';
import {TextButton, TextButtonProps} from './TextButton';
import {Typography} from './Typography';

export interface MenuItemProps
  extends TextButtonProps,
    ReactHTMLProps<HTMLButtonElement> {
  children: React.ReactNode;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  /** Used for the Select component. Where the value passed to the Select will try to match this value. */
  value?: string | number;
}

const baseStyles = () => {
  return css`
    cursor: pointer;
    line-height: 1.5;
    height: 48px;
    min-width: 112px;
    max-width: 280px;
    overflow: hidden;
    font-weight: 400;
    font-size: 1rem;
    border-radius: 0px;
    text-align: left;
    text-transform: none;
    justify-content: left;

    > span._TextButton-start-icon {
      padding-right: 12px;
      color: var(--sys-color-on-surface-variant);
      > svg {
        fill: var(--sys-color-on-surface-variant);
      }
    }

    > span._TextButton-end-icon {
      padding-left: 12px;
      color: var(--sys-color-on-surface-variant);
      > svg {
        fill: var(--sys-color-on-surface-variant);
      }
    }

    > span._TextButton-label {
      color: var(--sys-color-on-surface);
    }
  `;
};
const hoveredStyle = ({theme}: {theme: Theme}) => {
  return css`
    background-image: ${createStateLayer(
      theme.palette.neutral.surface.on,
      theme.states.hover.opacity,
    )};
  `;
};
const focusedStyle = ({theme}: {theme: Theme}) => {
  return css`
    outline-offset: 0px;
    background-image: ${createStateLayer(
      theme.palette.neutral.surface.on,
      theme.states.focus.opacity,
    )};
  `;
};
const activeStyle = ({theme}: {theme: Theme}) => {
  return css`
    transform: none;
    background-image: ${createStateLayer(
      theme.palette.neutral.surface.on,
      theme.states.press.opacity,
    )};
  `;
};
const StyledMenuItem = styled(TextButton)<{
  padStart?: boolean;
  padEnd?: boolean;
}>`
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

  ${props => getMarginAndPadding(props)}
`;

const StyledLabel = styled(Typography)<{padStart?: boolean; padEnd?: boolean}>`
  padding-left: ${({padStart}) => padStart && '36px'};
  padding-right: ${({padEnd}) => padEnd && '36px'};
  height: 100%;
  display: flex;
  align-items: center;
`;

export const MenuItem: React.FC<MenuItemProps> = React.forwardRef(
  (
    {startIcon, endIcon, children, ...props}: MenuItemProps,
    ref: MutableRefObject<HTMLButtonElement>,
  ) => {
    return (
      <StyledMenuItem
        ref={ref}
        className="_MenuItem"
        startIcon={startIcon}
        endIcon={endIcon}
        {...props}
      >
        <StyledLabel
          variant="label-large"
          padStart={props['padStart']}
          padEnd={props['padEnd']}
        >
          {children}
        </StyledLabel>
      </StyledMenuItem>
    );
  },
);

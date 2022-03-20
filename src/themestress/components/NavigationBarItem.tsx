import React, {ForwardedRef, forwardRef} from 'react';
import styled from '@emotion/styled';
import {css, Theme} from '@emotion/react';
import {ReactHTMLButtonProps} from '../core/definitions';
import {Typography} from './Typography';
import {createStateLayer} from '../core/md/color';

export interface NavigationBarItemProps extends ReactHTMLButtonProps {
  __click?: (ref: ForwardedRef<HTMLButtonElement>) => void;
  __selected?: boolean;
  children?: React.ReactNode;
  label?: string;
}

const baseStyles = ({__selected}: NavigationBarItemProps & {theme: Theme}) => {
  return css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    flex-grow: 1;
    padding: 12px 0px 16px 0px;
    border: none;
    background-color: var(--sys-color-surface);
    user-select: none;

    & > div {
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      justify-content: center;
      font-size: 0.9375rem;
      font-weight: 400;
      line-height: 1.75;
      letter-spacing: 0.02857em;
      width: 64px;
      height: 32px;
      padding: 4px;
      border-radius: 9999px;
      user-select: none;

      fill: ${__selected
        ? 'var(--sys-color-on-secondary-container)'
        : 'var(--sys-color-on-surface-variant)'};

      background-color: ${__selected
        ? 'var(--sys-color-secondary-container)'
        : 'transparent'};
    }

    & > span {
      width: 100%;
      text-align: center;
      margin-top: 4px;
      user-select: none;

      color: ${__selected
        ? 'var(--sys-color-on-surface)'
        : 'var(--sys-color-on-surface-variant)'};
    }
  `;
};

const hoveredStyle = ({
  theme,
  __selected,
}: NavigationBarItemProps & {theme: Theme}) => {
  return css`
    background-image: ${createStateLayer(
      __selected
        ? theme.palette.neutral.surface.on
        : theme.palette.neutralVariant.surface.on,
      theme.states.hover.opacity,
    )};
  `;
};
const focusedStyle = ({
  theme,
  __selected,
}: NavigationBarItemProps & {theme: Theme}) => {
  return css`
    outline: 2px solid var(--sys-color-outline);
    outline-offset: 2px;

    background-image: ${createStateLayer(
      __selected
        ? theme.palette.neutral.surface.on
        : theme.palette.neutralVariant.surface.on,
      theme.states.focus.opacity,
    )};
  `;
};
const activeStyle = ({
  theme,
  __selected,
}: NavigationBarItemProps & {theme: Theme}) => {
  return css`
    background-image: ${createStateLayer(
      __selected
        ? theme.palette.neutral.surface.on
        : theme.palette.neutralVariant.surface.on,
      theme.states.press.opacity,
    )};
  `;
};

const StyledItem = styled.button<NavigationBarItemProps>`
  ${baseStyles};

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
`;

export const NavigationBarItem: React.FC<NavigationBarItemProps> = forwardRef(
  (
    {onClick, __click, ...props}: NavigationBarItemProps,
    ref: ForwardedRef<HTMLButtonElement>,
  ) => {
    return (
      <StyledItem
        className="_NavigationBarItem"
        onClick={e => {
          onClick && onClick(e);
          __click(ref);
        }}
        __selected={props.__selected}
        ref={ref}
        {...props}
      >
        <div className="_NavigationBarItem-Icon">{props.children}</div>

        {props.label && (
          <Typography
            className="_NavigationBarItem-Label"
            element="span"
            variant="label-medium"
          >
            {props.label}
          </Typography>
        )}
      </StyledItem>
    );
  },
);

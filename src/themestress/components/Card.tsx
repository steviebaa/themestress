/** @jsx jsx */
import React, {ForwardedRef, forwardRef, useState} from 'react';
import styled from '@emotion/styled';
import {css, jsx, Theme} from '@emotion/react';
import {getMarginAndPadding} from '../core/themeUtils';
import {BreakPoint} from '../core/definitions';
import {createStateLayer} from '@themestress/core/md/color';

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

const elevatedStyles = ({theme, elevation}: CardProps & {theme: Theme}) => {
  return css`
    color: var(--sys-color-on-surface);
    background-color: var(--sys-color-surface);
    background-image: var(--sys-overlay-level-${elevation});
    box-shadow: var(--sys-elevation-level-${elevation});

    :not(:disabled):focus-visible {
      outline: 2px solid var(--sys-color-outline);
      outline-offset: 2px;
      box-shadow: var(--sys-elevation-level-1);
      background-image: ${createStateLayer(
        theme.palette.neutral.surface.on,
        theme.states.focus.opacity,
      )};
    }

    :not(:disabled):hover {
      box-shadow: var(--sys-elevation-level-2);
      background-image: ${createStateLayer(
        theme.palette.neutral.surface.on,
        theme.states.hover.opacity,
      )};
    }

    :not(:disabled):active {
      transform: translateY(1px);
      box-shadow: var(--sys-elevation-level-1);
      background-image: ${createStateLayer(
        theme.palette.neutral.surface.on,
        theme.states.press.opacity,
      )};
    }
  `;
};

const filledStyles = ({theme, elevation}: CardProps & {theme: Theme}) => {
  return css`
    color: var(--sys-color-on-surface);
    background-color: var(--sys-color-surface-variant);
    background-image: var(--sys-overlay-level-${elevation});

    :not(:disabled):focus-visible {
      outline: 2px solid var(--sys-color-outline);
      outline-offset: 2px;
      box-shadow: var(--sys-elevation-level-0);
      background-image: ${createStateLayer(
        theme.palette.neutral.surface.on,
        theme.states.focus.opacity,
      )};
    }

    :not(:disabled):hover {
      box-shadow: var(--sys-elevation-level-1);
      background-image: ${createStateLayer(
        theme.palette.neutral.surface.on,
        theme.states.hover.opacity,
      )};
    }

    :not(:disabled):active {
      transform: translateY(1px);
      box-shadow: var(--sys-elevation-level-0);
      background-image: ${createStateLayer(
        theme.palette.neutral.surface.on,
        theme.states.press.opacity,
      )};
    }
  `;
};

const outlinedStyles = ({theme, elevation}: CardProps & {theme: Theme}) => {
  return css`
    color: var(--sys-color-on-surface);
    background-color: var(--sys-color-surface);
    border: 1px solid var(--sys-color-outline);

    background-image: var(--sys-overlay-level-${elevation});

    :not(:disabled):focus-visible {
      outline: 2px solid var(--sys-color-outline);
      outline-offset: 2px;
      box-shadow: var(--sys-elevation-level-0);
      background-image: ${createStateLayer(
        theme.palette.neutral.surface.on,
        theme.states.focus.opacity,
      )};
    }

    :not(:disabled):hover {
      box-shadow: var(--sys-elevation-level-0);
      background-image: ${createStateLayer(
        theme.palette.neutral.surface.on,
        theme.states.hover.opacity,
      )};
    }

    :not(:disabled):active {
      box-shadow: var(--sys-elevation-level-0);
      background-image: ${createStateLayer(
        theme.palette.neutral.surface.on,
        theme.states.press.opacity,
      )};
    }
  `;
};

const draggingStyles = ({theme}: {theme: Theme}) => {
  return css`
    box-shadow: var(--sys-elevation-level-3);
    background-image: ${createStateLayer(
      theme.palette.neutral.surface.on,
      theme.states.drag.opacity,
    )};
  `;
};

const StyledDiv = styled.div<CardProps & {isDragging: boolean}>`
  ${props => props.variant === 'elevated' && elevatedStyles}
  ${props => props.variant === 'filled' && filledStyles}
  ${props => props.variant === 'outlined' && outlinedStyles}
  ${props => props.isDragging && draggingStyles}
  
  margin: 4px;
  padding: 16px;
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
    const [isDragging, setIsDragging] = useState(false);
    const handleDrag = (dragging: boolean) => setIsDragging(dragging);

    if (variant === undefined) variant = 'filled';
    if (elevation === undefined) elevation = 1;

    if (elevation < 0 || elevation > 5) {
      console.error('Card: elevation should be between 0 and 5 inclusive.');
    }

    return (
      <StyledDiv
        ref={ref}
        className="_Card"
        variant={variant}
        elevation={elevation}
        isDragging={isDragging}
        onDragStart={e => {
          handleDrag(true);
          props.onDragStart && props.onDragStart(e);
        }}
        onDragEnd={e => {
          handleDrag(false);
          props.onDragStart && props.onDragStart(e);
        }}
        {...props}
      >
        {props.children}
      </StyledDiv>
    );
  },
);

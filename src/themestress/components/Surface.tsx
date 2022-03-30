import React, {ForwardedRef, forwardRef} from 'react';
import styled from '@emotion/styled';
import {css} from '@emotion/react';
import {getMarginAndPadding} from '../core/themeUtils';
import {BreakPoint, ReactHTMLProps} from '../core/definitions';

export interface SurfaceProps extends ReactHTMLProps<HTMLDivElement> {
  children?: React.ReactNode;
  fontColor?: string;
  bgColor?: string;
  borderColor?: string;
  elevation?: number;
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

const elevatedStyles = (props: SurfaceProps) => {
  return css`
    color: var(--sys-color-on-surface);
    background-color: ${props.bgColor ?? 'var(--sys-color-surface)'};
    background-image: var(--sys-overlay-level-${props.elevation});
    box-shadow: var(--sys-elevation-level-${props.elevation});
  `;
};

const filledStyles = (props: SurfaceProps) => {
  return css`
    color: var(--sys-color-on-surface-variant);
    background-color: ${props.bgColor ?? 'var(--sys-color-surface-variant)'};
  `;
};

const outlinedStyles = (props: SurfaceProps) => {
  return css`
    color: var(--sys-color-on-surface);
    background-color: ${props.bgColor ?? 'var(--sys-color-surface)'};
    border: 1px solid var(--sys-color-outline);
  `;
};

/* background-color: ${({bgColor}) => bgColor}; */
const StyledDiv = styled.div<SurfaceProps>`
  ${props => getMarginAndPadding(props)}
  ${props => props.variant === 'elevated' && elevatedStyles}
  ${props => props.variant === 'filled' && filledStyles}
  ${props => props.variant === 'outlined' && outlinedStyles}
	
	color: ${({fontColor}) => fontColor ?? ''};
  border-color: ${({fontColor}) => fontColor ?? ''};
  height: ${({height}) => height ?? ''};
  width: ${({theme, width}) => theme.breakpoints.parse(width)};
  max-width: ${({theme, width}) => theme.breakpoints.parse(width)};
  border-radius: ${({theme, radius}) =>
    `${radius === undefined ? 0 : theme.spacing.size * radius}px`};
`;

export const Surface: React.FC<SurfaceProps> = forwardRef(
  ({children, ...props}: SurfaceProps, ref: ForwardedRef<HTMLDivElement>) => {
    if (props.variant === undefined) props.variant = 'filled';
    if (props.elevation === undefined) props.elevation = 1;

    if (props.elevation < 0 || props.elevation > 5) {
      console.error('Surface: elevation should be between 0 and 5 inclusive.');
    }

    return (
      <StyledDiv ref={ref} className="_Surface" {...props}>
        {children}
      </StyledDiv>
    );
  },
);

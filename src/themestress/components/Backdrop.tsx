import React, {ForwardedRef, forwardRef} from 'react';
import styled from '@emotion/styled';
import {ReactHTMLProps} from '../core/definitions';
import {getMarginAndPadding} from '../core/themeUtils';

export interface BackdropProps extends ReactHTMLProps<HTMLDivElement> {
  open: boolean;
  onClick?: (e?: React.MouseEvent) => void;
  zIndex?: number;
  fontColor?: string;
  bgColor?: string;
  children?: React.ReactNode;

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

const StyledBackdrop = styled.div<BackdropProps>`
  ${props => getMarginAndPadding(props)}
  position: fixed;
  box-sizing: border-box;
  left: 0px;
  top: 0px;
  width: 100vw;
  height: 100vh;
  z-index: ${({zIndex}) => zIndex ?? 'var(--sys-z-index-backdrop)'};
  color: ${({fontColor}) => fontColor ?? 'inherit'};
  background-color: ${({bgColor}) => bgColor ?? 'rgba(0, 0, 0, 0.3)'};
`;

export const Backdrop: React.FC<BackdropProps> = forwardRef(
  (props, ref: ForwardedRef<HTMLDivElement>) => {
    return props.open ? (
      <StyledBackdrop ref={ref} className="_Backdrop" {...props} />
    ) : null;
  },
);

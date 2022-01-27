import React from 'react';
import ReactDOM from 'react-dom';
import styled from '@emotion/styled';
import {colorFromTheme, onColorFromTheme} from '../core/themeUtils';
import {TColor, ReactHTMLProps} from '../core/definitions';

export interface BackdropProps extends ReactHTMLProps<HTMLDivElement> {
  open: boolean;
  onClick?: () => void;
  zIndex?: number;
  fontColor?: TColor;
  bgColor?: TColor;
  children?: React.ReactNode;
}

const StyledBackdrop = styled.div<BackdropProps>`
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100vw;
  height: 100vh;
  z-index: ${({theme, zIndex}) => zIndex || theme.zIndex.backdrop};
  background-color: ${({theme, bgColor: bg}) =>
    bg === undefined ? 'transparent' : colorFromTheme(theme, bg)};

  color: ${({theme, fontColor, bgColor}) => {
    let color = 'inherit';
    if (bgColor && !fontColor) color = onColorFromTheme(theme, bgColor);
    else if (fontColor) color = colorFromTheme(theme, fontColor);
    return color;
  }};
`;

export const Backdrop: React.FC<BackdropProps> = ({
  onClick,
  ...props
}: BackdropProps) => {
  const handleClick = () => {
    onClick && onClick();
  };

  return props.open
    ? ReactDOM.createPortal(
        <StyledBackdrop
          className="_Backdrop"
          onClick={handleClick}
          {...props}
        />,
        document.body,
      )
    : null;
};

import React from 'react';
import styled from '@emotion/styled';
import {Backdrop, BackdropProps} from './Backdrop';
import {Surface, SurfaceProps} from './Surface';
import {BreakPoint, colorFromTheme, getBreakpoint, TColor} from '../core';

export interface ModalProps extends SurfaceProps {
  children: React.ReactNode;
  open: boolean;
  onClickAway?: () => void;
  backdropProps?: Partial<BackdropProps>;
  fullScreen?: boolean;
  width?: BreakPoint;
  height?: string;
}

const StyledModal = styled(Backdrop)<BackdropProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: ${({theme}) => theme.zIndex.modal};
  background-color: ${({theme, bgColor}) =>
    colorFromTheme(theme, bgColor || 'rgba(0, 0, 0, 0.3)')};
`;

const StyledPaper = styled(Surface)<Partial<ModalProps>>`
  width: ${({theme, fullScreen, width}) =>
    fullScreen ? '100vw' : getBreakpoint(theme, width)};
  height: ${({fullScreen, height}) => (fullScreen ? '100vh' : height || '')};
  justify-content: flex-start;
`;

export const Modal: React.FC<ModalProps> = ({
  children,
  open,
  onClickAway,
  backdropProps,
  ...props
}) => {
  const handleClose = () => onClickAway && onClickAway();
  const handlePaperClick = (e: React.MouseEvent) => e.stopPropagation();

  props.width = props.width || 'sm';

  return (
    <>
      <StyledModal
        className="_Modal-Backdrop"
        open={open}
        onClick={handleClose}
        {...backdropProps}
      >
        <StyledPaper
          className="_Modal-Paper"
          onClick={handlePaperClick}
          square={props.fullScreen}
          {...props}
        >
          {children}
        </StyledPaper>
      </StyledModal>
    </>
  );
};

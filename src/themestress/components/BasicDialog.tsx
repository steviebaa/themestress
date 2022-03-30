import React, {ForwardedRef, forwardRef, useRef} from 'react';
import styled from '@emotion/styled';
import {Backdrop, BackdropProps} from './Backdrop';
import {Surface, SurfaceProps} from './Surface';
import {BreakPoint} from '../core/definitions';
import {getMarginAndPadding} from '../core/themeUtils';

export interface BasicDialogProps extends SurfaceProps {
  children: React.ReactNode;
  open: boolean;
  onClickAway?: () => void;
  backdropProps?: Partial<BackdropProps>;
  width?: BreakPoint;
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

const StyledBackdrop = styled(Backdrop)<BackdropProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: var(--sys-z-index-modal);
`;

const StyledSurface = styled(Surface)<Partial<BasicDialogProps>>`
  ${props => getMarginAndPadding(props)}
  min-height: 48px;
  justify-content: flex-start;
  background-color: white;
  border-radius: 24px;
`;

export const BasicDialog: React.FC<BasicDialogProps> = forwardRef(
  (
    {children, open, onClickAway, backdropProps, ...props}: BasicDialogProps,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    const backdropClick = useRef<boolean>(null);

    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
      // Used to ensure backdrop click starts and ends on backdrop
      backdropClick.current = e.target === e.currentTarget;
    };

    const handleClose = () => {
      backdropClick.current && onClickAway && onClickAway();
    };

    const handleSurfaceClick = (e: React.MouseEvent) => e.stopPropagation();

    props.padding = props.padding ?? 6;

    return (
      <StyledBackdrop
        className="_Backdrop"
        open={open}
        onClick={handleClose}
        onMouseDown={handleMouseDown}
        {...backdropProps}
      >
        <StyledSurface
          ref={ref}
          className="_BasicDialog"
          onClick={handleSurfaceClick}
          width={props.width}
          height={props.height}
          variant="filled"
          {...props}
        >
          {children}
        </StyledSurface>
      </StyledBackdrop>
    );
  },
);

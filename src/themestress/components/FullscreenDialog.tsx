import React, {ForwardedRef, forwardRef} from 'react';
import styled from '@emotion/styled';
import {Surface, SurfaceProps} from './Surface';
import {getMarginAndPadding} from '../core/themeUtils';

export interface FullscreenDialogProps extends SurfaceProps {
  children: React.ReactNode;
  open: boolean;
  zIndex?: number;

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

const StyledSurface = styled(Surface)<Partial<FullscreenDialogProps>>`
  ${props => getMarginAndPadding(props)}
  display: flex;
  justify-content: center;
  background-color: white;
  z-index: ${({zIndex}) => zIndex ?? 'var(--sys-z-index-modal)'};
  position: fixed;
  box-sizing: border-box;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  max-height: 100vh;
  overflow-y: auto;
`;

export const FullscreenDialog: React.FC<FullscreenDialogProps> = forwardRef(
  (
    {children, open, ...props}: FullscreenDialogProps,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    const handleSurfaceClick = (e: React.MouseEvent) => e.stopPropagation();

    props.padding = props.padding ?? 6;

    return open ? (
      <StyledSurface
        ref={ref}
        className="_FullscreenDialog"
        onClick={handleSurfaceClick}
        variant="filled"
        {...props}
      >
        {children}
      </StyledSurface>
    ) : null;
  },
);

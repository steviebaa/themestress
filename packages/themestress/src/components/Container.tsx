import React from 'react';
import styled from '@emotion/styled';

import { ReactHTMLProps } from '../core/definitions';

type TMaxWidth = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

type TAlign = 'baseline' | 'center' | 'flex-start' | 'flex-end';

type TJustify =
  | 'space-evenly'
  | 'space-between'
  | 'space-around'
  | 'flex-start'
  | 'flex-end';

export interface ContainerProps extends ReactHTMLProps<HTMLDivElement> {
  maxWidth?: TMaxWidth;
  justifyContent?: TJustify;
  alignItems?: TAlign;
  direction?: 'column' | 'row';
  alignSelf?: TAlign;
  margin?: number;
  fullWidth?: boolean;
}

const maxWidthMap = {
  xs: '300px',
  sm: '600px',
  md: '900px',
  lg: '1200px',
  xl: '1536px',
};

const StyledContainer = styled.div<ContainerProps>`
  margin: ${({ theme, margin }) => `0px ${theme.spacing * (margin ?? 6)}px`};
  display: flex;
  position: relative;
  max-width: ${({ maxWidth }) => maxWidthMap[maxWidth] || 'initial'};
  align-items: ${({ alignItems }) => alignItems || 'initial'};
  justify-content: ${({ justifyContent }) => justifyContent || 'initial'};
  flex-direction: ${({ direction }) => direction || 'initial'};
  align-self: ${({ alignSelf }) => alignSelf || 'initial'};
  box-sizing: border-box;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'initial')};
`;

export const Container: React.FC<ContainerProps> = ({
  children,
  ...props
}: ContainerProps) => {
  return (
    <StyledContainer className="_Container" {...props}>
      {children}
    </StyledContainer>
  );
};

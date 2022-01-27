import React from 'react';
import styled from '@emotion/styled';
import {ReactHTMLProps, BreakPoint} from '../core/definitions';

export interface ContainerProps extends ReactHTMLProps<HTMLDivElement> {
  maxWidth?: BreakPoint;
  padding?: number;
  fixed?: boolean;
}

const maxWidthMap = {
  xs: '300px',
  sm: '600px',
  md: '900px',
  lg: '1200px',
  xl: '1536px',
};

const StyledContainer = styled.div<ContainerProps>`
  box-sizing: border-box;
  display: block;
  position: relative;
  max-width: ${({maxWidth}) => maxWidthMap[maxWidth]};
  min-width: ${({fixed, maxWidth}) => (fixed ? maxWidthMap[maxWidth] : '')};
  padding: ${({theme, padding}) => `0px ${theme.spacing * (padding ?? 6)}px`};
  margin-left: auto;
  margin-right: auto;
  width: 100%;
`;

export const Container: React.FC<ContainerProps> = ({
  children,
  ...props
}: ContainerProps) => {
  props.maxWidth = props.maxWidth || 'md';
  return (
    <StyledContainer className="_Container" {...props}>
      {children}
    </StyledContainer>
  );
};

import React from 'react';
import styled from '@emotion/styled';

export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  container?: boolean;
  item?: boolean;
  paper?: number;
  justifyContent?:
    | 'space-evenly'
    | 'space-between'
    | 'space-around'
    | 'flex-start'
    | 'flex-end';
  alignItems?: 'baseline' | 'center' | 'flex-start' | 'flex-end';
  direction?: 'column' | 'row';
  size?: number;
  alignSelf?: 'baseline' | 'center' | 'flex-start' | 'flex-end';
}

const GridContainer = styled.div<GridProps>`
  display: flex;
  width: 100%;
  position: relative;
  align-items: ${({ alignItems }): string => alignItems || 'initial'};
  justify-content: ${({ justifyContent }): string =>
    justifyContent || 'initial'};
  flex-direction: ${({ direction }): string => direction || 'initial'};
  flex-flow: wrap;
  box-sizing: border-box;
  background-color: ${({ theme, paper }): string =>
    paper ? theme.palette.shade[paper].main : 'transparent'};
  color: ${({ theme, paper }): string =>
    paper ? theme.palette.shade[paper].on : 'inherit'};
`;

const GridItem = styled.div<GridProps>`
  display: flex;
  position: relative;
  align-items: ${({ alignItems }): string => alignItems || 'initial'};
  justify-content: ${({ justifyContent }): string =>
    justifyContent || 'initial'};
  flex-direction: ${({ direction }): string => direction || 'initial'};
  flex: ${({ size }) => (size === undefined ? 'initial' : `1 1 ${size}%`)};
  max-width: ${({ size }) => (size === undefined ? 'initial' : `${size}%`)};
  align-self: ${({ alignSelf }): string => alignSelf || 'initial'};
  box-sizing: border-box;
  background-color: ${({ theme, paper }): string =>
    paper ? theme.palette.shade[paper].main : 'inherit'};
  color: ${({ theme, paper }): string =>
    paper ? theme.palette.shade[paper].on : 'inherit'};
`;

export const Grid: React.FC<GridProps> = ({
  container,
  item,
  children,
  ...props
}: GridProps) => {
  return (
    <>
      {container && (
        <GridContainer className="_GridContainer" {...props}>
          {children}
        </GridContainer>
      )}

      {item && (
        <GridItem className="_GridItem" {...props}>
          {children}
        </GridItem>
      )}

      {!container && !item && <h2>Grid missing prop container or item</h2>}
    </>
  );
};

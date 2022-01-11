import React from 'react';
import styled from '@emotion/styled';

export interface IconProps {
  children?: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | string;
  fill?: string;
}

const StyledSvg = styled.svg`
  fill: ${({ theme, fill }) => fill ?? theme.palette.shade[5].main};
`;

export const Icon: React.FC<IconProps> = ({
  children,
  size,
  ...props
}: IconProps) => {
  let height = size;

  if (height === 'sm') height = '24px';
  else if (height === 'md') height = '32px';
  else if (height === 'lg') height = '40px';

  return (
    <StyledSvg
      className="_Icon"
      height={height}
      focusable="false"
      viewBox="0 0 24 24"
      aria-hidden="true"
      {...props}
    >
      {children}
    </StyledSvg>
  );
};

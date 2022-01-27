import React from 'react';
import styled from '@emotion/styled';
import {colorFromTheme, TColor} from '../core';

export interface IconProps {
  children?: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | string;
  fill?: TColor;
}

const StyledSvg = styled.svg<{_fill: TColor}>`
  fill: ${({theme, _fill}) =>
    _fill === undefined
      ? theme.palette.neutral[theme.palette.mode === 'light' ? 800 : 100].main
      : colorFromTheme(theme, _fill)};
`;

export const Icon: React.FC<IconProps> = ({
  children,
  size,
  fill,
  ...props
}: IconProps) => {
  let height = size || 'sm';

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
      _fill={fill}
      {...props}
    >
      {children}
    </StyledSvg>
  );
};

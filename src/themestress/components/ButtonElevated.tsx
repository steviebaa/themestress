import styled from '@emotion/styled';
import React from 'react';
import {Ripple} from '.';
import {ReactHTMLProps} from '../core';

export interface ButtonElevatedProps extends ReactHTMLProps<HTMLButtonElement> {
  disableRipple?: boolean;
  icon?: React.ReactNode;
  disabled?: boolean;
  // variant?: 'contained' | 'outlined' | 'text';
  // align?: 'left' | 'center' | 'right';
  // noTransform?: boolean;
  // fontColor?: TColor;
  // bgColor?: TColor;
  // borderColor?: TColor;
  // noElevation?: boolean;
  // radius?: number;
  // width?: string;
  // height?: string;
  // margin?: number;
  // marginLeft?: number;
  // marginRight?: number;
  // marginTop?: number;
  // marginBottom?: number;
  // padding?: number;
  // paddingLeft?: number;
  // paddingRight?: number;
  // paddingTop?: number;
  // paddingBottom?: number;
}

const StyledButtonElevated = styled.button<ButtonElevatedProps>`
  display: inline-flex;
  align-items: center;
  border: none;

  min-height: 40px;
  border-radius: 20px;
  padding-left: ${({icon}) => (icon ? '16px' : '24px')};
  padding-right: 24px;
  background-color: var(--sys-color-surface);
  box-shadow: var(--sys-elevation-level-1);

  > span.elevated-button-icon {
    padding-right: 8px;
    text-align: center;
    > svg {
      fill: var(--sys-color-primary);
    }
  }

  > span.elevated-button-label {
    color: var(--sys-color-primary);
    font-family: var(--sys-typescale-label-large-font);
    font-weight: var(--sys-typescale-label-large-weight);
    font-size: var(--sys-typescale-label-large-size);
    line-height: var(--sys-typescale-label-large-line-height);
    letter-spacing: var(--sys-typescale-label-large-tracking);
  }
`;

export const ButtonElevated: React.FC<ButtonElevatedProps> = ({
  children,
  ...props
}) => {
  return (
    <StyledButtonElevated className="elevated-container" {...props}>
      <Ripple />

      {props.icon && (
        <span className="elevated-button-icon">
          <svg height={22} width={22}>
            {props.icon}
          </svg>
        </span>
      )}

      <span className="elevated-button-label">{children}</span>
    </StyledButtonElevated>
  );
};

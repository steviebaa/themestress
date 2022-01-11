import React from 'react';
import styled from '@emotion/styled';

import { TColor } from '../core/definitions';
import { colorFromTheme } from '../core/themeUtils';

export interface SwitchProps {
  checked: boolean;
  noIcon?: boolean;
  onChange?: (checked: boolean) => void;
  trackColor?: { on: TColor; off: TColor };
  handleColor?: { on: TColor; off: TColor };
}

interface OnProp {
  on: number;
}

const Track = styled.span<Partial<SwitchProps> & OnProp>`
  position: relative;
  width: 42px;
  min-width: 42px;
  max-width: 42px;
  height: 26px;
  border-radius: 13px;
  padding: 0;
  // display: flex;
  align-items: center;
  cursor: pointer;
  background-color: ${({ theme, trackColor, on }) => {
    if (trackColor) {
      return on
        ? colorFromTheme(theme, trackColor.on)
        : colorFromTheme(theme, trackColor.off);
    } else {
      if (theme.palette.mode === 'light') {
        return on ? '#65C466' : '#e9e9ea';
      } else {
        return on ? '#65C466' : '#49494e';
      }
    }
  }};
`;

const Handle = styled.span<Partial<SwitchProps> & OnProp>`
  position: absolute;
  display: flex;
  align-items: center;
  border-radius: 50%;
  width: ${({ noIcon }) => (noIcon ? '22px' : '26px')};
  background-color: ${({ noIcon }) => (noIcon ? 'white' : 'transparent')};
  box-sizing: border-box;
  transition: right 200ms;
  padding-bottom: ${({ noIcon }) => (noIcon ? '22px' : 'initial')};
  right: ${({ noIcon, on }) =>
    noIcon ? (on ? '2px' : '18px') : on ? '0px' : '16px'};
`;

const TickPath = () => (
  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM9.29 16.29 5.7 12.7a.9959.9959 0 0 1 0-1.41c.39-.39 1.02-.39 1.41 0L10 14.17l6.88-6.88c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41l-7.59 7.59c-.38.39-1.02.39-1.41 0z" />
);
const CrossPath = () => (
  <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm4.3 14.3c-.39.39-1.02.39-1.41 0L12 13.41 9.11 16.3c-.39.39-1.02.39-1.41 0a.9959.9959 0 0 1 0-1.41L10.59 12 7.7 9.11a.9959.9959 0 0 1 0-1.41c.39-.39 1.02-.39 1.41 0L12 10.59l2.89-2.89c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41L13.41 12l2.89 2.89c.38.38.38 1.02 0 1.41z" />
);

const Svg = styled.svg<Partial<SwitchProps> & OnProp>`
  fill: ${({ theme, handleColor, on }) => {
    if (handleColor) {
      return on
        ? colorFromTheme(theme, handleColor.on)
        : colorFromTheme(theme, handleColor.off);
    } else {
      return 'white';
    }
  }};
`;

export const Switch: React.FC<SwitchProps> = (props: SwitchProps) => {
  const handleClick = () => {
    if (props.onChange) props.onChange(!props.checked);
  };

  return (
    <Track
      className="_Switch-Track"
      on={props.checked ? 1 : 0}
      onClick={handleClick}
      // {...props}
    >
      <Handle className="_Switch-Handle" on={props.checked ? 1 : 0}>
        {props.noIcon ? null : (
          <Svg
            width="100%"
            height="100%"
            viewBox="0 0 24 24"
            on={props.checked ? 1 : 0}
          >
            {props.checked ? <TickPath /> : <CrossPath />}
          </Svg>
        )}
      </Handle>
    </Track>
  );
};

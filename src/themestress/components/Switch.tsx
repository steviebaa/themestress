import React from 'react';
import styled from '@emotion/styled';

export interface SwitchProps {
  checked: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  variant?: 'default' | 'ios' | 'android';
  trackWidth?: string;
  trackHeight?: string;
  trackBorderRadius?: string;
  trackColor?: {on?: string; off?: string};
  handleDiameter?: string;
  handleBorderRadius?: string;
  handleInset?: string;
  handleColor?: {on?: string; off?: string};
  noHandleShadow?: boolean;
  noHoverEffect?: boolean;
  disabled?: boolean;
}

const createPreset = (
  trackWidth: string,
  trackHeight: string,
  trackBorderRadius: string,
  trackColor: {on?: string; off?: string},
  handleDiameter: string,
  handleBorderRadius: string,
  handleInset: string,
  handleColor: {on?: string; off?: string},
  noHoverEffect: boolean,
) => {
  return {
    trackWidth,
    trackHeight,
    trackBorderRadius,
    trackColor,
    handleDiameter,
    handleBorderRadius,
    handleInset,
    handleColor,
    noHoverEffect,
  };
};
const presets = {
  default: createPreset(
    '34px',
    '14px',
    '7px',
    {
      off: 'var(--sys-color-outline)',
      on: 'var(--sys-color-inverse-primary)',
    },
    '20px',
    '10px',
    '-4px',
    {
      off: 'var(--sys-color-surface-variant)',
      on: 'var(--sys-color-primary)',
    },
    false,
  ),
  ios: createPreset(
    '42px',
    '26px',
    '13px',
    {
      off: 'var(--sys-color-secondary-container)',
      on: '#65c466',
    },
    '22px',
    '11px',
    '2px',
    {
      off: 'var(--sys-color-surface)',
      on: 'var(--sys-color-surface)',
    },
    true,
  ),
  android: createPreset(
    '42px',
    '22px',
    '11px',
    {
      off: 'var(--sys-color-secondary-container)',
      on: 'var(--sys-color-inverse-primary)',
    },
    '16px',
    '8px',
    '4px',
    {
      off: 'var(--sys-color-surface)',
      on: 'var(--sys-color-primary)',
    },
    false,
  ),
};

const StyledContainer = styled.div<SwitchProps>`
  position: relative;
  height: ${({trackHeight, handleDiameter}) =>
    `max(${trackHeight},${handleDiameter})`};
  width: ${({trackWidth, handleInset}) =>
    `max(${trackWidth}, calc(${trackWidth} - ${handleInset} * 2))`};
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;

  :hover {
    ._Switch-HandleEffect {
      outline: ${({
        trackColor,
        handleDiameter,
        checked,
      }) => `calc(${handleDiameter} / 2) solid
      ${checked ? trackColor.on : trackColor.off}`};
    }
  }

  ${({disabled}) => disabled && 'opacity: 0.7'};
`;

const StyledTrack = styled.span<{
  trackWidth: SwitchProps['trackWidth'];
  trackHeight: SwitchProps['trackHeight'];
  trackBorderRadius: SwitchProps['trackBorderRadius'];
  trackColor: SwitchProps['trackColor'];
  handleDiameter: SwitchProps['handleDiameter'];
  disabled: SwitchProps['disabled'];
  checked: boolean;
}>`
  display: flex;
  align-items: center;
  position: relative;
  padding: 0;
  align-items: center;

  transition: background-color 200ms ease-in-out;
  background-color: ${({trackColor, checked}) => {
    if (trackColor) {
      return checked ? trackColor.on : trackColor.off;
    } else {
      return `var(--sys-color-${checked ? 'primary' : 'secondary-container'})`;
    }
  }};

  width: ${({trackWidth}) => trackWidth};
  min-width: ${({trackWidth}) => trackWidth};
  max-width: ${({trackWidth}) => trackWidth};
  height: ${({trackHeight}) => trackHeight};
  border-radius: ${({trackBorderRadius}) => trackBorderRadius};
`;

const StyledHandle = styled.span<{
  handleDiameter: SwitchProps['handleDiameter'];
  handleBorderRadius: SwitchProps['handleBorderRadius'];
  handleInset: SwitchProps['handleInset'];
  handleColor: SwitchProps['handleColor'];
  trackWidth: SwitchProps['trackWidth'];
  noHandleShadow: SwitchProps['noHandleShadow'];
  checked: boolean;
}>`
  position: absolute;
  box-sizing: border-box;
  background-color: ${({handleColor, checked}) =>
    checked ? handleColor.on : handleColor.off};
  ${({noHandleShadow}) =>
    !noHandleShadow &&
    `box-shadow: rgb(0 0 0 / 20%) 0px 2px 1px -1px,
                 rgb(0 0 0 / 14%) 0px 1px 1px 0px, 
								 rgb(0 0 0 / 12%) 0px 1px 3px 0px`};

  border-radius: ${({handleBorderRadius}) => handleBorderRadius ?? '50%'};
  width: ${({handleDiameter}) => handleDiameter};
  height: ${({handleDiameter}) => handleDiameter};

  transition: left 200ms;
  left: ${({checked, handleInset, trackWidth, handleDiameter}) => {
    const startPos = checked ? trackWidth ?? '42px' : '0px';
    const handleBuffer = checked ? handleDiameter : '0px';
    const sign = checked ? '-' : '+';

    return `calc((${startPos} - ${handleBuffer}) ${sign} ${
      handleInset ?? '0px'
    })`;
  }};
`;

const StyledHoverEffect = styled.span`
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  position: absolute;
  left: 0;
  top: 0;
  border-radius: inherit;
  opacity: 0.12;
`;

const StyledInput = styled.input<{
  trackHeight: string;
  trackWidth: string;
  handleDiameter: string;
  handleInset: string;
}>`
  height: 100%;
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  opacity: 0;
  cursor: pointer;
  pointer-events: all;

  :disabled {
    cursor: default;
  }
`;

export const Switch: React.FC<SwitchProps> = ({
  onChange,
  variant,
  ...props
}: SwitchProps) => {
  const handleClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(e);
  };

  // Apply variants
  const presetStyle = presets[variant] ?? presets.default;
  Object.entries(presetStyle).forEach(([k, v]) => (props[k] = props[k] ?? v));

  return (
    <StyledContainer className="_Switch" {...props}>
      <StyledInput
        type="checkbox"
        onChange={handleClick}
        disabled={props.disabled}
        trackHeight={props.trackHeight}
        trackWidth={props.trackWidth}
        handleDiameter={props.handleDiameter}
        handleInset={props.handleInset}
      />
      <StyledTrack
        className="_Switch-Track"
        checked={props.checked}
        trackWidth={props.trackWidth}
        trackHeight={props.trackHeight}
        trackBorderRadius={props.trackBorderRadius}
        trackColor={props.trackColor}
        handleDiameter={props.handleDiameter}
        disabled={props.disabled}
      >
        <StyledHandle
          className="_Switch-Handle"
          checked={props.checked}
          handleColor={props.handleColor}
          handleDiameter={props.handleDiameter}
          handleInset={props.handleInset}
          handleBorderRadius={props.handleBorderRadius}
          trackWidth={props.trackWidth}
          noHandleShadow={props.noHandleShadow}
        >
          {!props.noHoverEffect && !props.disabled && (
            <StyledHoverEffect className="_Switch-HandleEffect" />
          )}
        </StyledHandle>
      </StyledTrack>
    </StyledContainer>
  );
};

import React from 'react';
import styled from '@emotion/styled';
import {Typography} from './Typography';
import {colorFromTheme} from '../core/themeUtils';
import {TColor} from '../core/definitions';

export interface AvatarProps {
  borderColor?: TColor;
  noPulse?: boolean;
  noStatus?: boolean;
  statusColor?: TColor;
  alt?: string;
  src?: string;
}

const StyledAvatar = styled.div<AvatarProps>`
  position: relative;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: ${({theme}) =>
    colorFromTheme(theme, ['neutral', 500, 'main'])};
  border: 4px solid
    ${({theme, borderColor}) =>
      borderColor
        ? colorFromTheme(theme, borderColor)
        : theme.palette.neutral[theme.palette.mode === 'light' ? 50 : 850]
            .main};
  display: flex;
  align-items: center;
  user-select: none;
`;

const StatusBadge = styled.div<AvatarProps>`
  position: absolute;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: ${({theme, statusColor}) =>
    statusColor
      ? colorFromTheme(theme, statusColor)
      : theme.palette.success.main};
  bottom: -4px;
  right: -4px;
  border: 4px solid
    ${({theme, borderColor}) =>
      borderColor
        ? colorFromTheme(theme, borderColor)
        : theme.palette.neutral[theme.palette.mode === 'light' ? 50 : 850]
            .main};
  display: flex;
  justify-content: center;

  &::after {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    box-sizing: border-box;
    border: 1px solid
      ${({theme, statusColor}) =>
        statusColor ? colorFromTheme(theme, statusColor) : '#44b700'};
    content: '';
    align-self: center;

    @keyframes statusripple {
      from {
        transform: scale(0.5);
        opacity: 1;
      }
      to {
        transform: scale(2.4);
        opacity: 0;
      }
    }
    animation: ${({noPulse}) =>
      noPulse ? 'none' : `statusripple 1.2s infinite ease-in-out`};
  }
`;

const AltText = styled(Typography)`
  width: 100%;
  margin: 0px;
  text-align: center;
  font-size: 2rem;
  line-height: 1;
  color: rgb(255, 255, 255, 0.5);
`;

const ProfilePicture = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
`;

const PersonSvg = ({className}: {className: string}) => (
  <div className={className} style={{padding: '12px', width: '100%'}}>
    <svg fill="white" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
    </svg>
  </div>
);

export const Avatar: React.FC<AvatarProps> = (props: AvatarProps) => {
  const initials = props.alt
    ? props.alt
        .split(' ')
        .map(word => word[0])
        .join('')
        .toUpperCase()
        .slice(0, 2)
    : '';

  return (
    <StyledAvatar className="_Avatar" {...props}>
      {!props.noStatus && <StatusBadge {...props} />}

      {props.src ? (
        <ProfilePicture
          className="_Avatar-ProfilePicture"
          alt={props.alt ? props.alt : 'avatar'}
          src={props.src}
        />
      ) : initials ? (
        <AltText className="_Avatar-AltText">{initials}</AltText>
      ) : (
        <PersonSvg className="_Avatar-PersonSvg" />
      )}
    </StyledAvatar>
  );
};

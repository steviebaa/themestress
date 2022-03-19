import React from 'react';
import styled from '@emotion/styled';
import {Typography} from './Typography';

export interface AvatarProps {
  borderColor?: string;
  noPulse?: boolean;
  noStatus?: boolean;
  statusColor?: string;
  alt?: string;
  src?: string;
}

const StyledAvatar = styled.div<AvatarProps>`
  position: relative;
  width: 80px;
  height: 80px;
  user-select: none;
`;

const StyledAvatarBackground = styled.div<{noStatus: boolean}>`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: var(--sys-color-surface-variant);
  display: flex;
  align-items: center;

  ${({noStatus}) =>
    !noStatus &&
    `
    mask-image: radial-gradient(
      circle at calc(100% - 12px) calc(100% - 12px),
      rgba(255, 255, 255, 0) 12px,
      rgba(0, 0, 0, 1) 12px
    )
  `};
`;

const StatusBadge = styled.div<{statusColor: string; noPulse: boolean}>`
  position: absolute;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: ${({statusColor}) => statusColor ?? '#44b700'};
  bottom: 4px;
  right: 4px;
  display: flex;
  justify-content: center;

  &::after {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    box-sizing: border-box;
    border: 1px solid ${({statusColor}) => statusColor ?? '#44b700'};
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
      <StyledAvatarBackground
        className="_Avatar-Background"
        noStatus={props.noStatus}
      >
        {props.src ? (
          <ProfilePicture
            className="_Avatar-Profile-Picture"
            alt={props.alt ? props.alt : 'avatar'}
            src={props.src}
          />
        ) : initials ? (
          <AltText className="_Avatar-Alt-Text">{initials}</AltText>
        ) : (
          <PersonSvg className="_Avatar-Person-Svg" />
        )}
      </StyledAvatarBackground>
      {!props.noStatus && (
        <StatusBadge
          className="_Avatar-Status-Badge"
          statusColor={props.statusColor}
          noPulse={props.noPulse}
        />
      )}
    </StyledAvatar>
  );
};

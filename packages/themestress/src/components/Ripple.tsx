import React, { useState, useLayoutEffect } from 'react';
import styled from '@emotion/styled';

export interface RippleProps {
  duration?: number;
  color?: string;
}

const RippleContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  span {
    transform: scale(0);
    border-radius: 100%;
    position: absolute;
    opacity: 0.75;
    background-color: ${(props) => props.color};
    animation-name: ripple;
    animation-duration: ${(props: { duration: number }) => props.duration}ms;
  }

  @keyframes ripple {
    to {
      opacity: 0;
      transform: scale(2);
    }
  }
`;

const useDebouncedRippleCleanUp = (
  count: number,
  duration: number,
  cleanFn: () => void,
) => {
  useLayoutEffect(() => {
    let bounce: NodeJS.Timeout;
    if (count > 0) {
      clearTimeout(bounce);

      bounce = setTimeout(() => {
        cleanFn();
        clearTimeout(bounce);
      }, duration * 2);
    }

    return () => clearTimeout(bounce);
  }, [count, duration, cleanFn]);
};

export const Ripple: React.FC<RippleProps> = ({
  duration = 850,
  color = '#fff',
}: RippleProps) => {
  const [rippleArray, setRippleArray] = useState([]);

  useDebouncedRippleCleanUp(rippleArray.length, duration, () => {
    setRippleArray([]);
  });

  const addRipple = (e: React.MouseEvent<HTMLDivElement>) => {
    const rippleContainer = e.currentTarget.getBoundingClientRect();
    const { x, y, width, height } = rippleContainer;
    const size = rippleContainer.width > height ? width : height;
    const xi = e.pageX - x - size / 2;
    const yi = e.pageY - y - size / 2;
    const newRipple = { x: xi, y: yi, size };

    setRippleArray([...rippleArray, newRipple]);
  };

  return (
    <RippleContainer
      className="_Ripple-Container"
      duration={duration}
      color={color}
      onMouseDown={addRipple}
    >
      {rippleArray.length > 0 &&
        rippleArray.map((ripple, index) => {
          return (
            <span
              key={'span' + index}
              style={{
                top: ripple.y,
                left: ripple.x,
                width: ripple.size,
                height: ripple.size,
              }}
            />
          );
        })}
    </RippleContainer>
  );
};

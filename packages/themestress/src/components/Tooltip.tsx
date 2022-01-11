import React, { MutableRefObject, useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import styled from '@emotion/styled';

type TDirection = 'top' | 'bottom' | 'left' | 'right';

export interface TooltipProps {
  children: React.ReactElement & { ref?: MutableRefObject<HTMLElement> };
  tip: string | number;
  delay?: number;
  direction?: TDirection;
}

const getWrapperTranslation = (direction: TDirection, bounds: DOMRect) => {
  let x = bounds.width / 2;
  let y = bounds.height / 2;

  if (direction === 'top') {
    y -= bounds.height / 2 + 12;
  } else if (direction === 'bottom') {
    y += bounds.height / 2 + 12;
  } else if (direction === 'right') {
    x += bounds.width / 2 + 12;
  } else if (direction === 'left') {
    x -= bounds.width / 2 + 12;
  }

  return `translate(${x}px, ${y}px)`;
};

const getTipTranslation = (direction: TDirection) => {
  if (direction === 'top') {
    return 'translateY(-50%)';
  } else if (direction === 'bottom') {
    return 'translateY(50%)';
  } else if (direction === 'right') {
    return 'translateX(50%)';
  } else {
    return 'translateX(-50%)';
  }
};

const Wrapper = styled.div<{ bounds: DOMRect; direction: TDirection }>`
  position: fixed;
  z-index: 1500;
  width: 0px;
  height: 0px;
  top: ${({ bounds }) => bounds.top}px;
  left: ${({ bounds }) => bounds.left}px;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: ${(props) => getWrapperTranslation(props.direction, props.bounds)};

  animation: fadein 500ms forwards;

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const Tip = styled.div<{ direction: TDirection }>`
  border-radius: 4px;
  font-family: Roboto, Helvetica, Arial, sans-serif;
  font-size: 14px;
  font-weight: bold;
  padding: 2px 8px;
  text-align: center;
  color: ${({ theme }) => theme.palette.secondary.on};
  background-color: ${({ theme }) => theme.palette.secondary.main};
  box-sizing: border-box;
  white-space: nowrap;
  transform: ${(props) => getTipTranslation(props.direction)};
`;

export const Tooltip: React.FC<TooltipProps> = ({
  children,
  tip,
  direction,
}: TooltipProps) => {
  // This ref will be used if there isnt an existing one on the child
  const ref = useRef<HTMLElement>(null);

  // Which ever ref is used, it will be accessible by this state
  const [
    childRef,
    setChildRef,
  ] = useState<MutableRefObject<HTMLElement> | null>(null);

  // The bounds of the child once its been rendered
  const [bounds, setBounds] = useState<DOMRect | null>(null);

  // The hijacked child
  const [child, setChild] = useState(children);

  // Whether to render the tooltip
  const [active, setActive] = React.useState(false);

  const handlePointerOver = (e: React.MouseEvent, originalFn: () => void) => {
    setActive(true);
    if (originalFn) originalFn();
  };

  const handlePointerLeave = (e: React.MouseEvent, originalFn: () => void) => {
    setActive(false);
    if (originalFn) originalFn();
  };

  useEffect(() => {
    const ogFn = children.props.onPointerOver;
    const hijackedRef = children.ref ?? ref;

    setChild(
      React.cloneElement(children, {
        ...children.props,
        ref: hijackedRef,
        onPointerOver: (e: React.MouseEvent) => {
          handlePointerOver(e, ogFn);
        },
        onPointerLeave: (e: React.MouseEvent) => {
          handlePointerLeave(e, ogFn);
        },
      }),
    );

    setChildRef(hijackedRef as MutableRefObject<HTMLElement>);
  }, [children]);

  if (childRef && childRef.current) {
    const nextBounds = childRef.current.getBoundingClientRect();

    if (!bounds || bounds.x !== nextBounds.x || bounds.y !== nextBounds.y) {
      setBounds(nextBounds);
    }
  }

  return (
    <>
      {child}
      {active &&
        bounds &&
        ReactDOM.createPortal(
          <Wrapper
            className="_Tooltip-Wrapper"
            bounds={bounds}
            direction={direction || 'top'}
          >
            <Tip className="_Tooltip-Tip" direction={direction || 'top'}>
              {tip}
            </Tip>
          </Wrapper>,
          document.body,
        )}
    </>
  );
};

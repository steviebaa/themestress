import React, {
  ForwardedRef,
  forwardRef,
  MutableRefObject,
  ReactNode,
  useRef,
} from 'react';
import { createPortal } from 'react-dom';
import styled from '@emotion/styled';

import { ReactHTMLProps } from '../core/definitions';
import { Backdrop } from './Backdrop';
import { Paper } from './Paper';

export interface Transform {
  vertical?: 'top' | 'center' | 'bottom' | (string & {});
  horizontal?: 'left' | 'center' | 'right' | (string & {});
}

export interface MenuProps extends ReactHTMLProps<HTMLDivElement> {
  children: ReactNode;
  width?: string;
  open: boolean;
  anchorElement?: Element;
  onClose: () => void;
  anchorOrigin?: Transform;
  transformOrigin?: Transform;
  positionOverride?: { x: number; y: number };
}

const StyledMenu = styled(Paper)<MenuProps & { pos?: DOMRect | null }>`
  font-family: Roboto, Helvetica, Arial, sans-serif;
  position: fixed;
  width: ${({ width }) => width};
  z-index: 2000;
  min-height: 10px;
  min-width: 10px;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 5px -3px,
    rgba(0, 0, 0, 0.14) 0px 8px 10px 1px, rgba(0, 0, 0, 0.12) 0px 3px 14px 2px;

  left: ${({ pos, anchorOrigin, positionOverride }) => {
    if (positionOverride) return positionOverride.x;

    if (!pos || !pos.x) return 0;
    if (!anchorOrigin) return pos.x;

    let x = pos.x;
    if (anchorOrigin.horizontal === 'center') x += pos.width / 2;
    else if (anchorOrigin.horizontal === 'right') x += pos.width;
    return x;
  }}px;

  top: ${({ pos, anchorOrigin, positionOverride }) => {
    if (positionOverride) return positionOverride.y;

    if (!pos || !pos.y) return 0;
    if (!anchorOrigin) return pos.y + pos.height;

    let y = pos.y;
    if (anchorOrigin.vertical === 'center') y += pos.height / 2;
    else if (anchorOrigin.vertical === 'bottom') y += pos.height;
    return y;
  }}px;

  transform: ${({ transformOrigin }) => {
    if (!transformOrigin) return 'none';

    let x = 0;
    let y = 0;

    if (transformOrigin.horizontal === 'center') x = -50;
    else if (transformOrigin.horizontal === 'right') x = -100;
    else x = 0;

    if (transformOrigin.vertical === 'center') y = -50;
    else if (transformOrigin.vertical === 'bottom') y = -100;
    else y = 0;

    return `translate(${x}%, ${y}%)`;
  }};
`;

const UnorderedList = styled.ul`
  position: relative;
  outline: 0px;
  margin: 0px;
  padding: 8px 0px;
  list-style: none;
  display: flex;
  flex-direction: column;
`;

export const Menu: React.FC<MenuProps> = forwardRef(
  ({ children, ...props }: MenuProps, ref: ForwardedRef<HTMLDivElement>) => {
    const menuRef: MutableRefObject<HTMLDivElement> =
      (ref as MutableRefObject<HTMLDivElement>) ?? useRef<HTMLDivElement>(null);

    const handleClickAway = () => {
      if (!props.open || !menuRef || !menuRef.current) return;
      props.onClose();
    };

    const position = props.anchorElement
      ? props.anchorElement.getBoundingClientRect()
      : null;

    const isNested =
      props.anchorElement &&
      props.anchorElement.className.includes('_NestedMenuItem');

    const handleClick = (e: React.MouseEvent) => {
      const element = e.target as HTMLDivElement;
      const isNestedItem =
        element.parentElement.className.includes('_NestedMenuItem');

      if (!isNestedItem) props.onClose();
    };

    return (
      <>
        {props.open &&
          createPortal(
            <>
              {!isNested && <Backdrop onClick={handleClickAway} />}
              <StyledMenu
                ref={menuRef}
                className="_Menu"
                bgColor={['shade', 1, 'main']}
                pos={position}
                onClick={handleClick}
                {...props}
              >
                <UnorderedList>{children}</UnorderedList>
              </StyledMenu>
            </>,
            document.body,
          )}
      </>
    );
  },
);

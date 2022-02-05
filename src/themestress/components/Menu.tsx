import React, {
  ForwardedRef,
  forwardRef,
  MutableRefObject,
  ReactNode,
  useRef,
} from 'react';
import {createPortal} from 'react-dom';
import styled from '@emotion/styled';
import {ReactHTMLProps, Transform} from '../core/definitions';
import {Surface} from './Surface';
import {Backdrop} from './Backdrop';

export interface MenuProps extends ReactHTMLProps<HTMLDivElement> {
  children: ReactNode;
  anchorElement?: MutableRefObject<any>;
  open: boolean;
  onClose?: () => void;
  width?: string;
  anchorOrigin?: Transform;
  transformOrigin?: Transform;
  positionOverride?: {x: number; y: number};
}

const StyledMenu = styled(Surface)<MenuProps & {pos?: DOMRect | null}>`
  position: fixed;
  width: ${({width}) => width};
  z-index: 2000;
  min-height: 10px;
  min-width: 10px;
  border-radius: 4px;
  left: ${({pos, anchorOrigin, positionOverride}) => {
    if (positionOverride) return positionOverride.x;
    if (!pos || pos.x === undefined) return 0;
    if (!anchorOrigin) return pos.x;

    let x = pos.x;
    if (anchorOrigin.horizontal === 'center') x += pos.width / 2;
    else if (anchorOrigin.horizontal === 'right') x += pos.width;
    return x;
  }}px;
  top: ${({pos, anchorOrigin, positionOverride}) => {
    if (positionOverride) return positionOverride.y;
    if (!pos || pos.y === undefined) return 0;
    if (!anchorOrigin) return pos.y + pos.height;

    let y = pos.y;
    if (anchorOrigin.vertical === 'center') y += pos.height / 2;
    else if (anchorOrigin.vertical === 'bottom') y += pos.height;
    return y;
  }}px;
  transform: ${({transformOrigin}) => {
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
  color: inherit;
`;

export const Menu: React.FC<MenuProps> = forwardRef(
  ({children, ...props}: MenuProps, ref: ForwardedRef<HTMLDivElement>) => {
    const menuRef: MutableRefObject<HTMLDivElement> =
      (ref as MutableRefObject<HTMLDivElement>) || useRef<HTMLDivElement>(null);

    const handleClickAway = () => {
      if (!props.open || !menuRef || !menuRef.current) return;
      props.onClose && props.onClose();
    };

    const position = props.anchorElement?.current?.getBoundingClientRect();

    const isNested =
      props.anchorElement?.current?.className.includes('_NestedMenuItem');

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
              {!isNested && (
                <Backdrop open={props.open} onClick={handleClickAway} />
              )}
              <StyledMenu
                ref={menuRef}
                className="_Menu"
                pos={position}
                onClick={handleClick}
                {...props}
              >
                <UnorderedList className="_Menu-UnorderedList">
                  {children}
                </UnorderedList>
              </StyledMenu>
            </>,
            document.body,
          )}
      </>
    );
  },
);

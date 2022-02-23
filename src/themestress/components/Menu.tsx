import React, {
  ForwardedRef,
  forwardRef,
  MutableRefObject,
  ReactNode,
  useRef,
} from 'react';
import styled from '@emotion/styled';
import {ReactHTMLProps, Transform} from '../core/definitions';
import {createStateLayer} from '../core/md/color';
import {Surface} from './Surface';
import {Backdrop} from './Backdrop';

export interface MenuProps extends ReactHTMLProps<HTMLDivElement> {
  children: ReactNode;
  anchorElement?: MutableRefObject<HTMLElement>;
  open: boolean;
  onClose?: () => void;
  width?: string;
  anchorOrigin?: Transform;
  transformOrigin?: Transform;
  positionOverride?: {x: number; y: number};
  _nested?: boolean;
}

const StyledMenu = styled(Surface)<MenuProps & {pos?: DOMRect | null}>`
  position: fixed;
  width: ${({width}) => width};
  z-index: 2000;
  min-height: 10px;
  min-width: 112px;
  max-width: 280px;
  display: flex;
  border-radius: 4px;
  box-shadow: var(--sys-elevation-level-2);
  background-color: var(--sys-color-surface);
  background-image: ${({theme}) =>
    createStateLayer(theme.palette.primary.main, 0.08)};

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

  > ._Divider {
    background-color: var(--sys-color-surface-variant);
    margin: 4px 0px;
  }
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

    const isNested = props._nested;

    const handleClick = (e: React.MouseEvent) => {
      const element = e.target as HTMLDivElement;
      const isNestedItem =
        element.parentElement.className.includes('_NestedMenuItem');

      if (!isNestedItem) props.onClose();
    };

    /* 
			Groups are defined by dividers. Handle indentation from icons in same 
			group. If item 1 has a start icon and item 2 (in the same group) 
			doesn't, then it should be indented for the text to align. 
		*/
    const groups: {[key: number]: {hasStart?: boolean; hasEnd?: boolean}} = {};
    let iGroup = 1;
    React.Children.forEach(children, (child: React.ReactElement) => {
      const isDivider = child.type['name'] === 'Divider';
      if (isDivider) {
        iGroup++;
        return;
      }
      groups[iGroup] = groups[iGroup] ?? {hasStart: false, hasEnd: false};

      if (child.props.startIcon) {
        groups[iGroup] = {...groups[iGroup], hasStart: true};
      }

      if (child.props.endIcon) {
        groups[iGroup] = {...groups[iGroup], hasEnd: true};
      }
    });

    // Add padding prop if required
    let jGroup = 1;
    const clonedChildren = React.Children.map(
      children,
      (child: React.ReactElement) => {
        const isDivider = child.type['name'] === 'Divider';
        if (isDivider) {
          jGroup++;
          return child;
        }

        return React.cloneElement(child, {
          padStart: groups[jGroup].hasStart && !child.props.startIcon,
          padEnd: groups[jGroup].hasEnd && !child.props.endIcon,
        });
      },
    );

    return (
      props.open && (
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
              {clonedChildren}
            </UnorderedList>
          </StyledMenu>
        </>
      )
    );
  },
);

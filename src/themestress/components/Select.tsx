import styled from '@emotion/styled';
import React, {ChangeEvent, MutableRefObject, useRef, useState} from 'react';
import {ReactHTMLProps} from '../core/definitions';
import {InputBase} from './InputBase';
import {Menu} from './Menu';
import ArrowDownSharpFilled from '../icons/ArrowDownSharpFilled';

export interface SelectProps extends ReactHTMLProps<HTMLDivElement> {
  value: string | number;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  defaultValue?: string | number;
  label?: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  disabled?: boolean;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  variant?: 'outlined' | 'filled';
  noEndIconRotate?: boolean;
}

const Input = styled(InputBase)<SelectProps & {open: boolean}>`
  * {
    cursor: pointer !important;
  }

  > fieldset {
    > input {
      user-select: none;
      caret-color: transparent;
    }
    > span:last-of-type {
      > svg {
        transform: rotate(
          ${({open, noEndIconRotate}) =>
            open && !noEndIconRotate ? 180 : 0}deg
        );
      }
    }
  }
`;

export const Select: React.FC<SelectProps> = React.forwardRef(
  ({value, ...props}: SelectProps, _ref: MutableRefObject<HTMLDivElement>) => {
    const ref = _ref ?? useRef<HTMLDivElement>(null);
    const [open, setOpen] = useState<boolean>(false);

    const handleOnClick = (e: React.MouseEvent<HTMLDivElement>) => {
      setOpen(true);
      props.onClick && props.onClick(e);
    };

    const clonedChildren = React.Children.map(props.children, (child: any) => {
      return React.cloneElement(child, {
        onClick: (e: React.MouseEvent<HTMLButtonElement>) => {
          child.onClick && child.onClick(e);
          props.onChange &&
            props.onChange(e as unknown as ChangeEvent<HTMLInputElement>);
        },
      });
    });

    const selectedItem = React.Children.toArray(props.children).filter(
      (child: React.ReactElement) => child.props.value === value,
    )[0] as React.ReactElement;

    return (
      <>
        <Input
          ref={ref}
          componentName="Select"
          variant={props.variant ?? 'outlined'}
          endIcon={ArrowDownSharpFilled}
          onClick={handleOnClick}
          open={open}
          value={selectedItem.props.children}
          {...props}
        />
        <Menu
          open={open}
          onClose={() => setOpen(false)}
          anchorElement={ref}
          backdropProps={{bgColor: 'transparent'}}
          width="245px"
        >
          {clonedChildren}
        </Menu>
      </>
    );
  },
);

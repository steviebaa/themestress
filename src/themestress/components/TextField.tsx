import React, {MutableRefObject} from 'react';
import {ReactHTMLProps} from '../core/definitions';
import {InputBase, InputBaseProps} from './InputBase';

export interface TextFieldProps extends ReactHTMLProps<HTMLDivElement> {
  value?: string | number;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  defaultValue?: string | number;
  label?: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  disabled?: boolean;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  variant?: 'outlined' | 'filled';
}

export const TextField: React.FC<TextFieldProps> = React.forwardRef(
  (props: TextFieldProps, ref: MutableRefObject<HTMLDivElement>) => {
    return (
      <InputBase
        ref={ref}
        componentName="TextField"
        variant={props.variant ?? 'outlined'}
        {...props}
      />
    );
  },
);

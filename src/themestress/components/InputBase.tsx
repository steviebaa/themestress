import React, {MutableRefObject} from 'react';
import styled from '@emotion/styled';
import {css, Theme} from '@emotion/react';
import {ReactHTMLProps} from '../core/definitions';
import {getMarginAndPadding} from '../core/themeUtils';
import {ColorUtility} from '@themestress/core/classes/base/ColorUtility';

export interface InputBaseProps extends ReactHTMLProps<HTMLDivElement> {
  value?: string | number;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  defaultValue?: string | number;
  label?: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  disabled?: boolean;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  componentName: 'Select' | 'TextField';
  variant: 'outlined' | 'filled';
}

const baseStyles = ({
  theme,
  disabled,
  startIcon,
  componentName,
  variant,
}: InputBaseProps & {theme: Theme}) => {
  const outlined = variant === 'outlined';

  const iconAndLabelColor = disabled
    ? ColorUtility.hex.set.opacity(
        theme.palette.neutral.surface.on.hex,
        ColorUtility.fractionToHex(0.38),
      )
    : 'var(--sys-color-outline)';

  const backgroundColor = outlined ? 'transparent' : 'var(--sys-color-surface)';

  return css`
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.4375em;
    box-sizing: border-box;
    display: inline-flex;
    align-items: center;
    position: relative;
    height: 56px;
    width: 245px;

    > fieldset {
      > span._${componentName}-start-icon {
        cursor: default;
        color: ${iconAndLabelColor};
        padding-right: 12px;
        display: flex;
        align-items: center;
        > svg {
          fill: ${iconAndLabelColor};
          height: 24px;
          width: 24px;
        }
      }

      > span._${componentName}-end-icon {
        cursor: default;
        color: ${iconAndLabelColor};
        padding-left: 12px;
        display: flex;
        align-items: center;
        > svg {
          fill: ${iconAndLabelColor};
          height: 24px;
          width: 24px;
        }
      }

      display: flex;
      justify-content: space-between;
      flex-wrap: nowrap;
      width: 100%;
      border-style: solid;
      margin: 0px;
      padding: 0 12px;
      text-align: left;
      overflow: hidden;
      height: inherit;
      box-sizing: border-box;
      background-color: ${backgroundColor};
      border-radius: ${outlined ? '4px' : '4px 4px 0px 0px'};
      border-color: var(--sys-color-outline);
      border-width: ${outlined ? '1px' : '0px 0px 1px 0px'};

      :focus-within {
        border-color: var(--sys-color-primary);
        ${outlined ? `border-width: 2px;` : `border-bottom-width: 2px;`}

        > input {
          ~ legend {
            color: var(--sys-color-primary);
          }
        }
      }

      > input {
        font: inherit;
        letter-spacing: inherit;
        border: none;
        outline: none;
        box-sizing: content-box;
        background: none;
        height: 1.4375em;
        margin: 0;
        display: block;
        min-width: 0;
        animation-duration: 10ms;
        color: var(--sys-color-on-surface);
        width: 100px;
        flex-grow: 1;

        padding: 16.5px 14px;
        margin-left: -8px;
        margin-right: -8px;
        margin-top: -1px;

        ~ legend {
          transform: ${startIcon
            ? 'translate(36px, 28px)'
            : 'translateY(28px)'};

          color: ${outlined
            ? 'var(--sys-color-outline)'
            : 'var(--sys-color-on-surface)'};
        }

        :focus-visible {
          + legend {
            color: var(--sys-color-primary);
          }
        }

        :focus-visible,
        :not(:placeholder-shown) {
          ${!outlined &&
          `
            padding: 8px 14px;
            margin-top: auto;
            margin-bottom: 0;
          `}

          ~ legend {
            /* Transition-in times */
            transition: transform 150ms ease-in-out, font-size 150ms ease-in-out,
              max-width 400ms ease-in-out;
            max-width: 100%;
            font-size: 12px;
            font-weight: 500;

            ${outlined
              ? `
              transform: translateY(0px);
            `
              : `
              color: var(--sys-color-primary);
              transform: ${
                startIcon ? 'translate(36px, 16px)' : 'translateY(16px)'
              };
            `};
          }
        }
      }

      > legend {
        font-size: 16px;
        font-weight: 400;
        display: block;
        width: auto;
        padding: 0;
        height: 0px;
        white-space: nowrap;
        box-sizing: border-box;
        pointer-events: none;

        /* Transition-out times */
        transition: transform 150ms ease-in-out, font-size 150ms ease-in-out,
          max-width 30ms ease-in-out;

        max-width: 0.01px;

        > label {
          padding-left: 5px;
          padding-right: 5px;
          display: inline-block;
          transform: translateY(-50%);
          color: inherit;
        }
      }
    }
  `;
};

const disabledStyle = ({theme}: {theme: Theme}) => {
  const color = ColorUtility.hex.set.opacity(
    theme.palette.neutral.surface.on.hex,
    ColorUtility.fractionToHex(0.38),
  );

  // Targeting fieldset
  return css`
    border-color: ${color};
    > legend {
      color: ${color};
    }
  `;
};
const hoveredStyle = () => {
  // Targeting fieldset
  return css`
    :not(:disabled):hover:not(:focus-within) {
      border-color: var(--sys-color-on-surface);
    }
  `;
};
const focusedStyle = () => {
  // Targeting fieldset
  return css`
    border-color: var(--sys-color-primary);
  `;
};

const StyledTextField = styled.div<InputBaseProps>`
  ${baseStyles}

  @media (hover: hover) {
    fieldset:not(:disabled):hover {
      ${hoveredStyle}
    }
  }

  > fieldset:not(:disabled):focus-within {
    ${focusedStyle}
  }

  > fieldset:disabled {
    ${disabledStyle}
  }

  ${props => getMarginAndPadding(props)}
`;

export const InputBase: React.FC<InputBaseProps> = React.forwardRef(
  (
    {
      value,
      onChange,
      defaultValue,
      label,
      inputProps,
      ...props
    }: InputBaseProps,
    ref: MutableRefObject<HTMLDivElement>,
  ) => {
    return (
      <StyledTextField
        ref={ref}
        className={`_${props.componentName}`}
        {...props}
      >
        <fieldset disabled={props.disabled}>
          {props.startIcon && (
            <span className={`_${props.componentName}-start-icon`}>
              {props.startIcon}
            </span>
          )}

          <input
            disabled={props.disabled}
            placeholder=" "
            value={value}
            onChange={onChange}
            defaultValue={defaultValue}
            {...inputProps}
          />

          {props.endIcon && (
            <span className={`_${props.componentName}-end-icon`}>
              {props.endIcon}
            </span>
          )}

          <legend>
            <label>{label}</label>
          </legend>
        </fieldset>
      </StyledTextField>
    );
  },
);

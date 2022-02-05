import React from 'react';
import styled from '@emotion/styled';
import {getMarginAndPadding} from '../core/themeUtils';
import {ReactHTMLProps, TColor} from '../core/definitions';

type JustifyProps =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | 'start'
  | 'end'
  | 'left'
  | 'right'
  | 'inherit'
  | 'initial'
  | 'normal'
  | 'strech';

type AlignProps =
  | 'stretch'
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'baseline'
  | 'start'
  | 'end'
  | 'self-start'
  | 'self-end'
  | 'inherit'
  | 'initial'
  | 'normal'
  | 'strech';

export interface FlexProps extends ReactHTMLProps<HTMLDivElement> {
  children?: React.ReactNode;

  column?: boolean;
  row?: boolean;
  columnReverse?: boolean;
  rowReverse?: boolean;

  wrap?: boolean;
  wrapReverse?: boolean;

  fontColor?: TColor;
  bgColor?: TColor;

  width?: string;
  height?: string;

  justifyContent?: JustifyProps;
  alignItems?: AlignProps;
  alignSelf?: AlignProps;
  justifySelf?: JustifyProps;

  margin?: number;
  marginTop?: number;
  marginRight?: number;
  marginBottom?: number;
  marginLeft?: number;

  padding?: number;
  paddingTop?: number;
  paddingRight?: number;
  paddingBottom?: number;
  paddingLeft?: number;
}

const FlexContainer = styled.div<FlexProps & {$wrap: boolean}>`
  box-sizing: border-box;
  position: relative;
  display: flex;

  flex-direction: ${({column, row, columnReverse, rowReverse}) =>
    (column && 'column') ||
    (row && 'row') ||
    (columnReverse && 'column-reverse') ||
    (rowReverse && 'row-reverse') ||
    'initial'};

  flex-wrap: ${({$wrap, wrapReverse}) =>
    ($wrap && 'wrap') || (wrapReverse && 'wrap-reverse') || ''};

  width: ${({width}) => width || ''};
  height: ${({height}) => height || ''};

  align-items: ${({alignItems}) => alignItems || ''};
  justify-content: ${({justifyContent}) => justifyContent || ''};
  align-self: ${({alignSelf}) => alignSelf || ''};
  align-self: ${({justifyContent}) => justifyContent || ''};

  ${props => getMarginAndPadding(props)}

  color: inherit;
`;

export const Flex: React.FC<FlexProps> = ({wrap, ...props}: FlexProps) => {
  return (
    <FlexContainer className="_Flex" $wrap={wrap} {...props}></FlexContainer>
  );
};

import React from 'react';
import styled from '@emotion/styled';

import { Button, ButtonProps } from './Button';

export interface IconButtonProps extends ButtonProps {
  children?: React.ReactNode;
}

const StyledButton = styled(Button)`
  padding: 0px;
  width: 40px;
  height: 40px;
`;

export const IconButton: React.FC<IconButtonProps> = (
  props: IconButtonProps,
) => {
  return <StyledButton className="IconButton" {...props} />;
};

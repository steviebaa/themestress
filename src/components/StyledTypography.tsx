import React from 'react';
import styled from '@emotion/styled';
import {Typography, TypographyProps} from '@themestress/components';

export const P = styled((props: TypographyProps) => (
  <Typography
    variant="body-medium"
    {...props}
    marginBottom={3}
    fontSize="16px"
  />
))`
  margin-bottom: ${({theme}) => `${theme.spacing.size * 6}px`};
`;

export const Code = styled((props: TypographyProps) => (
  <Typography
    variant="label-small"
    fontSize="1rem"
    fontColor="var(--sys-color-on-secondary-container)"
    bgColor="var(--sys-color-secondary-container)"
    padding={2}
    {...props}
  />
))`
  font-family: monospace;
  border-radius: 4px;
`;

export const Subheading = styled.h2`
  margin-top: 48px;
`;

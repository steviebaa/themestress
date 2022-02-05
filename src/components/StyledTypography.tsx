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
  <Typography variant="label-small" fontSize="1rem" {...props} />
))``;

export const Subheading = styled.h2`
  margin-top: 48px;
`;

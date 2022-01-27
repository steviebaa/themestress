import React from 'react';
import styled from '@emotion/styled';
import {Typography, TypographyProps} from '@themestress/components';

export const P = styled((props: TypographyProps) => (
  <Typography variant="body1" {...props} marginBottom={3} fontSize="16px" />
))`
  margin-bottom: ${({theme}) => `${theme.spacing * 6}px`};
`;

export const Code = styled((props: TypographyProps) => (
  <Typography variant="code" fontSize="1rem" {...props} />
))``;

export const Subheading = styled.h2`
  margin-top: 48px;
`;

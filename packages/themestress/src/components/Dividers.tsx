import styled from '@emotion/styled';

export const Hr = styled.hr`
  background-color: ${({ theme }) => theme.palette.outline[theme.palette.mode]};

  border: none;
  height: 1px;
  margin: 8px 0rem;
  margin: ${({ theme }) => `${theme.spacing * 2}px 0px`};
`;

export const WideHr = styled(Hr)`
  margin: ${({ theme }) => `${theme.spacing * 6}px 0px`};
`;

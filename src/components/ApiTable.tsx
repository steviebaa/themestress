import React from 'react';
import styled from '@emotion/styled';
import {Link, useLocation} from 'react-router-dom';
import {apiProps} from '@core/apiProps';
import {cleanRoute} from '@core/routeMap';
import {Code, P, Subheading} from '@components/StyledTypography';
import {CodeBlock} from '@components/CodeBlock';
import {Spacer} from '@themestress/components';

const StyledCodeBlock = styled(CodeBlock)`
  display: inline-block;
  padding: 4px !important;
  > code {
    > span {
      color: white !important;
    }
  }
`;

const StyledColumn = styled.pre`
  white-space: pre-wrap;
  margin: 0;
`;

const StyledTable = styled.table`
  width: 100%;
  text-align: left;
  border-collapse: collapse;
  th,
  td {
    outline: none;
    border-bottom: ${({theme}) =>
      `1px solid ${theme.palette.neutral.tones[50].hex}`};
    padding: 12px 0px;
    padding-right: 12px;
  }
  td:nth-of-type(2) {
    color: #aa88ff;
    font-weight: 500;
  }
`;

interface ApiTableProps {
  heading?: string;
  lookup?: string;
}

export const ApiTable: React.FC<ApiTableProps> = ({heading, lookup}) => {
  const location = useLocation();
  const path = cleanRoute(location.pathname);
  const route = path.split('/').slice(-1)[0];

  const items: Array<string[]> = apiProps[lookup ?? route].props;
  const extensions: Array<string[]> = apiProps[lookup ?? route].extends;

  if (!items && !extensions) return null;

  return (
    <>
      <Subheading>{heading ?? 'API'}</Subheading>
      {extensions && (
        <P>
          Extends{' '}
          {extensions.map(v => (
            <Link to={`/components/${v.toString().toLowerCase()}`}>
              <Code>{v}</Code>
            </Link>
          ))}
        </P>
      )}

      {items && (
        <StyledTable>
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Default</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, i) => (
              <tr key={i}>
                {item.map((entry, i) => (
                  <td key={i}>
                    {i === 0 ? (
                      <StyledCodeBlock noCopy code={entry} />
                    ) : i === 1 ? (
                      <StyledColumn>{entry}</StyledColumn>
                    ) : i === 2 ? (
                      entry && <StyledCodeBlock noCopy code={entry} />
                    ) : (
                      entry
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </StyledTable>
      )}
      <Spacer vertical size="24px" />
    </>
  );
};

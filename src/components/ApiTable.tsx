import React from 'react';
import styled from '@emotion/styled';
import {useLocation} from 'react-router-dom';
import {Spacer} from '@themestress/components';
import {apiProps} from '@core/apiProps';
import {Subheading} from '@components/StyledTypography';
import {cleanRoute} from '../core/routeMap';
import {TypeScript} from './TypeScript';

const CodeBlock = styled(TypeScript)`
  display: inline-block;
  padding: 4px !important;
  > code {
    > span {
      color: white !important;
    }
  }
`;

const Column2 = styled.pre`
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

  if (!items) return null;

  return (
    <>
      <Subheading>{heading ?? 'API'}</Subheading>

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
                    <CodeBlock noCopy code={entry} />
                  ) : i === 1 ? (
                    <Column2>{entry}</Column2>
                  ) : i === 2 ? (
                    entry && <CodeBlock noCopy code={entry} />
                  ) : (
                    entry
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </StyledTable>
      <Spacer vertical size="24px" />
    </>
  );
};

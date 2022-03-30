import React from 'react';
import styled from '@emotion/styled';
import {ApiTable} from '@components/ApiTable';
import {PageHeader} from '@components/ImportSample';
import {P} from '@components/StyledTypography';
import {SampleBox} from '@components/SampleBox';
import {CodeBlock} from '@components/CodeBlock';
import {Typography, TypographyRole} from '@themestress/components';
import {samples} from '@core/samples';

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  th,
  td {
    border-bottom: 1px solid grey;
    :nth-of-type(1) {
      text-align: left;
      padding-right: 12px;
    }
    :nth-of-type(2) {
      padding-left: 12px;
      text-align: left;
    }
  }
  th {
    padding-bottom: 12px;
  }
  td {
    :nth-of-type(1) {
      font-family: monospace;
      font-weight: 400;
      font-size: 1rem;
      background-color: rgb(0, 0, 0, 0.1);
      padding: 12px;
    }
  }
`;

export const TypographyPage = () => {
  return (
    <>
      <PageHeader />

      <P>Styled typography that hooks into the theme.</P>

      <SampleBox>
        <StyledTable>
          <thead>
            <tr>
              <th>Variant</th>
              <th>Style</th>
            </tr>
          </thead>
          <tbody>
            {['Display', 'Headline', 'Title', 'Label', 'Body'].map(level => {
              return ['Large', 'Medium', 'Small'].map(size => {
                const variant = `${level}-${size}`.toLowerCase();
                return (
                  <tr key={variant}>
                    <td>{variant}</td>
                    <td>
                      <Typography variant={variant as TypographyRole}>
                        {`${level} ${size}`}
                      </Typography>
                    </td>
                  </tr>
                );
              });
            })}
          </tbody>
        </StyledTable>
      </SampleBox>

      <CodeBlock code={samples.typography.overview} />

      <ApiTable />
    </>
  );
};

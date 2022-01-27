import React from 'react';
import styled from '@emotion/styled';
import {ApiTable} from '@components/ApiTable';
import {PageHeader} from '@components/ImportSample';
import {P} from '@components/StyledTypography';
import {SampleBox} from '@components/SampleBox';
import {TypeScript} from '@components/TypeScript';
import {Typography, TypographyProps} from '@themestress/components';
import {samples} from '@core/samples';

const StyledTable = styled.table`
    border-collapse: collapse;
    th, td {
      border-bottom: 1px solid grey;
			:nth-of-type(1) {
				text-align: right;
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
				font-size: 20px;
				background-color: rgb(0,0,0,0.1);
				padding: 12px;
			}
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
            {['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].map((v, i) => (
              <tr key={v}>
                <td>{v}</td>
                <td>
                  <Typography variant={v as TypographyProps['variant']}>
                    Heading {i + 1}
                  </Typography>
                </td>
              </tr>
            ))}
            <tr>
              <td>subtitle1</td>
              <td>
                <Typography variant="subtitle1">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </Typography>
              </td>
            </tr>
            <tr>
              <td>subtitle2</td>
              <td>
                <Typography variant="subtitle2">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </Typography>
              </td>
            </tr>
            <tr>
              <td>body1</td>
              <td>
                <Typography variant="body1">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Nesciunt aliquam, cupiditate inventore aspernatur tempore ea
                  impedit dolores perspiciatis unde praesentium, molestiae
                  consequatur. Vel nulla officia debitis error laboriosam
                  perspiciatis accusantium.
                </Typography>
              </td>
            </tr>
            <tr>
              <td>body2</td>
              <td>
                <Typography variant="body2">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Nesciunt aliquam, cupiditate inventore aspernatur tempore ea
                  impedit dolores perspiciatis unde praesentium, molestiae
                  consequatur. Vel nulla officia debitis error laboriosam
                  perspiciatis accusantium.
                </Typography>
              </td>
            </tr>
            <tr>
              <td>button</td>
              <td>
                <Typography variant="button">Button Text</Typography>
              </td>
            </tr>
            <tr>
              <td>caption</td>
              <td>
                <Typography variant="caption">Caption Text</Typography>
              </td>
            </tr>
            <tr>
              <td>overline</td>
              <td>
                <Typography variant="overline">overline text</Typography>
              </td>
            </tr>
            <tr>
              <td>code</td>
              <td>
                <Typography variant="code">
                  console.log("Hello Themestress")
                </Typography>
              </td>
            </tr>
          </tbody>
        </StyledTable>
      </SampleBox>

      <TypeScript code={samples.typography.overview} />

      <ApiTable />
    </>
  );
};
// 	<Typography variant="button">button - Button text</Typography>
// 	<Typography variant="caption">
// 		<Typography variant="code" uppercase={false}>
// 			caption
// 		</Typography>{' '}
// 		- Caption text
// 	</Typography>
// 	{/*  */}
// 	<Typography variant="code" uppercase={false}>
// 		overline
// 	</Typography>{' '}
// 	- <Typography variant="overline">Overline text</Typography>
// 	{/*  */}
// 	<Typography>
// 		<Typography variant="code">code</Typography> -{' '}
// 		<Typography variant="code">
// 			console.log("Hello Themestress")
// 		</Typography>
// 	</Typography>
// </Flex> */}

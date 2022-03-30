import React from 'react';
import styled from '@emotion/styled';
import {samples} from '@core/samples';
import {P, Code, Subheading} from '@components/StyledTypography';
import {SampleBox} from '@components/SampleBox';
import {CodeBlock} from '@components/CodeBlock';
import {FAB, Flex, Tooltip} from '@themestress/components';
import {ApiTable} from '@components/ApiTable';
import {PageHeader} from '@components/ImportSample';

const FABDemo = styled(FAB)`
  position: relative;
`;

export const FABPage = () => {
  const composeIcon = (
    <svg viewBox="0 0 24 24">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.06 3.59L20.41 4.94C21.2 5.72 21.2 6.99 20.41 7.77L7.18 21H3V16.82L13.4 6.41L16.23 3.59C17.01 2.81 18.28 2.81 19.06 3.59ZM5 19L6.41 19.06L16.23 9.23L14.82 7.82L5 17.64V19Z"
      />
    </svg>
  );

  const plusIcon = (
    <svg viewBox="0 0 24 24">
      <path d="M16 13H13V20H11V13H4V11H11V4H13V11H20V13Z"></path>
    </svg>
  );

  return (
    <>
      <Tooltip
        direction="left"
        tip={<Code>{`<FAB fixed position="bottom-right">...`}</Code>}
      >
        <FAB fixed position="bottom-right" icon={plusIcon} />
      </Tooltip>

      <PageHeader />

      <SampleBox>
        <Flex row wrap justifyContent="center" alignItems="center">
          <Tooltip tip={<Code>{`icon={icon}`}</Code>}>
            <FABDemo margin={2} icon={composeIcon} />
          </Tooltip>

          <br />

          <Tooltip tip={<Code>{`<Fab icon={icon}>Extended</Fab>`}</Code>}>
            <FABDemo margin={2} icon={composeIcon}>
              Extended
            </FABDemo>
          </Tooltip>
        </Flex>
      </SampleBox>

      <CodeBlock code={samples.fab.overview} />

      <Subheading>Customizing</Subheading>
      <P>Hover a button to see the prop used.</P>
      <SampleBox>
        <Flex row wrap justifyContent="center" alignItems="center">
          <Tooltip tip={<Code>{`small={true}`}</Code>}>
            <FABDemo margin={2} icon={composeIcon} small />
          </Tooltip>

          <Tooltip tip={<Code>{`large={true}`}</Code>}>
            <FABDemo margin={2} icon={composeIcon} large />
          </Tooltip>

          <br />

          <Tooltip tip={<Code>{`disabled={true}`}</Code>}>
            <FABDemo margin={2} icon={composeIcon} disabled>
              Extended
            </FABDemo>
          </Tooltip>
        </Flex>
      </SampleBox>

      <ApiTable />
    </>
  );
};

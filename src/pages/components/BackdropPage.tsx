import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {samples} from '@core/samples';
import {Code, P} from '@components/StyledTypography';
import {SampleBox} from '@components/SampleBox';
import {CodeBlock} from '@components/CodeBlock';
import {
  Typography,
  Backdrop,
  Flex,
  ElevatedButton,
} from '@themestress/components';
import {ApiTable} from '@components/ApiTable';
import {PageHeader} from '@components/ImportSample';

export const BackdropPage = () => {
  const [open, setOpen] = useState(false);

  const toggleBackdrop = () => {
    setOpen(prev => !prev);
  };

  return (
    <>
      <PageHeader />
      <P>
        Made for internal use such as in the{' '}
        <Link to="/components/basicdialog">
          <Code>{'<BasicDialog/>'}</Code>
        </Link>{' '}
        component however, it might be helpful when creating custom components.
      </P>

      <P>It is only intended to be used to add an overlay to the viewport.</P>

      <SampleBox>
        <ElevatedButton onClick={toggleBackdrop}>Open Backdrop</ElevatedButton>
        <Backdrop
          open={open}
          onClick={toggleBackdrop}
          bgColor={'rgb(0,0,0,0.8)'}
        >
          <Flex
            alignItems="center"
            width="100vw"
            height="100vh"
            justifyContent="center"
          >
            <Typography fontSize="24px" bold fontColor="white">
              Now Click Me!
            </Typography>
          </Flex>
        </Backdrop>
      </SampleBox>

      <CodeBlock code={samples.backdrop.overview} />

      <ApiTable />
    </>
  );
};

import React from 'react';
import {SampleBox} from '@components/SampleBox';
import {Code, P, Subheading} from '@components/StyledTypography';
import {TypeScript} from '@components/TypeScript';
import {samples} from '@core/samples';
import {ApiTable} from '@components/ApiTable';
import {PageHeader} from '@components/ImportSample';
import {Button, Typography} from '@themestress/components';
import {useSnackbar} from '@themestress/core/hooks';

export const SnackbarPage = () => {
  const snackbar = useSnackbar();

  return (
    <>
      <PageHeader
        importCode={`import {SnackbarProvider} from '@themestress/components/Snackbar'
import {useSnackbar} from '@themestress/core/hooks'`}
      />

      <P>Provide notification-style feedback on the page.</P>

      <P>
        Wrap the app in the <Code>{'<SnackbarProvider/>'}</Code> component. Then
        from within any functional components, the <Code>useSnackbar</Code> hook
        will give you access to the snackbar store.
      </P>

      <SampleBox>
        <Button
          variant="contained"
          onClick={() => snackbar.enqueue({content: 'Did you know...'})}
        >
          Default
        </Button>
        <Button
          bgColor={'success'}
          fontColor={'white'}
          onClick={() =>
            snackbar.enqueue({content: 'Great Job!', variant: 'success'})
          }
        >
          Success
        </Button>
        <Button
          bgColor={'warning'}
          onClick={() =>
            snackbar.enqueue({content: 'Be Careful!', variant: 'warning'})
          }
        >
          Warning
        </Button>
        <Button
          bgColor={'error'}
          onClick={() => snackbar.enqueue({content: 'Oops!', variant: 'error'})}
        >
          Error
        </Button>
        <Button
          bgColor={'info'}
          onClick={() =>
            snackbar.enqueue({
              content: 'Wow, such informative',
              variant: 'info',
            })
          }
        >
          Info
        </Button>
      </SampleBox>
      <TypeScript code={samples.snackbar.overview} />

      <Subheading>Roadmap</Subheading>
      <ul>
        <Typography fontSize="16px">
          <li>
            Create lifecycle methods for the snack (create, expand, contract,
            slideIn, slideOut, dismiss) for more control of the snack allowing
            interactive snacks.
          </li>
        </Typography>
        <Typography fontSize="16px">
          <li>Directions for slideIn and slideOut.</li>
        </Typography>
      </ul>

      <ApiTable heading="API - SnackbarProvider" />
      <ApiTable
        heading="API - useSnackbar (enqueue options)"
        lookup="usesnackbar"
      />
    </>
  );
};

export const Dashboard = () => {
  const snackbar = useSnackbar();

  return (
    <Button
      bgColor={'success'}
      onClick={() =>
        snackbar.enqueue({
          content: 'Great Job!',
          variant: 'success',
          duration: 2000,
        })
      }
    >
      Success
    </Button>
  );
};

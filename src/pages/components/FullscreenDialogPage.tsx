import React, {useState} from 'react';
import {P} from '@components/StyledTypography';
import {samples} from '@core/samples';
import {SampleBox} from '@components/SampleBox';
import {CodeBlock} from '@components/CodeBlock';
import {ApiTable} from '@components/ApiTable';
import {PageHeader} from '@components/ImportSample';
import {useSnackbar} from '@themestress/core/hooks';
import {
  FullscreenDialog,
  Typography,
  Divider,
  Flex,
  ElevatedButton,
  OutlinedButton,
  FilledButton,
} from '@themestress/components';

export const FullscreenDialogPage = () => {
  const [open, setOpen] = useState(false);
  const toggleModal = () => setOpen(prev => !prev);
  const snackbar = useSnackbar();

  return (
    <>
      <PageHeader />
      <P>Present a modal.</P>

      <SampleBox>
        <ElevatedButton onClick={toggleModal}>Change Plan</ElevatedButton>

        <FullscreenDialog open={open}>
          <Flex column width="md">
            <Typography variant="title-large">Change Plan</Typography>

            <Divider margin={0} />

            <Typography variant="body-large">
              Are you sure you want to update you plan details?
            </Typography>

            <Flex justifyContent="flex-end">
              <FilledButton
                onClick={() => {
                  toggleModal();
                  snackbar.enqueue({
                    content: 'Details updated 🎉',
                    variant: 'success',
                  });
                }}
                margin={2}
                marginRight={0}
              >
                Confirm
              </FilledButton>

              <OutlinedButton onClick={() => toggleModal()} margin={2}>
                Cancel
              </OutlinedButton>
            </Flex>
          </Flex>
        </FullscreenDialog>
      </SampleBox>

      <CodeBlock collapsable code={samples.basicdialog.overview} />

      <ApiTable />
    </>
  );
};

export const ChangePayment = () => {
  const [open, setOpen] = useState(false);
  const toggleModal = () => setOpen(prev => !prev);
  const snackbar = useSnackbar();

  return (
    <>
      <ElevatedButton onClick={toggleModal}>Change Plan</ElevatedButton>

      <FullscreenDialog open={open}>
        <Flex column width="md">
          <Typography variant="title-large">Change Plan</Typography>

          <Divider margin={0} />

          <Typography variant="body-large">
            Are you sure you want to update you plan details?
          </Typography>

          <Flex justifyContent="flex-end">
            <FilledButton
              onClick={() => {
                toggleModal();
                snackbar.enqueue({
                  content: 'Details updated 🎉',
                  variant: 'success',
                });
              }}
              margin={2}
              marginRight={0}
            >
              Confirm
            </FilledButton>

            <OutlinedButton onClick={() => toggleModal()} margin={2}>
              Cancel
            </OutlinedButton>
          </Flex>
        </Flex>
      </FullscreenDialog>
    </>
  );
};

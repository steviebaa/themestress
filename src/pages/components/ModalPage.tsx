import React, {useState} from 'react';
import {P} from '@components/StyledTypography';
import {SampleBox} from '@components/SampleBox';
import {
  Modal,
  Button,
  Typography,
  Divider,
  Flex,
} from '@themestress/components';
import {useSnackbar} from '@themestress/core/hooks';
import {TypeScript} from '../../components/TypeScript';
import {samples} from '../../core/samples';
import {ApiTable} from '@components/ApiTable';
import {PageHeader} from '@components/ImportSample';

export const ModalPage = () => {
  const [open, setOpen] = useState(false);
  const toggleModal = () => setOpen(prev => !prev);
  const snackbar = useSnackbar();

  return (
    <>
      <PageHeader />
      <P>Use a React portal to present a modal.</P>

      <SampleBox>
        <Button variant="contained" onClick={toggleModal}>
          Change Plan
        </Button>

        <Modal open={open} onClickAway={toggleModal} width={'xs'}>
          <Flex column>
            <Typography variant="h5" margin={4}>
              Change Plan
            </Typography>

            <Divider margin={0} />

            <Typography fontSize="16px" margin={4}>
              Are you sure you want to update you plan details?
            </Typography>

            <Flex justifyContent="flex-end">
              <Button
                onClick={() => {
                  toggleModal();
                  snackbar.enqueue({
                    content: 'Details updated 🎉',
                    variant: 'success',
                  });
                }}
                variant="contained"
                margin={2}
                marginRight={0}
              >
                Confirm
              </Button>

              <Button
                onClick={() => toggleModal()}
                variant="outlined"
                margin={2}
              >
                Cancel
              </Button>
            </Flex>
          </Flex>
        </Modal>
      </SampleBox>

      <TypeScript collapsable code={samples.modal.overview} />

      <ApiTable />
    </>
  );
};

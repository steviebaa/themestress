import React from 'react';
import {Code, P} from '@components/StyledTypography';
import {SampleBox} from '@components/SampleBox';
import {
  ContextMenu,
  Typography,
  MenuItem,
  Surface,
} from '@themestress/components';
import {TypeScript} from '@components/TypeScript';
import {samples} from '@core/samples';
import {useSnackbar} from '@themestress/core/hooks';
import {ApiTable} from '@components/ApiTable';
import {PageHeader} from '@components/ImportSample';

export const ContextMenuPage = () => {
  const snackbar = useSnackbar();

  const handleClick = (e: React.MouseEvent) => {
    const text = e.currentTarget.children[1].textContent;
    snackbar.enqueue({
      content: `${text} clicked!`,
      variant: 'success',
      duration: 4000,
    });
  };

  return (
    <>
      <PageHeader />
      <P>
        The ContextMenu is a wrapper for any number of components. It will clone
        all children that are passed to it and attach an additional function to
        the onContextMenu prop. For this reason, the children should not be
        wrapped in a React Fragment.
      </P>
      <P>
        When right clicked, it will open a context menu. Try right clicking each
        Paper component below.
      </P>

      <SampleBox>
        <ContextMenu
          width="100px"
          items={[
            <MenuItem key={'a'} onClick={handleClick}>
              Open
            </MenuItem>,
            <MenuItem key={'b'} onClick={handleClick}>
              Save
            </MenuItem>,
          ]}
        >
          <Surface variant="outlined" padding={3}>
            <Typography variant="body1" fontSize="18px" margin={0}>
              Right Click Me!
            </Typography>
          </Surface>

          <Surface
            variant="outlined"
            padding={3}
            onContextMenu={() =>
              snackbar.enqueue({
                content: 'The existing onContextMenu function was also called!',
                variant: 'info',
                duration: 4000,
              })
            }
          >
            <Typography variant="body1" fontSize="18px" margin={0}>
              I already have an <Code>onContextMenu</Code> prop.
            </Typography>
          </Surface>
        </ContextMenu>
      </SampleBox>
      <TypeScript code={samples.contextmenu.overview} />

      <ApiTable />
    </>
  );
};

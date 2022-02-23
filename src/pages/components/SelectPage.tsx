import React, {useRef} from 'react';
import {Link} from 'react-router-dom';
import styled from '@emotion/styled';
import {samples} from '@core/samples';
import {Code, P, Subheading} from '@components/StyledTypography';
import {SampleBox} from '@components/SampleBox';
import {TypeScript} from '@components/TypeScript';
import {ApiTable} from '@components/ApiTable';
import {PageHeader} from '@components/ImportSample';
import {Select, Divider} from '@themestress/components';

import FolderIcon from '@themestress/icons/FolderOutlined';
import ImportIcon from '@themestress/icons/FileDownloadOutlined';
import SmallRightArrowIcon from '@themestress/icons/ArrowRightOutlined';

export const SelectPage = () => {
  // const anchorEl = useRef(null);

  return (
    <>
      <PageHeader />
      <P>
        The <Code>MenuItem</Code> is a styled <Code>TextButton</Code> for use in
        the <Code>Menu</Code> component.
      </P>

      <SampleBox contrast>
        <Select></Select>
      </SampleBox>
      {/* <TypeScript code={samples.menuitem.overview} /> */}

      <Subheading>API</Subheading>

      {/* <ApiTable /> */}
    </>
  );
};

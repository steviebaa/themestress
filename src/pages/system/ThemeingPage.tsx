import React from 'react';
import {PageHeader} from '@components/ImportSample';
import {Code, P} from '../../components/StyledTypography';
import {Paper} from '../../themestress/components';
import ThemeInImage from '@assets/img/theme-in.png';
import ThemeOutImage from '@assets/img/theme-out.png';
import styled from '@emotion/styled';

const ClippedPaper = styled(Paper)`
  overflow: hidden;
`;

export const ThemeingPage = () => {
  return (
    <>
      <PageHeader
        importCode={`import {ThemeProvider} from '@emotion/react'
import {createTheme} from '@themestress/core';`}
      />

      <P>
        Themestress uses the <Code>ThemeProvider</Code> component from the{' '}
        <Code>@emotion/react</Code> package.
      </P>

      <P>
        The <Code>createTheme</Code> function takes a <Code>Palette</Code>{' '}
        object and returns an object with defaults and calculated colors.
      </P>

      <P>For example, you might pass in the following object:</P>

      <ClippedPaper elevation={6}>
        <img
          width={'100%'}
          style={{marginBottom: '-4px', marginRight: '-8px'}}
          src={ThemeInImage}
        />
      </ClippedPaper>

      <P>
        And the image below is what will be returned. Any of these values can be
        manually set in the input object.
      </P>

      <ClippedPaper elevation={6}>
        <img
          width={'100%'}
          style={{marginBottom: '-4px', marginRight: '-8px'}}
          src={ThemeOutImage}
        />
      </ClippedPaper>
    </>
  );
};

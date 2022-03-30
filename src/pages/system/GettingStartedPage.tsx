import React from 'react';
import {Code, P, Subheading} from '@components/StyledTypography';
import {CodeBlock} from '@components/CodeBlock';

export const GettingStartedPage = () => {
  return (
    <>
      <Subheading>Purpose</Subheading>
      <P>
        The intention of Themestress is to be a baseline of components built to{' '}
        <a href="https://material.io">Google's Material Design 3</a>{' '}
        specification. The library is inspired by{' '}
        <a href="https://mui.com">Material UI</a> which follows the Material
        Design 2 guideline.
      </P>
      <Subheading>Install</Subheading>
      <P>
        The code is{' '}
        <a href="https://github.com/steviebaa/themestress">open source</a>, so
        you can use the library by copying the <Code>src/themestress</Code>{' '}
        directory to your project or by installing it via NPM.
      </P>
      <P>
        Themestress uses <a href="https://emotion.sh/">Emotion</a> to provide an
        easy styling experience.
      </P>
      The latest version of Themestress is not yet available on NPM. It will be
      very soon.
      {/* <CodeBlock
        lang="tsx"
        code="$ npm install themestress @emotion/styled @emotion/react"
      /> */}
      <Subheading>Contributing</Subheading>
      <P>
        Pull requests are more than welcome{' '}
        <a href="https://github.com/steviebaa/themestress">the project</a>.
        Please make sure to stick to the coding style used throughout the
        project.
      </P>
      There is a kanban board for the project on Trello, which you can join via
      this{' '}
      <a href="https://trello.com/invite/b/g4lXCoyv/1e856d21572b5e29b6a0ecd26e26364e/themestress">
        invite link
      </a>
      .<P>To make a PR, follow the steps below:</P>
      <ol>
        <li>Clone the project from GitHub</li>
        <li>Create a new branch</li>
        <li>Make your changes</li>
        <li>Commit your changes</li>
        <li>Push your changes to the branch</li>
        <li>Open a pull request</li>
      </ol>
    </>
  );
};

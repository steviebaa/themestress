import React from 'react';
import {P, Subheading} from '@components/StyledTypography';
import {TypeScript} from '@components/TypeScript';

export const GettingStartedPage = () => {
  return (
    <>
      <Subheading>Themestress</Subheading>
      <P>
        Themestress is a theming and components library inspired by{' '}
        <a href="https://material.io">Google Material Design</a> and{' '}
        <a href="https://mui.com">Material UI</a>.
      </P>

      <Subheading>Install</Subheading>
      <P>
        Themestress uses <a href="https://emotion.sh/">Emotion</a> to provide an
        easy styling experience.
      </P>

      <TypeScript
        code={`npm install themestress @emotion/styled @emotion/react`}
      />
    </>
  );
};

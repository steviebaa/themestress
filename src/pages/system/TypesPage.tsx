import React from 'react';
import {Code, P, Subheading} from '@components/StyledTypography';
import {TypeScript} from '../../components/TypeScript';

export const TypesPage = () => {
  return (
    <>
      <P>
        You can find some of the important type definition for many of the types
        specified in the API tables below.
      </P>

      <P>
        For any others, check the <Code>definitions.d.ts</Code> file in{' '}
        <Code>themestress/core</Code>
      </P>

      <Subheading>BreakPointEnum</Subheading>
      <TypeScript noCopy
        code={`enum BreakPointEnum {
  'xs' = 'xs',
  'sm' = 'sm',
  'md' = 'md',
  'lg' = 'lg',
  'xl' = 'xl',
}

type BreakPoint = keyof typeof BreakPointEnum | string`}
      />

      <Subheading>Transform</Subheading>
      <TypeScript noCopy
        code={`interface Transform {
  vertical?: 'top' | 'center' | 'bottom' | (string & {});
  horizontal?: 'left' | 'center' | 'right' | (string & {});
}`}
      />

      <Subheading>TColor</Subheading>
      <P>TColor can be a few things.</P>
      <TypeScript noCopy
        code={`// Any html color
"red"

// A palette key
"primary" | "secondary" | ...

// or an array defining a path in the palette
["secondary", "main"]
["secondary", "light"]
["neutral", 200, "on"]
["outline", "dark"]`}
      />
    </>
  );
};

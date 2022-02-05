import React from 'react';
import styled from '@emotion/styled';
import {Code, P} from '@components/StyledTypography';
import ThemeOutImage from '@assets/img/theme-out.png';
import {Surface} from '@themestress/components';

const ClippedPaper = styled(Surface)`
  overflow: hidden;
`;

export const PalettePage = () => {
  return (
    <>
      <P>
        The Palette is where you can define your color scheme and set the
        baseline as Light Mode or Dark Mode.
      </P>

      <P>
        Color objects typically contain <Code>main</Code>,<Code>on</Code>,
        <Code>light</Code> and <Code>dark</Code>. If an <Code>on</Code> color is
        not provided, one will be calculated based on main.
      </P>

      <P>
        Currently, the <Code>light</Code> and <Code>dark</Code> properties are
        not considered in the components. They are there for the developer to
        use when required.
      </P>

      <P>
        The <Code>neutral</Code> object has an extra layer where it defines
        multiple shades.
      </P>

      <P>
        By setting the <Code>mode</Code> key to <Code>light | dark</Code>, the
        palette will start from a different theme.
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

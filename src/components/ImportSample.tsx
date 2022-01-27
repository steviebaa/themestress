import React from 'react';
import {useLocation} from 'react-router-dom';
import {getPageFromRoute} from '@core/routeMap';
import {TypeScript} from '@components/TypeScript';
import {Subheading} from '@components/StyledTypography';

interface ImportSampleProps {
  importCode?: string;
}

export const PageHeader = ({importCode: code}: ImportSampleProps) => {
  const location = useLocation();
  const info = getPageFromRoute(location.pathname);

  return (
    <>
      <Subheading>Import</Subheading>

      <TypeScript
        code={code ?? `import {${info.name}} from 'themestress/components';`}
      />

      <Subheading>Overview</Subheading>
    </>
  );
};

import React, {useEffect, useRef, useState} from 'react';
import styled from '@emotion/styled';
import {Flex, ElevatedButton} from '@themestress/components';

import Prism from 'prismjs';
import '@core/styles/prism.css';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-tsx';

interface TypeScriptProps {
  code?: string;
  collapsable?: boolean;
  noCopy?: boolean;
}

const Pre = styled.pre<{restrictHeight: number}>`
  position: relative;
  margin-top: 0;
  border-radius: ${({theme}) => `${theme.spacing}px !important`};
  max-height: ${({restrictHeight}) => (restrictHeight ? '185px' : '1000px')};
  transition: max-height 300ms ease-in-out;
`;

export const TypeScript = React.memo(
  ({code, collapsable, noCopy, ...props}: TypeScriptProps) => {
    const ref = useRef(null);
    const [isCollapsed, setIsCollapsed] = useState<boolean>(collapsable);

    useEffect(() => {
      if (ref.current) {
        Prism.highlightElement(ref.current);
      }
    }, [ref.current, code]);

    const toggleCollapse = () => {
      setIsCollapsed(prev => !prev);
      setTimeout(() => {
        Prism.highlightElement(ref && ref.current);
      }, 5);
    };

    const restrictHeight = collapsable && isCollapsed;

    return (
      <>
        <Flex justifyContent="flex-end" height="fit-content">
          {collapsable && (
            <ElevatedButton onClick={toggleCollapse}>
              {isCollapsed ? 'Expand' : 'Collapse'}
            </ElevatedButton>
          )}

          {!noCopy && (
            <ElevatedButton onClick={() => navigator.clipboard.writeText(code)}>
              Copy
            </ElevatedButton>
          )}
        </Flex>
        <Pre restrictHeight={restrictHeight ? 1 : 0} {...props}>
          <code className="language-tsx" ref={ref}>
            {code}
          </code>
        </Pre>
      </>
    );
  },
);

import React, {forwardRef} from 'react';
import {Surface, Flex} from '@themestress/components';

interface SampleBoxProps {
  children?: React.ReactNode;
  contrast?: boolean;
}

export const SampleBox = forwardRef<HTMLDivElement, SampleBoxProps>(
  ({children, contrast, ...props}, ref) => {
    return (
      <Surface
        ref={ref}
        variant="outlined"
        padding={6}
        radius={4}
        bgColor={contrast ? 'var(--sys-color-inverse-on-surface)' : ''}
        {...props}
      >
        <Flex justifyContent="space-around" {...props}>
          {children}
        </Flex>
      </Surface>
    );
  },
);

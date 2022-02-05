import React from 'react';
import {Surface, Flex} from '@themestress/components';

interface SampleBoxProps {
  children?: React.ReactNode;
}

export const SampleBox: React.FC<SampleBoxProps> = ({
  children,
  ...props
}: SampleBoxProps) => {
  return (
    <Surface variant="outlined" padding={6} radius={4}>
      <Flex justifyContent="space-around" {...props}>
        {children}
      </Flex>
    </Surface>
  );
};

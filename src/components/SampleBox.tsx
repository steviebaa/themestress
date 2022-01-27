import React from 'react';
import {Paper, Flex} from '@themestress/components';

interface SampleBoxProps {
  children?: React.ReactNode;
}

export const SampleBox: React.FC<SampleBoxProps> = ({
  children,
  ...props
}: SampleBoxProps) => {

  return (
    <Paper variant="outlined" padding={6}>
      <Flex justifyContent="space-around" {...props}>
        {children}
      </Flex>
    </Paper>
  );
};

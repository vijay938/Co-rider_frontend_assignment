import React from 'react';
import { Spinner, Box, Center } from '@chakra-ui/react';

const Loader = () => {
  return (
    <Center>
      <Box mt={8}>
        <Spinner size="lg" color="blue.500" />
      </Box>
    </Center>
  );
};

export default Loader;

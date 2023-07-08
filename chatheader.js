import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';

const ChatHeader = () => {
  return (
    <Flex
      align="center"
      justify="space-between"
      bg="gray.800"
      py={2}
      px={4}
      color="white"
    >
      <Text fontSize="lg" fontWeight="bold">
        Chat App
      </Text>
      {/* Add the three-dots menu here */}
    </Flex>
  );
};

export default ChatHeader;

import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const ChatMessage = ({ chat }) => {
  return (
    <Box bg="white" p={4} boxShadow="md" borderRadius="md">
      <Text fontWeight="bold" mb={2}>
        {chat.sender}
      </Text>
      <Text>{chat.message}</Text>
    </Box>
  );
};

export default ChatMessage;

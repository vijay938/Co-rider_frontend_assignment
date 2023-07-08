import React from 'react';
import { Box, VStack } from '@chakra-ui/react';
import ChatMessage from './ChatMessage';
import Loader from './Loader';

const ChatList = ({ chatData, loading }) => {
  if (loading) {
    return <Loader />;
  }

  return (
    <VStack spacing={2} align="stretch" p={4}>
      {chatData.map((chat) => (
        <ChatMessage key={chat.id} chat={chat} />
      ))}
    </VStack>
  );
};

export default ChatList;

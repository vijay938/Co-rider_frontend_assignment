import React, { useEffect, useState } from 'react';
import { ChakraProvider, Box } from '@chakra-ui/react';
import ChatHeader from './components/chatheader';
import ChatList from './components/chatlist';
import { fetchChatData } from './api';

const App = () => {
  const [chatData, setChatData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await fetchChatData(page);
        setChatData((prevChatData) => [...prevChatData, ...data]);
        setLoading(false);
      } catch (error) {
        console.error('Error while fetching chat data:', error);
      }
    };

    fetchData();
  }, [page]);

  const handleScroll = (event) => {
    const { scrollTop, clientHeight, scrollHeight } = event.currentTarget;
    if (scrollTop + clientHeight >= scrollHeight * 0.8) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <Box h="100vh" overflowY="auto" onScroll={handleScroll}>
      <ChatHeader />
      <ChatList chatData={chatData} loading={loading} />
    </Box>
  );
};

const RootApp = () => (
  <ChakraProvider>
    <App />
  </ChakraProvider>
);

export default RootApp;

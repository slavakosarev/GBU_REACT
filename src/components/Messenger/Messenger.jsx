import { useEffect, useState } from 'react';
import { useParams, Navigate, Outlet } from 'react-router-dom';
import { MessageList } from './MessageList';
import { MessageInput } from './MessageInput';
import { CHATS } from '../../mocks/chats'



export const Messenger = () => {
   const { chatId } = useParams();
   const [messageList, setMessageList] = useState([]);
   const sendMessage = (autor, text) => {
      const newMessageList = [...messageList];
      const newMessage = {
         autor,
         text,
         id: Date.now()
      };
      newMessageList.push(newMessage);
      setMessageList(newMessageList);
   };
   
   const onSendMessage = (value) => {
      sendMessage('user', value);
   };

   useEffect(() => {
      if (messageList.length === 0) {
         return
      }
      const lastMessage = messageList[messageList.length - 1];
      if (lastMessage.autor === 'bot') {
         return
      }
      
      setTimeout(() => sendMessage('bot', 'hello'), 1500);
   }, [messageList, sendMessage]);

   if (!CHATS.find(({ id }) => id === chatId)) {
      return CHATS ? <Outlet /> : <Navigate to="/chats" />
   }

   return (
      <>
         <MessageList messageList={messageList} />
         <MessageInput onSend={onSendMessage} />
      </>
      
   )
};
import { useEffect, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { MessageList } from '../../components/Message/MessageList';
import { MessageInput } from '../../components/Message/MessageInput';
import { CHATS } from '../../mocks/chats'



export const Messenger = () => {
   const { chatId } = useParams();
   console.log(chatId);
   const [messageList, setMessageList] = useState([]);
   const sendMessage = (autor, text) => {
      const newMessageList = [...messageList];
      const newMessage = {
         autor,
         text
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
      sendMessage("bot", "hello");

   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [messageList]);

   if (!CHATS.find(({ id }) => id === chatId)) {
      return <Navigate to="/chats" />
   }

   return (
      <>
         <MessageList messageList={messageList} />
         <MessageInput onSend={onSendMessage} />
      </>
      
   )
};
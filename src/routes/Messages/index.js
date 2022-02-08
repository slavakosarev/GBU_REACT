import { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { MessageList } from '../../components/Message/MessageList';
import { MessageInput } from '../../components/Message/MessageInput';
import { getChatMessagesById } from '../../store/messages/selectors';
import { hasChatById } from '../../store/chats/selectors';
import { createMessage } from '../../store/messages/actions';


export const Messages = () => {
   const { chatId } = useParams();
   const dispatch = useDispatch();
   const messageList = useSelector(getChatMessagesById(chatId));
   const hasChat = useSelector(hasChatById(chatId));

   const sendMessage = (autor, text) => {
      const newMessage = {
         autor,
         text
      };
      dispatch(createMessage(newMessage, chatId))
   };
   
   const onSendMessage = (value) => {
      sendMessage('user', value);
   };

   useEffect(() => {

      if (!messageList || messageList.length === 0) {
         return
      }
      const lastMessage = messageList[messageList.length - 1];
      if (lastMessage.autor === 'bot') {
         return
      }
      sendMessage("bot", "hello");

   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [messageList]);

   if (!hasChat) {
      return <Navigate to="/chats" />
   }

   return (
      <>
         <MessageList messageList={messageList} />
         <MessageInput onSend={onSendMessage} />
      </>
      
   )
};
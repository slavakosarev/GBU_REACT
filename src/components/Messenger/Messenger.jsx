import { useEffect, useState } from 'react';
import { makeStyles } from '@mui/styles';
import { ChatList } from './ChatList';
import { MessageList } from './MessageList';
import { MessageInput } from './MessageInput';


const useStyles = makeStyles({
   wrapper: {
      display: "grid",
      gridTemplateColumns: "200px 1fr",
      color: 'white'
   }
});


export const Messenger = () => {
   const classes = useStyles();
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

   return (
      <div className={classes.wrapper}>
         <ChatList
            list={[
               {
                  name: "chat",
                  id: "1"
               },
               {
                  name: "chat",
                  id: "2"
               },
               {
                  name: "chat",
                  id: "3"
               },
               {
                  name: "chat",
                  id: "4"
               }
            ]}
         />
         <div>
            <MessageList messageList={messageList} />
            <MessageInput onSend={onSendMessage} />
         </div>
      </div>
   )
};
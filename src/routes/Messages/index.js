import { Navigate } from 'react-router-dom';
import { MessageList } from '../../components/Message/MessageList';
import { MessageInput } from '../../components/Message/MessageInput';
import { withChatMessages } from "../../hocs/withChatMessages";

export const MessagesRender = ({
   messageList,
   hasChat,
   onSendMessage, }) => {
   if (!hasChat) {
      return <Navigate to="/chats" />;
   }
   return (
      <>
         <MessageList messageList={messageList} />
         <MessageInput onSend={onSendMessage} />
      </>
   );
};

export const Messages = withChatMessages(MessagesRender);
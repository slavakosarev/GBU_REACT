import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { hasChatById } from "../store/chats/selectors";
import { sendMessageWithThunk } from "../store/messages/actions";
import { getChatMessagesById } from "../store/messages/selectors";
import { USER_AUTHOR } from "../constants/author";

export const withChatMessages = (Component) => {
   return (props) => {
      const { chatId } = useParams();
      const dispatch = useDispatch();
      const messageList = useSelector(getChatMessagesById(chatId));
      const hasChat = useSelector(hasChatById(chatId));

      const onSendMessage = (text) => {
         dispatch(sendMessageWithThunk(USER_AUTHOR, text, chatId))
      };
      return <Component
         {...props}
         messageList={messageList}
         hasChat={hasChat}
         onSendMessage={onSendMessage}
      />
   }
}
import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getChatList } from "../../store/chats/selectors";
import { createChat, removeChat } from "../../store/chats/actions";
import { removeMessagesByChatID } from "../../store/messages/actions";

export const withChats = (Component) => {
   return (props) => {
      const chats = useSelector(getChatList);
      const dispatch = useDispatch();

      const onCreateChat = useCallback(() => {
         dispatch(createChat('chat name'))
      }, [dispatch]);

      const onDeleteChat = useCallback((chatId) => {
         dispatch(removeChat(chatId))
         dispatch(removeMessagesByChatID(chatId))
      }, [dispatch]);

      return <Component
         {...props}
         chats={chats}
         onCreateChat={onCreateChat}
         onDeleteChat={onDeleteChat}
      />
   }
};

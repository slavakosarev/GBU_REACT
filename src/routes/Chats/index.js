import { Route, Routes } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import { Button } from '@mui/material';
import { ChatList } from '../../components/Message/ChatList';
import { Messages } from '../Messages';
import { withChats } from "../../hocs/withChats";

const useStyles = makeStyles({
   wrapper: {
      display: "grid",
      gridTemplateColumns: "200px 1fr",
      color: 'white'
   }
});

export const ChatsRender = ({
   chats,
   onCreateChat,
   onDeleteChat
}) => {
   const classes = useStyles();

   return (
      <div className={classes.wrapper}>
         <div>
            <ChatList onDelete={onDeleteChat} list={chats} />
            <Button onClick={onCreateChat}>Create chat</Button>
         </div>
         <div>
            <Routes>
               <Route component={Messages} path="/chats/:chatId" />
            </Routes>
         </div>
      </div>
   );
};

export const Chats = withChats(ChatsRender);
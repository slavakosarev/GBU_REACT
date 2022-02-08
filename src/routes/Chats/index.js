import { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { nanoid } from 'nanoid';
import { makeStyles } from '@mui/styles';
import { Button } from '@mui/material';
import propTypes from 'prop-types';
import { ChatList } from '../../components/Message/ChatList';
import { CHATS } from '../../mocks/chats';
import { Messages } from '../Messages';
import { getChatList } from '../../store/chats/selectors';
import { createChat, removeChat, setChats } from '../../store/chats/actions';
import { removeMessagesByChatId } from '../../store/messages/actions';


const useStyles = makeStyles({
   wrapper: {
      display: "grid",
      gridTemplateColumns: "200px 1fr",
      color: 'white'
   }
});

export const Chats = () => {
   const classes = useStyles();
   const chats = useSelector(getChatList);
   const dispatch = useDispatch();

   const onCreate = useCallback(() => {
      dispatch(createChat({
         id: nanoid(),
         name: 'chatName'
      }))
   }, [dispatch]);

   const onDelete = (chatId) => {
      dispatch(removeChat(chatId))
      dispatch(removeMessagesByChatId(chatId))
   };

   useEffect(() => {
      dispatch(setChats(CHATS))
   }, [dispatch])

   return (
      <div className={classes.wrapper}>
         <div>
            <ChatList onDelete={onDelete} list={chats} />
            <Button onClick={onCreate}>Create chat</Button>
         </div>
         <div>
            <Routes>
               <Route element={<Messages />} path='/chats/:chatId' />
            </Routes>
         </div>
      </div>
   )
};

Chats.propTypes = {
   children: propTypes.any
};
import { List } from '@mui/material';
import propTypes from 'prop-types';
import { Chat } from './Chat';

export const ChatList = ({ list, onDelete }) => {
   return (
      <List>
         {list.map((item) => (
            <Chat
               onClick={() => onDelete(item.id)}
               key={item.id} {...item}
            />
         ))}
         <Chat id="1" name="nochat" />
      </List>
   )
};

ChatList.propTypes = {
   list: propTypes.arrayOf(
      propTypes.shape({
         id: propTypes.string.isRequired,
         name: propTypes.string
      })
   )
};
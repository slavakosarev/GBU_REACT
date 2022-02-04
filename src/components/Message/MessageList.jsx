import { List } from '@mui/material';
import propTypes from 'prop-types';
import { Message } from '.';

export const MessageList = (props) => {
   return (
      <List>
         {props.messageList.map((item) => (
            <Message key={item.id} {...item} />
         ))}
      </List>
   )
};

MessageList.propTypes = {
   messageList: propTypes.arrayOf(
      propTypes.shape({
         id: propTypes.string.isRequired,
         text: propTypes.string,
         author: propTypes.string
      })
   )
};
MessageList.defaultProps = {
   messageList: []
};


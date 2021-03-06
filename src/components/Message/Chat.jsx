import { Link } from "react-router-dom";
import { ListItem, ListItemText } from '@mui/material';
import propTypes from 'prop-types';

export const Chat = ({id, name }) => {
   return (
      <ListItem components={Link} to={`/chats/${id}`}>
         <ListItemText>{name}</ListItemText>
      </ListItem>
   )
};

Chat.propTypes = {
   id: propTypes.string.isRequired,
   name: propTypes.string
};

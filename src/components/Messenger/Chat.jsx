import { Link } from "react-router-dom";
import { ListItem, ListItemText } from '@mui/material';
import propTypes from 'prop-types';

export const Chat = ({id, name }) => {
   return (
      <ListItem components={Link} to={id}>
         <ListItemText>{name}</ListItemText>
      </ListItem>
   )
};

Chat.propTypes = {
   id: propTypes.number,
   name: propTypes.string
};

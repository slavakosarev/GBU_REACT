import { ListItem, ListItemText } from '@mui/material';
import { makeStyles } from '@mui/styles';
import propTypes from 'prop-types';

const useStyles = makeStyles(() => ({
   listitem: {
      display: 'flex',
      alignItems: 'center',
      margin: '0 0 0 15%'
   }
}));
export const Message = (props) => {
   const classes = useStyles();
   return (
      <ListItem className={classes.listitem}>
         <ListItemText>
            {props.autor}: {props.text}
         </ListItemText>
      </ListItem>
   )
};

Message.propTypes = {
   id: propTypes.number,
   text: propTypes.string,
   autor: propTypes.string
};
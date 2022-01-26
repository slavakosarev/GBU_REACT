import { ListItem, ListItemText } from '@mui/material';
import { makeStyles } from '@mui/styles';
import propTypes from 'prop-types';

const useStyles = makeStyles(() => ({
   listitem: {
      display: 'flex',
      alignItems: 'center',
      paddingLeft: '16px',
      width: '50%',
      margin: '0 24% 0 16%'
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
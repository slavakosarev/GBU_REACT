import { makeStyles } from '@mui/styles';
import { ChatList } from '../../mocks/ChatList';
import { CHATS } from '../../mocks/chats';
import propTypes from 'prop-types';

const useStyles = makeStyles({
   wrapper: {
      display: "grid",
      gridTemplateColumns: "200px 1fr",
      color: 'white'
   }
});

export const Chats = ({children}) => {
   const classes = useStyles();

   return (
      <div className={classes.wrapper}>
         <ChatList list={CHATS} />
         <div>
            {children}
         </div>
      </div>
   )
};

Chats.propTypes = {
   children: propTypes.any
};
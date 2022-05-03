import { useEffect, useState, useRef } from 'react';
import propTypes from 'prop-types';
import { makeStyles } from '@mui/styles';
import { Paper, IconButton, InputBase } from '@mui/material';
import { Send } from '@mui/icons-material';

const useStyles = makeStyles(() => ({
   paper: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingLeft: '16px',
      width: '50%',
      margin: '0 24% 0 16%'
   },
   input: {
      flexGrow: 1
   }
}));

export const MessageInput = (props) => {
   const classes = useStyles();
   const [value, setValue] = useState('');
   const inputRef = useRef(null);
   const resetForm = () => {
      setValue('')
   };
   const onSubmitMessage = (event) => {
      event.preventDefault();
      props.onSend(value);
      resetForm()
   };
   const onChangeMessageInput = (event) => {
      setValue(event.target.value)
   };

   useEffect(() => {
      inputRef.current.focus()
   });

   return (
      <Paper
         className={classes.paper}
         component="form"
         onSubmit={onSubmitMessage}
      >
         <InputBase
            inputRef={inputRef}
            className={classes.input}
            onChange={onChangeMessageInput}
            placeholder={props.placeholder}
            value={value}
            type="text"
         />
         <IconButton type="submit">
            <Send />
         </IconButton>
      </Paper>
   );
};

MessageInput.propTypes = {
   onSend: propTypes.func,
   placeholder: propTypes.string
};

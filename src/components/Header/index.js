import { AppBar, Button, Toolbar } from '@mui/material';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Home } from '../../routes/Home';
import { Profile } from '../../routes/Profile';
import { Chats } from '../../routes/Chats';
import { Messenger } from '..';

export const Header = () => {
   return (
      <div>
         <BrowserRouter>
            <AppBar position="static">
               <Toolbar>
                  <Button to="/" component={Link} color="inherit">
                     Home
                  </Button>
                  <Button to="/profile" component={Link} color="inherit">
                     Profile
                  </Button>
                  <Button to="/chats" component={Link} color="inherit">
                     Chats
                  </Button>
               </Toolbar>
            </AppBar>
            <Routes>
               <Route element={<Chats />} path="/chats">   
                  <Route element={<Messenger />} path="/chats/:chatId" />
               </Route>
               <Route element={<Profile />} path="/profile" />
               <Route element={<Home />} path="/" />
            </Routes>
         </BrowserRouter>
      </div>
   )
};

Header.propTypes = {
   title: PropTypes.string
};
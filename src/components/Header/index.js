import { AppBar, Button, Toolbar } from '@mui/material';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import { PersistGate } from 'redux-persist/integration/react';
import { Home } from '../../routes/Home';
import { Profile } from '../../routes/Profile';
import { Chats } from '../../routes/Chats';
import { persistor, store } from '../../store';
import { FetchReqres } from "../routes/reqres/";

export const Header = () => {
   return (
      <div>
         <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
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
                        <Button to="/reqres/middleware" component={Link} color="inherit">
                           Reqres
                        </Button>
                     </Toolbar>
                  </AppBar>
                  <Routes>
                     <Route element={<Chats />} path="/chats/*" />
                     <Route element={<Profile />} path="/profile" />
                     <Route element={<Home />} path="/" />
                     <Route element={<FetchReqres />} path="/reqres/middleware">
                  </Routes>
               </BrowserRouter>
            </PersistGate>
        </Provider>
      </div>
   )
};

Header.propTypes = {
   title: PropTypes.string
};
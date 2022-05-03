<<<<<<< HEAD
import React from "react";
import styles from "./Header.module.css"


export const Header = (props) => {
   return (
      <div>
         <h2 className={styles.text}>{props.title}</h2>
         <h1 style={{ color: "violet", textTransform: "upperCase" }}>
            live react
         </h1>
      </div>
   )
}
=======
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
import { MiddlewareReqRes } from "../routes/reqres/middleware";
import {LoginRoute} from "../routes/login";

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
                        <Button to="/login" component={Link} color="inherit">
                           Chats
                        </Button>
                        <Button to="/reqres/" component={Link} color="inherit">
                           Reqres
                        </Button>
                        <Button to="/reqres/middleware" component={Link} color="inherit">
                           MiddlewareReqRes
                        </Button>
                     </Toolbar>
                  </AppBar>
                  <Routes>
                     <Route element={<Chats />} path="/chats/*" />
                     <Route element={<Profile />} path="/profile" />
                     <Route element={<Home />} path="/" />
                     <Route component={<LoginRoute />} path="/login" />
                     <Route path="/reqres/middleware">
                        <MiddlewareReqRes />
                     </Route>
                     <Route path="/reqres">
                        <FetchReqres />
                     </Route>
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
>>>>>>> homework#4

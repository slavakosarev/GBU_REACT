import { AppBar, Button, Toolbar } from '@mui/material';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Home } from '../routes/Home';
import { Chats } from '../routes/Chats';
import { Profile } from '../routes/Profile';
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
                     Home
                  </Button>
                  <Button to="/chats" component={Link} color="inherit">
                     Home
                  </Button>
               </Toolbar>
            </AppBar>
            <Switch>
               <Route path="/chats">
                  <Chats>
                     <Switch>
                        <Route component={Messenger} path="/chats/:chatId" />
                     </Switch>
                  </Chats>
                  </Route>
               <Route component={Profile} path="/profile" />
               <Route component={Home} path="/" />
            </Switch>
         </BrowserRouter>
      </div>
   )
};

Header.propTypes = {
   title: PropTypes.string
};

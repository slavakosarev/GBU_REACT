import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import { storage } from 'redux-persist/lib/storage';
import { animalsReducer } from './animals';
import { chatsReducer } from "./chats/reducer";
import { profileReducer } from './profile/reducer';
import { messagesReducer } from "./messages/reducer";

const persistCofig = {
   key: 'root',
   storage
};

const rootReducer = combineReducers({
   animals: animalsReducer,
   profile: profileReducer,
   messages: messagesReducer,
   chats: chatsReducer
});

const persistedReducer = persistReducer(persistCofig, rootReducer);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
   persistedReducer,
   composeEnhancers(applyMiddleware(thunk))
);

export const persistor = persistStore(store);
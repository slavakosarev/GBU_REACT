import { compareById } from '../../helpers';

export const getChats = (state) => state.chats;
export const getChatList = (state) => getChats(state).chats;
export const getChatById = (chatid) => (state) => getChatList(state).filter(compareById(chatid));
export const hasChatById = (chatid) => (state) => getChatList(state).findIndex(compareById(chatid)) !== -1;
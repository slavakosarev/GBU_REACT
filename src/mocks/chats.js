import { nanoid } from 'nanoid';
import propTypes from 'prop-types';

const createChatMock = (i) => ({
   id: nanoid(),
   name: `name ${i + 1}`
});

export const CHATS = Array.from({ length: 10 }).map((_, i) => 
   createChatMock(i)
);

CHATS.propTypes = {
   id: propTypes.string,
   name: propTypes.string
};

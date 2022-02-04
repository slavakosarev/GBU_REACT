import propTypes from 'prop-types';

const createChatMock = (i) => ({
   id: String(Date.now() + Math.random()),
   name: `name ${i + 1}`
});

export const CHATS = Array.from({ length: 10 }).map((_, i) => 
   createChatMock(i)
);

CHATS.propTypes = {
   id: propTypes.string,
   name: propTypes.string
};

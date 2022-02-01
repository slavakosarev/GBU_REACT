const createChatMock = (i) => ({
   id: Date.now() + Math.random(),
   name: `name ${i + 1}`
});

export const CHATS = Array.from({ length: 10 }).map((_, i) => 
   createChatMock(i)
);


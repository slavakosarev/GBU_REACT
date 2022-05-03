const createChatMock = (i) => ({
   id: Date.now() + Math.random(),
   name: `name ${i + 1}`
});
console.log(createChatMock());

export const CHATS = Array.from({ length: 10 }).map((_, i) => 
   createChatMock(i)
);
console.log(CHATS);

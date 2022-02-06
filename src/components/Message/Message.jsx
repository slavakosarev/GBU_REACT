import { useEffect, useState } from "react";
import styles from "./Message.module.css"

export const Message = () => {
   // хранит список сообщений
   const [messageList, setMessageList] = useState([]);
   // хранит текст поля ввода 
   const [value, setValue] = useState('');
   // функция отправки сообщений. одна логика для юзера и для бота
   const sendMessage = (autor, text) => {
      const newMessageList = [...messageList];
      // объект с новым сообщением
      const newMessage = { autor, text };
      newMessageList.push(newMessage);
      // новый список сообщений с новым сообщением добавляем в стейт
      setMessageList(newMessageList);
   };
   // функция сброса формы
   const resetForm = () => {
      setValue('');
   };
   // функция сохранения сообщения из формы
   const onSubmitMessage = (event) => {
      event.preventDefault();
      sendMessage('user', value);
      resetForm();
   };
   // функция сохранения текста из текстового поля
   const onChangeMessageInput = (event) => {
      setValue(event.target.value);
   };

   // функция вызывается каждый раз, когда меняется список сообщений
   useEffect(() => {
      // проверка, если сообщений нет, выйти
      if (messageList.length === 0) {
         return
      }
      // если есть, получить индекс последнего сообщения
      const lastMessage = messageList[messageList.length - 1];
      // проверка, если автор бот, выйти
      if (lastMessage.autor === 'bot') {
         return
      }
      // устанавливаем задержку на отправку сообщения ботом
      setTimeout(() => sendMessage('bot', 'hello'), 1500);
      // зависимости
   }, [messageList, sendMessage]);

   return (
      <div>
         <form onSubmit={onSubmitMessage} >
            <input
               onChange={onChangeMessageInput}
               placeholder="your message"
               value={value}
               type="text"
               className={styles.input}
            />
            <button className={styles.btn}>send</button>
         </form>
         <ul className={styles.ul} >
            {messageList.map((item, index) => (
               <li key={index}>
                  {item.autor}:  {item.text}
               </li>
            ))}
         </ul>
      </div>
   )
}
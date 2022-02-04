import React from "react";
import styles from "./Message.module.css" // подключение модулем

export const Message = (props) => {
   return (
      // подключение нескольких классов
      <div className={
         `${styles.textColor} ${styles.textFont}`
      }>
         {props.children}
      </div >
   )
}
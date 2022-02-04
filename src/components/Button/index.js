import React from "react";
import styles from "./Button.module.css"

export const Button = (props) => {
   return (
      <button
         className={styles.btn}
         onClick={props.onClick}
      >Click me</button>
   )
}
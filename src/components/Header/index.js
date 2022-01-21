import React from "react";
import styles from "./Header.module.css"


export const Header = (props) => {
   return (
      <div>
         <h1 style={{ color: "violet", textTransform: "upperCase" }}>
            live chat
         </h1>
         <h2 className={styles.text}>{props.title}</h2>
      </div>
   )
}
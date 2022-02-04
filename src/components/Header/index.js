import React from "react";
import styles from "./Header.module.css"


export const Header = (props) => {
   return (
      <div>
         <h2 className={styles.text}>{props.title}</h2>
         <h1 style={{ color: "violet", textTransform: "upperCase" }}>
            live react
         </h1>
      </div>
   )
}
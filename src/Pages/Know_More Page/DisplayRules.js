import React from "react";
import styles from "./knowStyle.module.css";
const DisplayRules = (props) => {
  console.log(props.rules);
  const row = [];

   {
    for (let i = 0; i < props.rules.length; i++) {
      row.push(
        
        <ul>
        <span className={styles.rules} key={i}>
          {props.rules[i]}
        </span>
        </ul>
      );
    }
    return(
        <div className={styles.rules_container}>
          <span className={styles.rules}>For All Rules Please Refer Rule Book</span>
            {row}
        </div>
    );
  };
 
};

export default DisplayRules;

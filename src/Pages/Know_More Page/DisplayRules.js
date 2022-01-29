import React from "react";
import styles from "./knowStyle.module.css";
const DisplayRules = (props) => {
  console.log(props.rules);
  const row = [];

  const disp = () => {
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
            {row}
        </div>
    );
  };
  return disp();
};

export default DisplayRules;

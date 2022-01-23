import React, { useState } from "react";
import styles from "./AlertStyles.module.css";
const Alert = (props) => {
  const show = () => {
    props.disp(false);
  };
  return (
    <div className={styles.alert}>
      {props.data}
      
      <button className={styles.alert_btn} onClick={show}>
        Hide Alert
      </button>
    </div>
  );
};

export default Alert;
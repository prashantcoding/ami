import React from "react";
import Testimonial from "../../Component/Card/Testimonial";
import styles from "./knowStyle.module.css";
const DisplayImg= (props) => {
  
  const row = [];

  const disp = () => {
    for (let i = 0; i < props.imgsrc.length; i++) {
      row.push(
        
        <Testimonial img={props.imgsrc[i]} name={props.coordinators[i]}></Testimonial>
      );
    }
    return(
        <div className={styles.cod_container}>
            {row}
        </div>
    );
  };
  return disp();
};

export default DisplayImg;

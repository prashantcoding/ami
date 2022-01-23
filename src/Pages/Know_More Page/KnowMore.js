import React from "react";
import styles from "./knowStyle.module.css";
import poster from "./dacne.jpg";
import cod1 from "./cod1.jfif";
import cod2 from "./cod2.jfif";
import cod3 from "./cod3.jfif";
import DisplayRules from "./DisplayRules";
import { list } from "./lst";
import Testimonial from "../../Component/Card/Testimonial";
const KnowMore = () => {
  return (
    <div className={styles.container}>
      {list.map((items) => (
        <>
          <div className={styles.posterholder}>
            <img className={styles.poster} src={poster}></img>
          </div>
          <div>
            <h1 className={styles.headline}>Rules</h1>
            <DisplayRules rules={items.rules} />
          </div>
          <div className={styles.cod_container}>
              <Testimonial img={cod1} name={"Soniya james"}></Testimonial>
              <Testimonial img={cod2} name={"Isha Singh"}></Testimonial>
              <Testimonial img={cod3} name={"Jane williams"}></Testimonial>
          </div>
        </>
      ))}
      <div className={styles.buttonbox}>
      <button  className={styles.button_register}>Register</button>
      </div>
      
    </div>
    
  );
};

export default KnowMore;

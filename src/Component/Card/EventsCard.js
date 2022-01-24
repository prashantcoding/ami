
import React from "react";
import { Link } from "react-router-dom";
import styles from "./EventStyle.module.css";

const EventsCard = (props) => {
 
  return (
    <>
    <div>
      <div
        style={{
          backgroundImage: `url(${props.img})`,
        }}
        className={styles.card}
      >
        <div className={styles.desc}>
          <div className={styles.title}>{props.title}</div>
          <div>
           
            
        
            <button className={styles.button_register}><Link className={styles.link} to='/know_more'>Know More</Link></button>
          </div>
        </div>
      </div>
    </div>
    
  
  </>);
};

export default EventsCard;

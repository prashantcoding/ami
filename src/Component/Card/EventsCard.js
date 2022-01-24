
import React from "react";
import { Link } from "react-router-dom";
import styles from "./EventStyle.module.css";
import { motion } from "framer-motion"

const EventsCard = (props) => {
  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  }
  return (
    <>
    <motion.div
  initial="hidden"
  animate="visible"
  variants={variants}
  transition={{ ease: "easeOut", duration: 2 }}
>
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
    
    </motion.div>
  </>);
};

export default EventsCard;

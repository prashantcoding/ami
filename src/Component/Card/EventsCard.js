
import React from "react";
import { Link } from "react-router-dom";
import styles from "./EventStyle.module.css";
import { motion } from "framer-motion"

import { actionCreateor } from "../../store/index";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const EventsCard = (props) => {
  
    let history = useHistory();
  const dispatch=useDispatch();
  const handleOnclick=(name)=>{
    console.log("hii");
    dispatch(actionCreateor.show_event(name));
    localStorage.setItem("event", name);
    history.push('/know_more')
  }
  
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
           
            
        
            <button onClick={()=>handleOnclick(props.title)} className={styles.button_register}> Know More </button>
          </div>
        </div>
      </div>
    </div>
    
    </motion.div>
  </>);
};

export default EventsCard;

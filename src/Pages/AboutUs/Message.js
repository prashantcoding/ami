import React, { useEffect } from 'react';
import styles from './Mstyle.module.css'
import prashant from '../Know_More Page/prashant.jpg'
import { motion, useAnimation } from 'framer-motion';
import {useInView} from 'react-intersection-observer';
const Message = (props) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
    else{
      controls.start("hidden");
    }
  }, [controls, inView]);
  const squareVariants={
    visible:{x:"10vw",transition:{ease: "easeOut",duration: 1}},
    hidden:{x:"0vw",transition:{ease: "easeOut",duration: 2}}
  };

  return (
    <>
    <motion.div
    ref={ref}
    animate={controls}
    initial="hidden"
    variants={squareVariants}
   
    className={styles.ani}
  >
  
    <div className={styles.box2}>
        <img src={props.img} className={styles.img}/>
        <div>
        <h1 className={styles.desc}>{props.text}</h1>
        <small><h3>{props.name}</h3></small>
        <small><h3>{props.position}</h3></small>
        </div>
      

</div>
</motion.div>

</>
  );
};

export default Message;

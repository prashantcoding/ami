import React, { useEffect } from 'react';
import styles from './Mstyle.module.css'
import prashant from '../Know_More Page/prashant.jpg'
import { motion, useAnimation } from 'framer-motion';
import {useInView} from 'react-intersection-observer'
const Message2 = () => {
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
      visible:{x:"-25vw",transition:{ease: "easeOut",duration: 1}},
      hidden:{x:"-0vw",transition:{ease: "easeOut",duration: 2}}
    };
  
    return (
      <>
      <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={squareVariants}
     
      className={styles.ani2}
    >
      <div className={styles.box}>
      <div class={styles.box2}>
          <img src={prashant} class={styles.img}/>
          <div>
          <h1 class={styles.desc}>Amichrom 2k22 is something that inspires me to build things like this website 
              its really brings platform to showcase your talent interact with people and 
              create moments to remember to enjoy the event 
          </h1>
          </div>
      </div>
  
  </div>
  </motion.div>
  
  </>
    );
};

export default Message2;

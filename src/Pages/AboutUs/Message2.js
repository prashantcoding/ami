import React, { useEffect } from "react";
import styles from "./Mstyle.module.css";
import prashant from "../Know_More Page/prashant.jpg";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
const Message2 = (props) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(
    (props) => {
      if (inView) {
        controls.start("visible");
      } else {
        controls.start("hidden");
      }
    },
    [controls, inView]
  );
  const squareVariants = {
    visible: { x: "-20%", transition: { ease: "easeOut", duration: 1 } },
    hidden: { x: "3rem", transition: { ease: "easeOut", duration: 2 } },
  };

  return (
    <>
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={squareVariants}
        className={styles.box2}
      >
        <img src={props.img} className={styles.img} />
        <div>
          <h1 className={styles.desc}>{props.text}</h1>
          <small>
            <span className={styles.name}>{props.name}<br></br></span>
          </small>
          <small>
            <span className={styles.position}>{props.position}</span>
          </small>
        </div>
      </motion.div>
    </>
  );
};

export default Message2;

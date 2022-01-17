import React from "react";
import styles from './Fstyle.module.css'
import { motion } from "framer-motion";
const Footer = () => {
  return (
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    transition={{ duration: 1}}
      >
    <div className={styles.box}>
      <center>
        <h1 className={styles.heading}>Night Events</h1>
      </center>
    </div></motion.div>
  );
};

export default Footer;

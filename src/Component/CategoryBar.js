import React from 'react'
import styles from './Cstyle.module.css';
import { motion } from "framer-motion";
const CategoryBar = (props) => {
    return (
        <motion.div
    initial={{y:-400}}
    animate={{y:0}}
    exit={{y:-400}}
    transition={{ duration: 1}}
      >
        <div className={styles.box}>
            <center><h1 className={styles.heading}>{props.title}</h1></center>
        </div></motion.div>
    )
}

export default CategoryBar

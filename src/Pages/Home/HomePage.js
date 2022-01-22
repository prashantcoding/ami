import React, { useState } from "react";
import styles from "./hstyle.module.css";
import ami from "./ami.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Sidebar from "../../Component/Sidebar/index";
import { FaHamburger } from "react-icons/fa";
import sample from './bg7.mp4';
import Login from "../../Auth/Login";
const HomePage = (props) => {
  const [isOpen, setisOpen] = useState(false);
  const toggle = () => {
    setisOpen(!isOpen);
  };
  return (
    <>
     
      <div className={styles.nav}>
          <div className={styles.logo}>
            <img class={styles.logo_img}src={ami} />
            <h1>Amichroma</h1>
          </div>

          <div className={styles.dig_line}></div>

          <div className={styles.content}>
            <span className={styles.link}>Workshops</span>
            <Link to="/events" className={styles.link}>
              Events
            </Link>
            <span className={styles.link}>Gallery</span>
            <span className={styles.link}>About us </span>
          </div>
          <div className={styles.dig_line_two}></div>
          <div className={styles.signup}><Login/></div>
          <div onClick={toggle} className={styles.ham}>
            <FaHamburger size={40}></FaHamburger>
          </div>
        </div>
      <motion.div
        initial={{ y: -2000 }}
        animate={{ y: 0 }}
        exit={{ y: -2000 }}
        transition={{ duration: 1 }}
      >
        <Sidebar isOpen={isOpen} toggle={toggle} />
        
        <div className={styles.box_main}>
          <div className={styles.box_memory}>
            <center className={styles.slogan}>Memories</center>
          </div>
          <div className={styles.box_events}>
            <center className={styles.slogan}>
              Events
            </center>
          </div>
          <div className={styles.box}>
            <center className={styles.slogan}>Workshops</center>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default HomePage;

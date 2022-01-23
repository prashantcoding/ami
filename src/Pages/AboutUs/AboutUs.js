import React from "react";
import Vedio from "./Vedio";
import styles from './Astyles.module.css'
import { motion } from "framer-motion"
const AboutUs = () => {
  return (
  <>
  <Vedio />
  <div className={styles.heading}><h1>Design and Devlopement</h1></div>
  </>
  
  );
};

export default AboutUs;

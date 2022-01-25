import React, { useEffect } from "react";
import Vedio from "./Vedio";
import styles from './Astyles.module.css'
import {  motion, useAnimation } from "framer-motion"
import Message from "./Message";

const AboutUs = () => {
  
  return (
  <>
  
  <Vedio />
  <div data-aos="fade-right" className={styles.heading}><h1>Design and Devlopement</h1></div>
 
  
  <div className={styles.message_container}>
  
  <Message/>
  <Message/>
  <Message/>
  <Message/>
  <Message/>
  
  </div>
  
  
  
  
  </>
  
  );
};

export default AboutUs;

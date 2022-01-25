import React, { useState } from "react";
import styles from "./knowStyle.module.css";
import poster from "./dacne.jpg";
// import cod1 from "./cod1.jfif";
// import cod2 from "./cod2.jfif";
// import cod3 from "./cod3.jfif";
// import prashant from "./prashant3.jpeg"
import DisplayRules from "./DisplayRules";
import { list } from "./lst";
// import Testimonial from "../../Component/Card/Testimonial";
import Register from "../../Component/Register/Register";
import CategoryBar from '../../Component/CategoryBar'
// import Alert from "../../Component/Alert/Alert";
// import { motion } from 'framer-motion';
import DisplayImg from "./DisplayImg";
const KnowMore = () => {
  
  return (
    <>
    
    <div className={styles.container}>
      
      {list.map((items) => (
        <>
         <CategoryBar title={items.name}/>
         
          <div className={styles.posterholder}>
            <img className={styles.poster} src={items.poster}></img>
          </div>
          <div>
            <h1 className={styles.headline}>Rules</h1>
            <DisplayRules rules={items.rules} />
          </div>
          
          <div >
          <DisplayImg imgsrc={items.imgsrc} coordinators={items.coordinators}/>
          </div>
          <Register  title={items.title}/>
          
        </>
      ))}
     
    </div>
    

    </>
  );
 
};

export default KnowMore;

import React from "react";
import styles from "./cpstyle.module.css";
import { useHistory } from "react-router-dom";

import {
  hacker,
  dance,
  debate,
  gamepad,
  photography,
  football,
  film,
  arts,
} from "../../Assets/help_script/imgimports";
import CategoryBar from "../../Component/CategoryBar";
import Footer from "../../Component/Footer/Footer";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { actionCreateor } from "../../store/index";
const CategoryPage = () => {
  let history = useHistory();
  const dispatch=useDispatch();
  const handleOnclick=(name)=>{
    console.log("hii");
    dispatch(actionCreateor.show_category(name));
    localStorage.setItem("category", name);
    history.push('/esport')
  }
  
  return (
    <>
      <motion.div
        initial={{ x: 400 }}
        animate={{ x: 0 }}
        exit={{ x: -400 }}
        transition={{ duration: 1 }}
      >
        <CategoryBar  title={"Competition Categories"}/>
        
        <span className={styles.heading}>#Chroma Events</span>
        <div className={styles.container}>
          
          <div>
            <img src={gamepad} className={styles.gamepad} alt="gamepad"></img>
            <center> <span className={styles.name} onClick={()=>handleOnclick('games')} >Esport</span></center>
          </div>
          <div>
            <img
              src={football}
              className={styles.football}
              alt="football"
            ></img>
           <center> <span className={styles.name} onClick={()=>handleOnclick('All')} >Football</span></center>
          </div>
          <div>
            <img src={dance} className={styles.dance} alt="Dance"></img>
            <center className={styles.name}>Dance</center>
          </div>
          <div>
            <img src={arts} className={styles.arts} alt="arts"></img>
            <center className={styles.name}>Arts</center>
          </div>
          <div>
            <img
              src={photography}
              className={styles.photography}
              alt='gamepad'
            ></img>
            <center className={styles.name}>Photography</center>
          </div>
          <div>
            <img src={debate} className={styles.debate} alt="football"></img>
            <center className={styles.name}>Debate</center>
          </div>
          <div>
            <img src={hacker} className={styles.coding} alt="Dance"></img>
            <center className={styles.name}>Coding</center>
          </div>
          <div>
            <img src={film} className={styles.film} alt="arts"></img>
            <center className={styles.name}>Film Making</center>
          </div>
          
        </div>
        
      </motion.div>
     <Footer></Footer>
    </>
  );
};

export default CategoryPage;

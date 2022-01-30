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
  const dispatch = useDispatch();
  const handleOnclick = (name) => {
    console.log("hii");
    dispatch(actionCreateor.show_category(name));
    localStorage.setItem("category", name);
    history.push("/esport");
  };

  return (
    <>
      <motion.div
        initial={{ x: 400 }}
        animate={{ x: 0 }}
        exit={{ x: -400 }}
        transition={{ duration: 1 }}
      >
        <CategoryBar title={"Competition Categories"} />

        <span className={styles.heading}>#Chroma Events</span>
        <div className={styles.container}>
          
          <div>
            <img
              src={football}
              className={styles.football}
              alt="AllEvent"
              onClick={() => handleOnclick("All")}
            ></img>
            <center>
              {" "}
              <span
                className={styles.name}
               
              >
                All Events
              </span>
            </center>
          </div>
          <div>
            <img
              src={gamepad}
              onClick={() => handleOnclick("games")}
              className={styles.gamepad}
              alt="gamepad"
            ></img>
            <center>
              {" "}
              <span className={styles.name}>Games</span>
            </center>
          </div>
          <div>
            <img src={dance}  onClick={() => handleOnclick("enter")} className={styles.dance} alt="Dance"></img>
            <center className={styles.name}>Entertainment</center>
          </div>
          <div>
            <img
              src={arts}
              className={styles.arts}
              onClick={() => handleOnclick("arts")}
              alt="arts"
            ></img>
            <center className={styles.name}>Arts</center>
          </div>
          <div>
            <img
              src={photography}
              className={styles.photography}
              onClick={() => handleOnclick("social")}
              alt="photography"
            ></img>
            <center className={styles.name}>Digital Media </center>
          </div>
          <div>
            <img
              src={debate}
              onClick={() => handleOnclick("edu")}
              className={styles.debate}
              alt="debate"
            ></img>

            <center className={styles.name}>Educational</center>
          </div>
          <div>
            <img
              src={hacker}
              onClick={() => handleOnclick("coding")}
              className={styles.coding}
              alt="coding"
            ></img>
            <center className={styles.name}>Coding</center>
          </div>
          <div>
            <img
              src={film}
              onClick={() => handleOnclick("film")}
              className={styles.film}
              alt="film"
            ></img>
            <center className={styles.name}>Movie Making</center>
          </div>
        </div>
      </motion.div>
      <Footer></Footer>
    </>
  );
};

export default CategoryPage;

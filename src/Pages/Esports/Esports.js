import React from "react";
import CategoryBar from "../../Component/CategoryBar";
import styles from "./Esport.module.css";
import { cod, fifa, pubg, valo } from "../../Assets/help_script/imgimports";
import Link from "react-scroll/modules/components/Link";
const Esports = () => {
  return (
    <>
       
        <section id="Games">
       <CategoryBar title="Esport"></CategoryBar>
      <div className={styles.container}>
           
        <div className={styles.event_box}>
          <img className={styles.pubg} src={pubg} alt="pubg"></img>
          <span className={styles.name}>BGMI</span>
          <div className={styles.options}>
            <button className={styles.button_register}>Register</button>

            <button className={styles.button_register}>
              <Link to="/know_more">Know More</Link>
            </button>
          </div>
        </div>
        <div className={styles.event_box}>
          <img className={styles.fifa} src={fifa} alt="fifa"></img>
          <span className={styles.name} style={{ color: "#002C8A" }}>
            FIFA
          </span>
          <div className={styles.options}>
            <button
              className={styles.button_register}
              style={{ "border-color": "#002C8A" }}
            >
              Register
            </button>

            <button
              className={styles.button_register}
              style={{ "border-color": "#002C8A" }}
            >
              <Link to="/know_more">Know More</Link>
            </button>
          </div>
        </div>
        <div className={styles.event_box}>
          <img className={styles.valo} src={valo} alt="valorant"></img>
          <span className={styles.name} style={{ color: "#FF4655" }}>
            Valorant
          </span>
          <div className={styles.options}>
            <button
              className={styles.button_register}
              style={{ "border-color": "#FF4655" }}
            >
              Register
            </button>

            <button
              className={styles.button_register}
              style={{ "border-color": "#FF4655" }}
            >
              <Link to="/know_more">Know More</Link>
            </button>
          </div>
        </div>
        <div className={styles.event_box}>
          <img className={styles.pubg} src={cod} alt="pubg"></img>
          <span className={styles.name} style={{ color: "#99A1AB" }}>
            COD MOBILE
          </span>
          <div className={styles.options}>
            <button
              className={styles.button_register}
              style={{ "border-color": "#99A1AB" }}
            >
              Register
            </button>

            <button
              className={styles.button_register}
              style={{ "border-color": "#99A1AB" }}
            >
              <Link to="/know_more">Know More</Link>
            </button>
          </div>
        </div>
        <div className={styles.event_box}>
          <img className={styles.pubg} src={cod} alt="pubg"></img>
          <span className={styles.name} style={{ color: "#99A1AB" }}>
            COD MOBILE
          </span>
          <div className={styles.options}>
            <button
              className={styles.button_register}
              style={{ "border-color": "#99A1AB" }}
            >
              Register
            </button>

            <button
              className={styles.button_register}
              style={{ "border-color": "#99A1AB" }}
            >
              <Link to="/know_more">Know More</Link>
            </button>
          </div>
        </div>
          
      </div>
      </section>
    </>
  );
};

export default Esports;

import React from "react";
import styles from "./knowStyle.module.css";
// import poster from "./images/dacne.jpg";
// import cod1 from "./cod1.jfif";
// import cod2 from "./cod2.jfif";
// import cod3 from "./cod3.jfif";
// import prashant from "./prashant3.jpeg"
import DisplayRules from "./DisplayRules";
import { list } from "./lst";
// import Testimonial from "../../Component/Card/Testimonial";
import Register from "../../Component/Register/Register";
import CategoryBar from "../../Component/CategoryBar";
// import Alert from "../../Component/Alert/Alert";
// import { motion } from 'framer-motion';
import DisplayImg from "./DisplayImg";
import JoinTeam from "../../Component/Register/Createam";
import Createam from "../../Component/Register/Createam";
import style2 from "../../Pages/AboutUs/Astyles.module.css"
const KnowMore = () => {
  const title = localStorage.getItem("event");
  return (
    <>
      <div className={styles.container}>
        {list.map(
          (items) =>
            items.title === title && (
              <>
                <CategoryBar title={items.name} />

                <div className={styles.posterholder}>
                  <img className={styles.poster} alt="poster" src={items.poster}></img>
                </div>
                <div>
                  <div className={styles.ruleR}>
                    <h1 className={styles.headline}>Registration Guidelines</h1>
                    <h3>Name will be same as google account so register with professional gmail</h3>
                    
                    <h3>IF you dont have a team right now  just Register and come back if you want to create Team </h3>
                    <h3>For Team Create a Team an ID will we provided through which your team member can join using join team button </h3>
                    <h3>To join a Team Enter Team ID and click on Join Button</h3>
                   </div>
                  <h1 className={styles.headline}>Rules</h1>
                    
                  <DisplayRules rules={items.rules} />
                </div>
                <div className={style2.heading}>
                    <h1>Faculty Coordinators</h1>
                   
                </div>
                {console.log(items)}
               {items.fcoordinators? <DisplayImg
                    imgsrc={items.fimgsrc}
                    coordinators={items.fcoordinators}
                    message={items.message}
                    insta={items.insta}
                    
                  />:''}
                  <br></br>
                <div>
                <div className={style2.heading}>
                    <h1>Student  Coordinators</h1>
                </div>
                 <DisplayImg
                    imgsrc={items.imgsrc}
                    coordinators={items.coordinators}
                    message={items.message}
                    insta={items.insta}
                  />
                </div>
                <br></br>
                <Register title={items.title} />
                {items.genre==="Team"&&<Createam title={items.title}/>}
              </>
            )
        )}
      </div>
    </>
  );
};

export default KnowMore;

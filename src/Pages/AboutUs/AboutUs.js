import React from "react";
import Vedio from "./Vedio";
import styles from "./Astyles.module.css";
import dineshsharma from "./images/Dineshsharma.jpg"
import Message from "./Message";
import Message2 from "./Message2";
import Vc from "./images/V.C.jpg";
import testimonial2 from "./images/testimonial2.jpg";
import testimonial3 from "./images/testimonial3.jpg";
import prashant from "./images/prashant.jpg";
import madhavimam from "./images/madhavimam.jpg"
import pro from "./images/pro.jpeg";
const AboutUs = () => {
  return (
    <>
           <Vedio /> 
      <div className={styles.container}>
      <div className={styles.heading}>
        <h1>About Amichroma</h1>
      
      </div>
      <div className={styles.our_message}>
        
          
        Amity University Madhya Pradesh proudly presents AMICHROMA 2022 - a two-day festivity and celebration of the vibrant youth. It has come this year with a plethora of mind boggling events and competitions, encompassing a myriad of interests and domains. The fest would be a marvelous celebration of creativity, talent, and spirit. Come and be part of this youth celebration which is in online mode.
        
        
      </div>

      <div className={styles.heading}>
        <h1>Testimonials</h1>
      </div>

       
         
       
        <Message
          img={Vc}
          text={
            "I’m glad that students are putting their 100% as a team for the event.Also their concern towards the society makes us proud.My best wishes are with them."
          }
          name={"Lt.Gen. V.K. Sharma"}
          position={"vice-chancellor"}
        />
         <Message2
          img={pro}
          text=
            "The dedication and creativity of students in making this event from scratch is exemplary. The fun and laughter has been backed by the societal causes which is commendable Best wishes to all the organisers and participants"
          
          name="Prof. Dr. M.P. Kaushik"
          position="Pro vice-chancellor"
        /> 
         <Message
          img={testimonial2}
          text=
            "The day, students approached me for this event, I was amazed and proud to know that our youth has so much to offer. They are boost up with enthusiasm and confidence. I am just the one to provide them proper direction."
          
          name="Maj. Gen. Dr. S.C. Jain"
          position="HOI ASET"
        /> 
       
        
        <div className={styles.heading}>
        <h1>MEET THE TEAM</h1>
      </div>
      <span className={styles.subheading}>
        <h1>Website Developers</h1>
        
      </span>
      <div className={styles.web_cood}>
      <Message2
          img={dineshsharma}
          text=
            "I found these students as my juniors. Their ideas and management regarding this event, and also co-ordination is appreciable. The students have put their heart and soul in this event. I wish them luck for success in their endeavours"
          
          name="Dr Dinesh Sharma"
          position="Assistant Professor,CSE ASET AUMP"
        />
      <Message
          img={prashant}
          text=
            "Amichorma is really a good place to showcase your skills and learn new thing building team skills and work on  a real event so i want to really thanks my faculty for this wonderfull event"
          
          name="Prashant Goswami"
          position="B.Tech Cse 4sem"
        /> 
        
      </div>
      <div className={styles.heading}>
        <h1>POSTER DESIGN </h1>
      </div>
      <Message2
          img={madhavimam}
          text=
            ""
          
          name="Dr Madhavi Dhingra"
          position="Assistant Professor,CSE ASET AUMP"
        />
      </div>
     
    </>
  );
};

export default AboutUs;

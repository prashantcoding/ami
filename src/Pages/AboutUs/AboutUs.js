import React, { useEffect } from "react";
import Vedio from "./Vedio";
import styles from "./Astyles.module.css";
import { motion, useAnimation } from "framer-motion";
import Message from "./Message";
import Message2 from "./Message2";
import Vc from "./images/V.C.jpg";
import testimonial2 from "./images/testimonial2.jpg";
import testimonial3 from "./images/testimonial3.jpg";
import pro from "./images/pro.jpeg";
const AboutUs = () => {
  return (
    <>
      <Vedio />
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
          img={testimonial2}
          text=
            "The day, students approached me for this event, I was amazed and proud to know that our youth has so much to offer. They are boost up with enthusiasm and confidence. I am just the one to provide them proper direction."
          
          name="Maj. Gen. Dr. S.C. Jain"
          position="HOI ASET"
        /> 
        <Message
          img={Vc}
          text={
            "I’m glad that students are putting their 100% as a team for the event.Also their concern towards the society makes us proud.My best wishes are with them."
          }
          name={"Lt.Gen. V.K. Sharma"}
          position={"vice-chancellor"}
        />
         <Message2
          img={testimonial2}
          text=
            "The day, students approached me for this event, I was amazed and proud to know that our youth has so much to offer. They are boost up with enthusiasm and confidence. I am just the one to provide them proper direction."
          
          name="Maj. Gen. Dr. S.C. Jain"
          position="HOI ASET"
        /> 
        {/* <Message
          text={
            "The dedication and creativity of students in making this event from scratch is exemplary. The fun and laughter has been backed by the societal causes which is commendable.Best wishes to all the organisers and participants"
          }
          img={testimonial3}
          name={"Prof. Dr. M.P. Kaushik"}
          position="Pro VC"
        />
        <Message2 text={"I found these students as my juniors. Their ideas and management regarding this event, and also co-ordination is appreciable. The students have put their heart and soul in this event. I wish them luck for success in their endeavours."} img={pro} name={"Nasir Khan"} position={"HOD Mechanical,ASET"}/>
         */}
     
    </>
  );
};

export default AboutUs;

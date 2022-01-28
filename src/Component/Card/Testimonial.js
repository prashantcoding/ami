import React from 'react';
import styles from './Tstyle.module.css'
import inst from './insta.png';
import ld from './ld.png'

const Testimonial = (props) => {
  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  }
  return(
      <>
      

        <div className={styles.container}>
            <div className={styles.image_container}>
                <img  className={styles.ui_face} src={props.img}/>
                <h1 className={styles.name}>{props.name}</h1>
            </div> 
           
            <h3 className={styles.text}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </h3>

            <div className={styles.socials}>
                <img className={styles.icons} src={inst}/>
                <img className={styles.icons} src={ld}/>
            </div>
    </div>
    
      </>
  )
};

export default Testimonial;

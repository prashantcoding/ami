import React from 'react';
import styles from './Tstyle.module.css'
import inst from './insta.png';
// import ld from './ld.png'
// import { Link } from 'react-router-dom';
// import { Router, useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const Testimonial = (props) => {
  
  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  }
  
  var handleClick=()=>{
    console.log("coming");
    console.log(props.insta);
   
  }
  return(
      <>
      
      
        <div className={styles.container}>
            <div className={styles.image_container}>
                <img  className={styles.ui_face} src={props.img}/>
                <h1 className={styles.name}>{props.name}</h1>
            </div> 
           
            <h3 className={styles.text}>{props.message}</h3>

           <div className={styles.socials}>
               <a href={props.insta} ><img  src={inst} className={styles.icons}  /></a>
              
               
            </div>
    </div>
    
      </>
  )
};

export default Testimonial;

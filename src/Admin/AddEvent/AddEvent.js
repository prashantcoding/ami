import axios from 'axios';
import React, { useState } from 'react';
import EventsCard from "../../Component/Card/EventsCard";
import styles from '../AdminHome/Astyle.module.css'
const AddEvent = () => {
  const [image, setimage] = useState();
  
  const handleChange=(e)=>{
      e.preventDefault();
      setimage(e.target.files[0]);
      console.log(e.target.files);
  }
  const submit=async(e)=>{
      e.preventDefault();
        axios.post('')
        
  }
    return (
        <form onSubmit={submit}>
        <div style={{color:"white"}}>
            <input className={styles.button} type="file"accept="image/*" onChange={handleChange}/>
            </div>
            <div className={styles.box}><button type="submit" className={styles.button}>submit</button></div>
            </form>
  );
};

export default AddEvent;

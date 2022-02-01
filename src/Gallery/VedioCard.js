import React from 'react';
import styles from "./Gallery.module.css";
const VedioCard = (props) => {
    // console.log(props.id);
  return (<div style={{'margin-left':"2%"}}>
    <iframe style={{"margin":'1%'}}
      className={styles.vedio_S}
      src={props.id}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    ></iframe>
       
   
  </div>);
};

export default VedioCard;



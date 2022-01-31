
import React from "react";
import CategoryBar from "../Component/CategoryBar";
import styles from "./Gallery.module.css";
import VedioCard from "./VedioCard";
import  {videoslist, workshoplist}  from "./vediolist";

const Gallery = () => {
  return (
    <>
      <CategoryBar title="Gallery" />
      <div className={styles.container}>
        
       
        <div className={styles.v_grid}>
        
        <h3>Top 10 Amichroma Event highlights</h3>
        <div className={styles.v_v_flex}>
        {videoslist.map(
          (items) =>
                <VedioCard id={items.id}></VedioCard>
            
            )
        }
          </div>
        
      </div>
      <div className={styles.v_grid}>
        
        <h3>Workshops Glimpse</h3>
        <div className={styles.v_v_flex}>
        {workshoplist.map(
          (items) =>
                <VedioCard id={items.id}></VedioCard>
            
            )
        }
          </div>
        
      </div>
      </div>
    </>
  );
};

export default Gallery;

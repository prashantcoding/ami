
import React from "react";
import CategoryBar from "../Component/CategoryBar";
import styles from "./Gallery.module.css";
import VedioCard from "./VedioCard";
import  {videoslist}  from "./vediolist";
const Gallery = () => {
  return (
    <>
      <CategoryBar title="Gallery" />
      <div className={styles.container}>
        <iframe  
          className={styles.vedio}
          autoPlay
          src="https://www.youtube.com/embed/dPVa3rkJiq8"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          
        ></iframe>
       
        <div className={styles.v_grid}>
        
        <h3>Top 10 Amichroma</h3>
        <div className={styles.v_v_flex}>
        {videoslist.map(
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

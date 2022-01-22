import React from "react";


import EventsCard from "../../Component/Card/EventsCard";


import styles from "./Events.module.css";
import {  val,  music, cod,fifa} from "./ImgImports";

const EventPage = () => {
 
  const lst = [
    {
      id_: "1",
      imgsrc: fifa,
      title: "Fifa",
      price:100,
    },
    {
      id_: "2",
      imgsrc: val,
      title: "Valorant",
      price:200,
    },
    {
      id_: "3",
      imgsrc: music,
      title: "music",
      price:300,
    },
    {
      id_: "4",
      imgsrc: cod,
      title: "Valorant",
      price:100,
    },
    {
      id_: "1",
      imgsrc: fifa,
      title: "Fifa",
      price:100,
    },
    {
      id_: "2",
      imgsrc: val,
      title: "Valorant",
      price:200,
    },
    {
      id_: "3",
      imgsrc: music,
      title: "music",
      price:300,
    },
    {
      id_: "4",
      imgsrc: cod,
      title: "Valorant",
      price:100,
    },{
      id_: "1",
      imgsrc: fifa,
      title: "Fifa",
      price:100,
    },
    {
      id_: "2",
      imgsrc: val,
      title: "Valorant",
      price:200,
    },
    {
      id_: "3",
      imgsrc: music,
      title: "music",
      price:300,
    },
    {
      id_: "4",
      imgsrc: cod,
      title: "Valorant",
      price:100,
    },
    
    
  ];
    
    
    
    
  return (
    <>
     
      <div className={styles.container}>
      
        {lst.map((items) => (
          <EventsCard img={items.imgsrc}   title={items.title} price={items.price} />
        ))}
      </div>
     
    </>
  );
};

export default EventPage;

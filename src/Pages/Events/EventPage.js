import React from "react";
import { useSelector } from "react-redux";

import EventsCard from "../../Component/Card/EventsCard";

import styles from "./Events.module.css";
import { val, music, cod, fifa } from "./ImgImports";

const EventPage = () => {
  const lst = [
    {
      id_: "1",
      imgsrc: fifa,
      title: "Fifa",
      price: 100,
      category: "games",
    },
    {
      id_: "2",
      imgsrc: val,
      title: "Valorant",
      price: 200,
      category: "games",
    },
    {
      id_: "3",
      imgsrc: music,
      title: "music",
      price: 300,
      category: "arts",
    },
    {
      id_: "4",
      imgsrc: cod,
      title: "Valorant",
      price: 100,
    },
    {
      id_: "1",
      imgsrc: fifa,
      title: "Fifa",
      price: 100,
    },
    {
      id_: "2",
      imgsrc: val,
      title: "Valorant",
      price: 200,
    },
    {
      id_: "3",
      imgsrc: music,
      title: "music",
      price: 300,
    },
    {
      id_: "4",
      imgsrc: cod,
      title: "Valorant",
      price: 100,
      category: "games",
    },
    {
      id_: "1",
      imgsrc: fifa,
      title: "Fifa",
      price: 100,
    },
    {
      id_: "2",
      imgsrc: val,
      title: "Valorant",
      price: 200,
    },
    {
      id_: "3",
      imgsrc: music,
      title: "music",
      price: 300,
    },
    {
      id_: "4",
      imgsrc: cod,
      title: "Valorant",
      price: 100,
    },
  ];

  const category = useSelector((state) => state.category);
  console.log(category);

  return (
    <>
      <div className={styles.container}>
        {lst.map((items) =>
          category !== "All" ? (
            items.category == category && (
              <EventsCard
                img={items.imgsrc}
                title={items.title}
                price={items.price}
              />
            )
          ) : (
            <EventsCard
              img={items.imgsrc}
              title={items.title}
              price={items.price}
            />
          )
        )}
      </div>
    </>
  );
};

export default EventPage;

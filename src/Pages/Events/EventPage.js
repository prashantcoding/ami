import React from "react";
import { useSelector } from "react-redux";

import EventsCard from "../../Component/Card/EventsCard";
import { event } from "../../Assets/help_script/events";
import styles from "./Events.module.css";

const EventPage = () => {
  const category = useSelector((state) => state.category);
  console.log(category);

  return (
    <>
      <div className={styles.container}>
        {event.map((items) =>
          category !== "All" ? (
            items.category === category && (
              <EventsCard img={items.imgsrc} title={items.title} />
            )
          ) : (
            <EventsCard img={items.imgsrc} title={items.title} />
          )
        )}
      </div>
    </>
  );
};

export default EventPage;

import styles from "./EventList.module.css";
export default function EventList({ events, setEvents }) {
  const handleClick = (id) => {
    setEvents((prevEvents) => prevEvents.filter((event) => event.id !== id));
    console.log(id);
  };

  return events.map((event, i) => (
    <div className={styles.card} key={event.id}>
      <h2>
        {i + 1} - {event.title}
      </h2>
      <p>
        {event.location} - {event.date}
      </p>
      <button onClick={() => handleClick(event.id)}>delete event</button>
    </div>
  ));
}

import "./App.css";
import { useState } from "react";
import Title from "./components/Title";
import Modal from "./components/Modal";
import EventList from "./components/EventList";
import NewEventForm from "./components/NewEventForm";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [showEvents, setShowEvents] = useState(true);
  const [events, setEvents] = useState([]);

  const addEvent = (event) => {
    setEvents((preEvents) => [...preEvents, event]);
    setShowModal(false);
  };
  const subtitle = "All the latest evens in mario kingdom";
  return (
    <div className="App">
      {/* Title goes here */}

      <Title title="Events in Your Area" subtitle={subtitle} />

      {/* Show and hide events buttons */}

      {showEvents && (
        <div>
          <button onClick={() => setShowEvents(false)}>hide event</button>
        </div>
      )}
      {!showEvents && (
        <div>
          <button onClick={() => setShowEvents(true)}>show event</button>
        </div>
      )}

      {/* EventLists */}

      {showEvents && <EventList events={events} setEvents={setEvents} />}

      {/* Modal */}

      {showModal && (
        <Modal handleClose={() => setShowModal(false)} isSalesModal={true}>
          <NewEventForm addEvent={addEvent} />
        </Modal>
      )}

      {/* Close modal */}

      <div>
        <button onClick={() => setShowModal(true)}>Add New Event</button>
      </div>

      {/* end of app */}
    </div>
  );
}

export default App;

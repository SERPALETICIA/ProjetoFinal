import { useState } from "react";
import EventForm from "./form";
import { IEvent } from "../../../@libix/types";

function EventCreatePage() {

  const [event, setEvent] = useState<IEvent>({
    name: ''
  } as unknown as IEvent);

  return (
    <EventForm 
      event={event}
      setEvent={setEvent}
      showForm={true}
    />
  )
}

export default EventCreatePage;
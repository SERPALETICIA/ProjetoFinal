import { useState } from "react";
import { IEventType } from "../../../@libix/types";
import EventTypeForm from "./form";

function EventTypeCreatePage() {

  const [eventType, setEventType] = useState<IEventType>({
    name: ''
  } as IEventType);

  return (
    <EventTypeForm 
      eventType={eventType}
      setEventType={setEventType}
      showForm={true}
    />
  )
}

export default EventTypeCreatePage;
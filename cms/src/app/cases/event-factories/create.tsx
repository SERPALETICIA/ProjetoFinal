import { useState } from "react";
import EventFactoryForm from "./form";
import { IEventFactory } from "../../../@libix/types";

function EventFactoryCreatePage() {

  const [eventFactory, setEventFactory] = useState<IEventFactory>({
    name: ''
  } as IEventFactory);

  return (
    <EventFactoryForm 
      eventFactory={eventFactory}
      setEventFactory={setEventFactory}
      showForm={true}
    />
  )
}

export default EventFactoryCreatePage;
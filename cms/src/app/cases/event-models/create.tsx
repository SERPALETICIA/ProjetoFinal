import { useState } from "react";
import EventModelForm from "./form";
import { IEventModel } from "../../../@libix/types";

function EventModelCreatePage() {

  const [eventModel, setEventModel] = useState<IEventModel>({
    name: ''
  } as IEventModel);

  return (
    <EventModelForm 
      eventModel={eventModel}
      setEventModel={setEventModel}
      showForm={true}
    />
  )
}

export default EventModelCreatePage;
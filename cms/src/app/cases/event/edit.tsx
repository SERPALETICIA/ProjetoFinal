
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import EventForm from "./form";
import { EventService } from "../../../services/event.service";
import { IEvent } from "../../../@libix/types";



function EventEditPage() {
  const params = useParams();

  const [event, setEvent] = useState<IEvent>({
    description : '',
    photo : '',
    eventDate : 0,
    location : '',
    type : {},
    model : {},
  }  as IEvent);

  useEffect(() => {

    if (params?.id) {
      EventService.getById(params.id)
        .then(result => {
          setEvent(result.data)
        })
        .catch(error => toast.error(String(error)))
    }

  }, [params])

  return (
    <EventForm 
      event={event}
      setEvent={setEvent}
      showForm={true}
    />
  )
}

export default EventEditPage;
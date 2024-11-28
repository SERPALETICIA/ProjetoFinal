
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IEventType } from "../../../@libix/types";
import { EventTypeService } from "../../../services/event-type.service";
import EventTypeForm from "./form";
import { toast } from "react-toastify";


function EventTypeEditPage() {
  const params = useParams();

  const [eventType, setEventType] = useState<IEventType>({
    name: ''
  } as IEventType);

  useEffect(() => {

    if (params?.id) {
      EventTypeService.getById(params.id)
        .then(result => {
          setEventType(result.data)
        })
        .catch(error => toast.error(String(error)))
    }

  }, [params])

  return (
    <EventTypeForm 
      eventType={eventType}
      setEventType={setEventType}
      showForm={true}
    />
  )
}

export default EventTypeEditPage;

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import EventFactoryForm from "./form";
import { toast } from "react-toastify";
import { IEventFactory } from "../../../@libix/types";
import { EventFactoryService } from "../../../services/event-factory.service";


function EventFactoryEditPage() {
  const params = useParams();

  const [eventFactory, setEventFactory] = useState<IEventFactory>({
    name: ''
  } as IEventFactory);

  useEffect(() => {

    if (params?.id) {
      EventFactoryService.getById(params.id)
        .then(result => {
          setEventFactory(result.data)
        })
        .catch(error => toast.error(String(error)))
    }

  }, [params])

  return (
    <EventFactoryForm 
      eventFactory={eventFactory}
      setEventFactory={setEventFactory}
      showForm={true}
    />
  )
}

export default EventFactoryEditPage;

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import EventModelForm from "./form";
import { toast } from "react-toastify";
import { IEventModel } from "../../../@libix/types";
import { EventModelService } from "../../../services/event-model.service";


function EventModelEditPage() {
  const params = useParams();

  const [eventModel, setEventModel] = useState<IEventModel>({
    name: ''
  } as IEventModel);

  useEffect(() => {

    if (params?.id) {
      EventModelService.getById(params.id)
        .then(result => {
          setEventModel(result.data)
        })
        .catch(error => toast.error(String(error)))
    }

  }, [params])

  return (
    <EventModelForm 
      eventModel={eventModel}
      setEventModel={setEventModel}
      showForm={true}
    />
  )
}

export default EventModelEditPage;
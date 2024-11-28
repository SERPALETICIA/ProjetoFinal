
import { TextField } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SideForm from "../../components/ui/side-form";
import { toast } from "react-toastify";
import { IEvent } from "../../../@libix/types";
import { EventService } from "../../../services/event.service";


type EventFormProps = {
  event: IEvent;
  setEvent: (event: IEvent) => void;
  showForm: boolean;
}
function EventForm({
  event,
  //setEvent,
  showForm
}: EventFormProps) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);

  const handleSave = () => {
    setLoading(true);

    const serviceEvent = (event.id) ? 
        EventService.update(event.id, event) :  
            EventService.create(event);

    serviceEvent
      .then(() => {
        toast.success('Registro atualizado com sucesso!');
        navigate('/eventts');
      })
      .catch(error => toast.error(String(error)))
      .finally(() => setLoading(false))

  
  }
  const handleDelete = () => {
    setLoading(true);

    if (event.id) {
      EventService.remove(event.id)
        .then(() => {
        toast.success('Registro excluído com sucesso!');
        navigate('/eventts');
      })
      .catch(error => toast.error(String(error)))
      .finally(() => setLoading(false))
    }
  }
  return (
    <SideForm
      open={showForm}
      title="Cadastro de Tipo de Evento"
      loading={loading}
      onSave={handleSave}
      {...(event.id && {onDelete: handleDelete})}
    >
      <TextField 
        fullWidth
        required
        autoFocus
        label="Tipo do Evento"
        variant="outlined"
        size="small"
        //value={event.name}
        //onChange={event => setEvent({...event, name: event.target.value})}
      />
    </SideForm>
  )
}

export default EventForm;

import { TextField } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IEventType } from "../../../@libix/types";
import { EventTypeService } from "../../../services/event-type.service";
import SideForm from "../../components/ui/side-form";
import { toast } from "react-toastify";

type EventTypeFormProps = {
  eventType: IEventType;
  setEventType: (eventType: IEventType) => void;
  showForm: boolean;
}
function EventTypeForm({
  eventType,
  setEventType,
  showForm
}: EventTypeFormProps) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);

  const handleSave = () => {
    setLoading(true);

    const serviceEvent = (eventType.id) ? 
        EventTypeService.update(eventType.id, eventType) :  
            EventTypeService.create(eventType);

    serviceEvent
      .then(() => {
        toast.success('Registro atualizado com sucesso!');
        navigate('/event-types');
      })
      .catch(error => toast.error(String(error)))
      .finally(() => setLoading(false))

  
  }
  const handleDelete = () => {
    setLoading(true);

    if (eventType.id) {
      EventTypeService.remove(eventType.id)
        .then(() => {
        toast.success('Registro excluído com sucesso!');
        navigate('/event-types');
      })
      .catch(error => toast.error(String(error)))
      .finally(() => setLoading(false))
    }
  }
  return (
    <SideForm
      open={showForm}
      title="Cadastro de Eventos"
      loading={loading}
      onSave={handleSave}
      {...(eventType.id && {onDelete: handleDelete})}
    >
      <TextField 
        fullWidth
        required
        autoFocus
        label="Cadastros do Evento"
        variant="outlined"
        size="small"
        value={eventType.name}
        onChange={event => setEventType({...eventType, name: event.target.value})}
      />
    </SideForm>
  )
}

export default EventTypeForm;
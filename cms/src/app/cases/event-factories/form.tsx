
import { TextField } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SideForm from "../../components/ui/side-form";
import { toast } from "react-toastify";
import { IEventFactory } from "../../../@libix/types";
import { EventFactoryService } from "../../../services/event-factory.service";

type EventFactoryFormProps = {
  eventFactory: IEventFactory;
  setEventFactory: (eventFactory: IEventFactory) => void;
  showForm: boolean;
}
function EventFactoryForm({
  eventFactory,
  setEventFactory,
  showForm
}: EventFactoryFormProps) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);

  const handleSave = () => {
    setLoading(true);

    const serviceEvent = (eventFactory.id) ? 
        EventFactoryService.update(eventFactory.id, eventFactory) :  
            EventFactoryService.create(eventFactory);

    serviceEvent
      .then(() => {
        toast.success('Registro atualizado com sucesso!');
        navigate('/event-Factorys');
      })
      .catch(error => toast.error(String(error)))
      .finally(() => setLoading(false))

  
  }
  const handleDelete = () => {
    setLoading(true);

    if (eventFactory.id) {
      EventFactoryService.remove(eventFactory.id)
        .then(() => {
        toast.success('Registro excluído com sucesso!');
        navigate('/event-Factorys');
      })
      .catch(error => toast.error(String(error)))
      .finally(() => setLoading(false))
    }
  }
  return (
    <SideForm
      open={showForm}
      title="Cadastro do local do Eventos"
      loading={loading}
      onSave={handleSave}
      {...(eventFactory.id && {onDelete: handleDelete})}
    >
      <TextField 
        fullWidth
        required
        autoFocus
        label="Local do Evento"
        variant="outlined"
        size="small"
        value={eventFactory.name}
        onChange={event => setEventFactory({...eventFactory, name: event.target.value})}
      />
    </SideForm>
  )
}

export default EventFactoryForm;

import { TextField } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SideForm from "../../components/ui/side-form";
import { toast } from "react-toastify";
import { IEventModel } from "../../../@libix/types";
import { EventModelService } from "../../../services/event-model.service";

type EventModelFormProps = {
  eventModel: IEventModel;
  setEventModel: (eventModel: IEventModel) => void;
  showForm: boolean;
}
function EventModelForm({
  eventModel,
  setEventModel,
  showForm
}: EventModelFormProps) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);

  const handleSave = () => {
    setLoading(true);

    const serviceEvent = (eventModel.id) ? 
        EventModelService.update(eventModel.id, eventModel) :  
            EventModelService.create(eventModel);

    serviceEvent
      .then(() => {
        toast.success('Registro atualizado com sucesso!');
        navigate('/event-Models');
      })
      .catch(error => toast.error(String(error)))
      .finally(() => setLoading(false))

  
  }
  const handleDelete = () => {
    setLoading(true);

    if (eventModel.id) {
      EventModelService.remove(eventModel.id)
        .then(() => {
        toast.success('Registro excluído com sucesso!');
        navigate('/event-Models');
      })
      .catch(error => toast.error(String(error)))
      .finally(() => setLoading(false))
    }
  }
  return (
    <SideForm
      open={showForm}
      title="Cadastro de Tipo de Eventos"
      loading={loading}
      onSave={handleSave}
      {...(eventModel.id && {onDelete: handleDelete})}
    >
      <TextField 
        fullWidth
        required
        autoFocus
        label="Tipo do Evento"
        variant="outlined"
        size="small"
        value={eventModel.name}
        onChange={event => setEventModel({...eventModel, name: event.target.value})}
      />
    </SideForm>
  )
}

export default EventModelForm;
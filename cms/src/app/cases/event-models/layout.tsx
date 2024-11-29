import { Box, Button, Stack } from "@mui/material";
import AddIcon from "@mui/icons-material/Add"
import { Outlet, useNavigate } from "react-router-dom";
import BreadCrumb from "../../components/ui/bread-crumb";
import EventModelDataGrid from "./datagrid";



function EventModelLayout() {
  
  const navigate = useNavigate();

  const handleCreate = () => {
    navigate('/event-models/new', { replace: true })
  }

  return (
    <Stack
      className="page-container"
    >
      <BreadCrumb title="Cadastro Modelos de Evento" />
      <Box
        display="flex"
        width="100%"
        justifyContent="end"
        marginBottom="1rem"
      >
        <Button
          variant="contained"
          onClick={handleCreate}
        >
          <AddIcon/>
          Adicionar
        </Button>
      </Box>

      <EventModelDataGrid />

      <Outlet />
    </Stack>
  )
}

export default EventModelLayout;
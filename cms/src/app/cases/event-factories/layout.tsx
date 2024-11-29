import { Box, Button, Stack } from "@mui/material";
import AddIcon from "@mui/icons-material/Add"
import { Outlet, useNavigate } from "react-router-dom";
import BreadCrumb from "../../components/ui/bread-crumb";
import EventFactoryDataGrid from "./datagrid";



function EventFactoryLayout() {
  
  const navigate = useNavigate();

  const handleCreate = () => {
    navigate('/event-factories/new', { replace: true })
  }

  return (
    <Stack
      className="page-container"
    >
      <BreadCrumb title="Cadastro do local do Evento" />
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

      <EventFactoryDataGrid />

      <Outlet />
    </Stack>
  )
}

export default EventFactoryLayout;
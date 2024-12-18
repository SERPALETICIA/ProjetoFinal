
import { Paper } from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ActionMenu from "../../components/ui/action-menu";
import { toast } from "react-toastify";
import { ptBR } from "@mui/x-data-grid/locales";
import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { IEventModel } from "../../../@libix/types";
import { EventModelService } from "../../../services/event-model.service";


const columns: GridColDef[] = [
  {
    field: 'id',
    headerName: 'Código Identificação',
    resizable: false,
    width: 350
  },
  {
    field: 'name',
    headerName: 'Tipo do Evento',
    resizable: false,
    flex: 1
  },
  {
    field: 'action',
    headerName: '',
    resizable: false,
    sortable: false,
    disableColumnMenu: true,
    align: 'right',
    width: 100,
    renderCell: (params: GridRenderCellParams) => (
      <ActionMenu 
        itemId={ params.row.id }
      />
    )
  }
];

function EventModelDataGrid() {
  const location = useLocation();

  const [eventModels, setEventModels] = useState<IEventModel[]>([]);

  useEffect(()=> {
      EventModelService.getAll()
        .then(result => {
          setEventModels(result.data)
        })
        .catch(error => toast.error(String(error)))
  }, [location])

  return (
    <Paper
      sx={{
        height: '90%',
        width: '100%'
      }}
    >

      <DataGrid
        rows={eventModels}
        columns={columns}
        sx={{
          '& .MuiDataGrid-columnSeparator': {
            display: 'none'
          }
        }}
        localeText={ptBR.components.MuiDataGrid.defaultProps.localeText}
      />

    </Paper>
  )
}

export default EventModelDataGrid;

import { Divider, List, ListItemButton, ListItemText } from "@mui/material";

function SideMenu() {
  return (
    <aside>
      <List
        component="nav"
      >
        <ListItemText 
          primary="Cadastros" />
        <ListItemButton
          href="/event-types"
        >
          <ListItemText primary="Tipos de Eventos" />
        </ListItemButton>
        <Divider />
        <ListItemButton
          href="/event-factories"
        >
          <ListItemText primary="Local" />
        </ListItemButton>
        <Divider />
        <ListItemButton
          href="/event-models"
        >
          <ListItemText primary="Genero do Evento" />
        </ListItemButton>
        <Divider />
        <ListItemButton
          href="/event"
        >
          <ListItemText primary="Eventos" />
        </ListItemButton>
      </List>
    </aside>
  )
}

export default SideMenu;

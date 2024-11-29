import { Route, Routes } from "react-router-dom"
import Header from "./app/components/ui/header"
import SideMenu from "./app/components/ui/side-menu"
import { ToastContainer } from "react-toastify"
import EventTypeLayout from "./app/cases/event-types/layout"
import EventTypeCreatePage from "./app/cases/event-types/create"
import EventTypeEditPage from "./app/cases/event-types/edit"
import EventFactoryLayout from "./app/cases/event-factories/layout"
import EventFactoryCreatePage from "./app/cases/event-factories/create"
import EventFactoryEditPage from "./app/cases/event-factories/edit"
import EventModelLayout from "./app/cases/event-models/layout"
import EventModelCreatePage from "./app/cases/event-models/create"
import EventModelEditPage from "./app/cases/event-models/edit"
import EventLayout from "./app/cases/event/layout"
import EventCreatePage from "./app/cases/event/create"
import EventEditPage from "./app/cases/event/edit"

function App() {

  return (
    <div className="wrapper">
      <Header />
      <main>
        <SideMenu />
        <Routes>
          <Route path="/event-types" element={ <EventTypeLayout /> }>
            <Route path="new" element={ <EventTypeCreatePage /> } />
            <Route path=":id" element={ <EventTypeEditPage /> } />
          </Route>
          <Route path="/event-factories" element={ <EventFactoryLayout /> }>
            <Route path="new" element={ <EventFactoryCreatePage /> } />
            <Route path=":id" element={ <EventFactoryEditPage /> } />
          </Route>
          <Route path="/event-models" element={ <EventModelLayout /> }>
            <Route path="new" element={ <EventModelCreatePage /> } />
            <Route path=":id" element={ <EventModelEditPage /> } />
          </Route>
          <Route path="/events" element={ <EventLayout /> }>
            <Route path="new" element={ <EventCreatePage /> } />
            <Route path=":id" element={ <EventEditPage /> } />
          </Route>

        </Routes>
      </main>
      <ToastContainer />
    </div>
  )
}

export default App
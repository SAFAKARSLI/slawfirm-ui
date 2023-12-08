import { BrowserRouter, Route, Routes } from "react-router-dom";

import AppNavbar from "./components/AppNavbar.js"
import Content from "./components/Content.js";

import "bootstrap/dist/css/bootstrap.min.css";
import { Stack } from "react-bootstrap";
import { useState, createContext, useEffect } from "react";
import { base_axios } from "./components/Util.js";

export const ClientsContext = createContext()

function App() { 

  const [clients, setClients] = useState([])

  useEffect(() => {
    const fetchClients = async () => {
        const clientsFromDb = await base_axios.get("clients", {
          params: {
            pageNum: 999,
            pageSize: 40
          }
        })
        setClients(clientsFromDb.data)
    }
    fetchClients()
  }, [])

 
  return (
    <ClientsContext.Provider value={[clients, setClients]}>
      <BrowserRouter>
        <Stack gap={4}>
          <AppNavbar />
          <Content />
        </Stack>
      </BrowserRouter>
    </ClientsContext.Provider>
  );
}

export default App;

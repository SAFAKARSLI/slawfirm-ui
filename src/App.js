import { BrowserRouter, Route, Routes } from "react-router-dom";

import AppNavbar from "./components/AppNavbar.js"
import Content from "./components/Content.js";

import "bootstrap/dist/css/bootstrap.min.css";
import { Stack } from "react-bootstrap";
import { useState, createContext, useLayoutEffect, useEffect } from "react";
import { base_axios } from "./components/Util.js";

export const ClientsContext = createContext()

function App() { 

  const [clients, setClients] = useState([])

  useLayoutEffect(() => {
    const fetchClients = async () => {
        const clientsFromDb = await base_axios.get("clients")
        console.log(clientsFromDb.data)
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

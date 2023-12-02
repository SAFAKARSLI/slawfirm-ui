import React from "react";
import { Container } from "reactstrap";
import { Route, Routes } from "react-router-dom";

import MyClients from "./My Clients/MyClientsPage";
import ClientDetails from "./Client Details/ClientDetailsPage";
import Documents from "./Documents/DocumentsPage"
import Generate from "./Self Generate/SelfGeneratePage"
import GenericForm from "./GenericForm";



const Content = () => (
  <Container
    fluid
    className='content'
  >
    <Routes>
      <Route exact path="/" element={<MyClients />} />
      <Route exact path="/clients/:clientId" element={<ClientDetails />} />
      <Route path="*" element={<MyClients />} />
      <Route exact path="/documents" element={<Documents />} />
      <Route exact path="/generate" element={<Generate />} />
      <Route exact path="generate/retainer_agreement" element={<GenericForm />} />
      <Route exact path="generate/written_plea" element={<GenericForm />} />
    </Routes>
  </Container>
);

export default Content;

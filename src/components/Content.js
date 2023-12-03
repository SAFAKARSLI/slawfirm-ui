import React from "react";
import { Route, Routes } from "react-router-dom";

import MyClients from "./My Clients/MyClientsPage";
import ClientDetails from "./Client Details/ClientDetailsPage";
import Documents from "./Documents/DocumentsPage"
import Generate from "./Generate/Tabs"
import RetainerAgreement from "./Generate/RetainerAgreement";
import WrittenPlea from "./Generate/WrittenPlea";
import { Container } from "react-bootstrap";



const Content = () => (
  <Container>
    <Routes>
      <Route exact path="/clients" element={<MyClients />} />
      <Route exact path="/clients/:clientId" element={<ClientDetails />} />
      <Route path="*" element={<MyClients />} />
      <Route exact path="/documents" element={<Documents />} />
      <Route exact path="/generate" element={<Generate />} />
      <Route exact path="generate/retainer_agreement" element={<RetainerAgreement />} />
      <Route exact path="generate/written_plea" element={<WrittenPlea />} />
    </Routes>
  </Container>

);

export default Content;

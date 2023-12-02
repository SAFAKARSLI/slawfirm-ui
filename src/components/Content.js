import React from "react";
import { Container } from "reactstrap";
import { Route, Routes } from "react-router-dom";

import MyClients from "./My Clients/MyClientsPage";
import ClientDetails from "./Client Details/ClientDetailsPage";
import Documents from "./Documents/DocumentsPage"
import Generate from "./Generate/Tabs"
import RetainerAgreement from "./Generate/RetainerAgreement";
import WrittenPlea from "./Generate/WrittenPlea";



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
      <Route exact path="generate/retainer_agreement" element={<RetainerAgreement />} />
      <Route exact path="generate/written_plea" element={<WrittenPlea />} />
    </Routes>
  </Container>
);

export default Content;

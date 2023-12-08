import {useState, useContext} from "react";
import { Col, Stack, Table, Pagination } from "react-bootstrap";

import ClientItem from "./ClientItem"
import GenerateModal from "./GenerateModal";


function ClientList({clients}) {
    const [modalShow, setModalShow] = useState(false);
    const [clientInfo, setClientInfo] = useState({});


    const renderClients = () => {
        const renderedList = clients.map( (p, i) => {
            return <ClientItem 
            key={p.id} 
            id={p.id} 
            alienNumber={p.alienNumber} 
            clientName={p.fullName} 
            index={i}
            triggerModal={() => setModalShow(true)}
            setClientInfo={setClientInfo}
            />
        })
        return renderedList
    }


    return (
        <Stack gap={2}>
            <Col>
                <Table
                    className="table"
                    size="sm"
                    hover
                    responsive
                    striped
                    bordered
                >
                    <thead className="table-header">
                        <tr >
                            <th>#</th>
                            <th>A-Number</th>
                            <th>Full Name</th>
                            <th>Client Details</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderClients()}
                    </tbody>
                </Table>
                <GenerateModal clientInfo={clientInfo} show={modalShow} onHide={() => setModalShow(false)}/>    
            </Col>
            <Col className="d-flex justify-content-center">
                <Pagination>
                    <Pagination.First />
                    <Pagination.Prev />
                    <Pagination.Item>{1}</Pagination.Item>
                    <Pagination.Ellipsis />

                    <Pagination.Item>{10}</Pagination.Item>
                    <Pagination.Item>{11}</Pagination.Item>
                    <Pagination.Item active>{12}</Pagination.Item>
                    <Pagination.Item>{13}</Pagination.Item>
                    <Pagination.Item disabled>{14}</Pagination.Item>

                    <Pagination.Ellipsis />
                    <Pagination.Item>{20}</Pagination.Item>
                    <Pagination.Next />
                    <Pagination.Last />
                </Pagination>
            </Col>
        </Stack>
    )
}

export default ClientList;
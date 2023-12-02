import axios from "axios";
import {useEffect, useState} from "react";
import { Table } from "reactstrap";
import { Container, Row, Col } from "react-bootstrap";

import ClientItem from "./ClientItem"

function ClientList() {
    const [clients, setClients] = useState(["SAFA KARSLI", "CENAB YAVUZ"])

    useEffect( () => {
        const getClients = async () => {
            const fetchClients = await axios.get("http://localhost:8080/clients")
            setClients(fetchClients.data)
        }
        getClients()
    }, [])


    return (
        <Container id="my_clients">
            <Row>
                <Col 
                // sm={10}
                >
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
                                <th>Phone Number</th>
                                <th>Client Details</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {clients.map( (p, i) => {
                                return <ClientItem 
                                key={p.id} 
                                id={p.id} 
                                aNum={p.alienNumber} 
                                clientName={p.fullName} 
                                phoneNumber={p.phoneNumber}
                                index={i}
                                />
                            })}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    )
}

export default ClientList;
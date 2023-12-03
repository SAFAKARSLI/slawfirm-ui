import axios from "axios";
import {useEffect, useState, createContext} from "react";
import { Table } from "reactstrap";

import ClientItem from "./ClientItem"
import GenerateModal from "./GenerateModal";

function ClientList() {
    const [clients, setClients] = useState([])
    const [modalShow, setModalShow] = useState(false);
    const [clientInfo, setClientInfo] = useState({})

    useEffect( () => {
        const getClients = async () => {
            const fetchClients = await axios.get("http://localhost:8080/clients")
            setClients(fetchClients.data)
        }
        getClients()
    }, [])

    return (
        <div>
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
                        alienNumber={p.alienNumber} 
                        clientName={p.fullName} 
                        phoneNumber={p.phoneNumber}
                        index={i}
                        triggerModal={() => setModalShow(true)}
                        setClientInfo={setClientInfo}
                        />
                    })}
                </tbody>
            </Table>
            <GenerateModal clientInfo={clientInfo} show={modalShow} onHide={() => setModalShow(false)}/>
        </div>
    )
}

export default ClientList;
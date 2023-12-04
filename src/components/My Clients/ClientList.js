import {useState, useContext} from "react";
import { Table } from "react-bootstrap";

import ClientItem from "./ClientItem"
import GenerateModal from "./GenerateModal";

import { ClientsContext } from "../../App";


function ClientList() {
    const [modalShow, setModalShow] = useState(false);
    const [clientInfo, setClientInfo] = useState({});
    const [clients, setClients]  = useContext(ClientsContext);    


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
                        <th>Client Details</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {renderClients()}
                </tbody>
            </Table>
            <GenerateModal clientInfo={clientInfo} show={modalShow} onHide={() => setModalShow(false)}/>
        </div>
    )
}

export default ClientList;
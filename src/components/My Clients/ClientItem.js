import { Link } from "react-router-dom";
import { Badge, Dropdown, Button, Stack } from "react-bootstrap";
import { GENERATE_ACTIONS } from "../Util.js"
import axios from "axios";
import { useContext } from "react";
import { ClientsContext } from "../../App.js";



function ClientItem({setClientInfo, clientName, id, alienNumber, index, triggerModal}) {

    const [clients, setClients] = useContext(ClientsContext)

    const onDeleteClick = async () => {
        const postDelete = await axios.delete(`http://localhost:8080/clients/${id}`)
        setClients(clients.filter((e) => e.fullName != clientName ))
    }

    const onGenerateClick = () => {
        triggerModal()
        setClientInfo({client_name: clientName, alien_number: alienNumber})
    }

    return (
        <tr className="table-row" key={id}>
            <td scope="row"> 
                {index}
            </td>
            <td className="item">
                {alienNumber}
            </td>
            <td className="item">
                {clientName}
            </td>
            <td className="item">
                <Link  to={`/clients/${id}`}>View Details</Link>
            </td>
            <td>
                <Stack direction="horizontal" >
                    <Dropdown>
                        <Badge bg="success" as={Dropdown.Toggle}>Options</Badge>
                            
                            <Dropdown.Menu>
                            <Dropdown.Header style={{textDecoration: "underline"}}>GENERATE</Dropdown.Header>
                                {GENERATE_ACTIONS.map((title,i) => {
                                    return <Dropdown.Item key={i} onClick={() => onGenerateClick()}>{title}</Dropdown.Item>
                                })}
                                <Dropdown.Divider />
                                <Dropdown.Item as={Button}  onClick={() => onDeleteClick()}>Delete</Dropdown.Item>
                            </Dropdown.Menu>         
                    </Dropdown>
                </Stack>
            </td>
                              
        </tr>
    )
    
}

export default ClientItem;
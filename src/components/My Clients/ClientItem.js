import { Link } from "react-router-dom";
import { useState } from "react";
import { Badge, Dropdown } from "react-bootstrap";
import { GENERATE_ACTIONS } from "../Util.js"


function ClientItem({setClientInfo, clientName, id, alienNumber, phoneNumber, index, triggerModal}) {

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
                {phoneNumber}
            </td>
            <td className="item">
                <Link  to={`/clients/${id}`}>View Details</Link>
            </td>
            <td>
                <Dropdown>
                    <Badge bg="success" as={Dropdown.Toggle}>Generate</Badge>
                        <Dropdown.Menu>
                            {GENERATE_ACTIONS.map((title,i) => {
                                return <Dropdown.Item key={i} onClick={() => onGenerateClick()}>{title}</Dropdown.Item>
                            })}
                        </Dropdown.Menu>         
                </Dropdown></td>
        </tr>
    )
    
}

export default ClientItem;
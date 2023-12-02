import { Link } from "react-router-dom";
import ActionsDropdown from "../ActionsDropdown";
import { useState } from "react";


function ClientItem({clientName, id, aNum, phoneNumber, index}) {

    const [isVisible, setVisible] = useState(false)

    return (
        <tr className="table-row" onMouseEnter={() => setVisible(true)} onMouseLeave={()=> setVisible(false)} key={id}>
            <td scope="row"> 
                {index}
            </td>
            <td className="item">
                {aNum}
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
            <td><ActionsDropdown /></td>
        </tr>
    )
    
}

export default ClientItem;
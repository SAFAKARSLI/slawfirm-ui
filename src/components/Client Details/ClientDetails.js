import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { base_axios } from "../Util";


function ClientDetails() {
    const {clientId} = useParams()
    const [client, setClient] = useState([])

    useEffect(()  => {
        const getClient = async () => {
            const fetchClients = await base_axios.get("clients/"+clientId)
            setClient(fetchClients.data)
        }
        getClient()

    }, [])

    var output = "";
    Object.keys(client).forEach(k => {
        output = output.concat(`${k}: ${client[k]} `)
    })

    return <div>{output}</div>
}


export default ClientDetails;
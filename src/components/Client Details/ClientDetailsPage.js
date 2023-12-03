import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";



function ClientDetails() {
    const {clientId} = useParams()
    const [client, setClient] = useState({})

    useEffect(()  => {
        const getClient = async () => {
            const fetchClients = await axios.get("http://localhost:8080/clients/"+clientId)
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
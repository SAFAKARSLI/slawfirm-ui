import axios from "axios"
import { useEffect, useState } from "react"
import { Table } from "react-bootstrap";



export default function Documents() {

    const [documents, setDocuments] = useState([]);

    useEffect( () => {
        const getDocuments = async () => {
            
            const documents = await axios.get("http://localhost:8080/documents")
            setDocuments(documents.data)
        }
        getDocuments()
    }, [])

    return (
        
        <Table>
            <div>
                <ul>{documents.map((e, i) => {
                    return (
                        <li>
                            <a href={URL.createObjectURL(new Blob([new Uint8Array([e.content]).buffer], {type: "application/pdf"}))}>{e.name}</a>  
                        </li>
                    )    
                })}
                </ul>
            </div>

        </Table>

    )
}



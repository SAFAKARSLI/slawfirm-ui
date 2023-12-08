import ClientList from "./ClientList"
import SearchBar from "./SearchBar"
import { Link } from "react-router-dom"
import { Col, Stack, Button } from "react-bootstrap"
import Navigator from "./Navigator"
import { useContext, useEffect, useState } from "react"
import { ClientsContext } from "../../App"
import { base_axios } from "../Util"

function MyClients() {

    const [clients, setClients] = useContext(ClientsContext)
    const [searchText, setSearchText] = useState("");
    const [debouncedText, setDebouncedText] = useState("")
    const [filteredClients, setFilteredClients] = useState([])

    useEffect(() => {
        if (searchText.length >= 3) {
            const timeoutId = setTimeout((() => {
                setDebouncedText(searchText);
             }), 500)
             
             return (() => {
                clearTimeout(timeoutId)
             })
        }
    }, [searchText])

    useEffect(() => {
        base_axios.get("clients", {
                params: {
                    name: searchText
                }
            }).then((res) => {
                setFilteredClients(res.data)
            })

    }, [debouncedText])


    
    return (
        <Stack gap={4}>
            <Stack direction="horizontal" gap={3} className="flex-column flex-sm-row">
                    <Col  xs={12} sm={8} md={9} lg={10}>
                        <SearchBar search={searchText} setSearch={setSearchText}/>
                    </Col>
                        <Button 
                        style={{width: "100%", minWidth: "8rem"}}
                        variant="outline-dark" 
                        as={Link}
                        to={"/clients/add_client"}
                        >
                            Add Client +
                        </Button>
            </Stack>
                <ClientList clients={searchText == "" ? clients : filteredClients}/>
            <Navigator />
        </Stack>
    );
}

export default MyClients;
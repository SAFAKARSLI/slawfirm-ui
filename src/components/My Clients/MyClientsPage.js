import ClientList from "./ClientList"
import SearchBar from "./SearchBar"
import AddClientButton from "./AddClientButton"
import { Stack } from "react-bootstrap"
import Navigator from "./Navigator"


function MyClients() {
    
    return (
        <Stack gap={4}>
            <SearchBar />
            <AddClientButton />
            <ClientList />
            <Navigator />
        </Stack>
    );
}

export default MyClients;
import ClientList from "./ClientList"
import SearchBar from "./SearchBar"
import AddClientButton from "./AddClientButton"

function MyClients() {

    return (
        <div>
            <SearchBar />
            <AddClientButton />
            <ClientList />
        </div>
    );
}

export default MyClients;
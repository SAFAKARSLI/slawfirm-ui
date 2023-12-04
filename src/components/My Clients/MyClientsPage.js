import ClientList from "./ClientList"
import SearchBar from "./SearchBar"
import AddClientButton from "./AddClientButton"
import { Stack } from "react-bootstrap"
import axios from "axios";
import { useState } from "react";



function MyClients() {
    
    return (
        <Stack gap={4}>
            <SearchBar />
            <AddClientButton />
            <ClientList />
        </Stack>
    );
}

export default MyClients;
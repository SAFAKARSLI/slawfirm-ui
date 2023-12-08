import { useEffect, useState } from "react"
import Form from "react-bootstrap/Form"
import { base_axios } from "../Util"
import { Stack, ListGroup } from "react-bootstrap"
import { Link } from "react-router-dom"

export default ({search, setSearch}) => {



    


    return (
        <Stack>
            <Form.Control 
            size="m" 
            type="text" 
            value={search} 
            placeholder="Search client name..." 
            onChange={(e) => { setSearch(e.target.value)}}/>
        </Stack>
    )
}
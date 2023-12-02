import React from "react"
import Dropdown from "react-bootstrap/Dropdown"

function ActionItem({title}) {
    return (
        <Dropdown.Item 
        eventKey={() => title.toLowerCase().split(' ').join('_')}
        >
            {title}
        </Dropdown.Item>
    )
}


export default ActionItem
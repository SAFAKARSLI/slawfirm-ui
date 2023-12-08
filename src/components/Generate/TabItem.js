import { Nav } from "react-bootstrap"
import { Link } from "react-router-dom"


export default function TabItem({href, title, active}) {


    return (
        <Nav.Item>
              <Nav.Link active={active} as={Link} to={href}>{title}</Nav.Link>
        </Nav.Item>
    )
}
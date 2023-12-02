import { Nav } from "react-bootstrap"


export default function TabItem({href, title, active}) {


    return (
        <Nav.Item>
              <Nav.Link active={active} href={href}>{title}</Nav.Link>
        </Nav.Item>
    )
}
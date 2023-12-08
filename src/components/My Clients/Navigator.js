import { Navbar, Button, Stack } from "react-bootstrap";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";





export default function Navigator() {
    return (
            <Stack gap={2} className="position-fixed bottom-0 end-0 m-3">
                <Button className="rounded-circle" variant="warning" onClick={() => window.scrollTo(0, 0)}><FaArrowUp/></Button>
                <Button className="rounded-circle" variant="outline-warning" onClick={() => window.scrollTo(0, document.body.scrollHeight)}><FaArrowDown/></Button>
            </Stack>
    )
}
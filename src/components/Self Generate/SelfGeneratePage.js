import { Container, Nav, Stack } from "react-bootstrap"
import GenericForm from "../GenericForm"

export default function SelfGeneratePage() {

    return (
      <Stack gap={4}>
        <div>
          <Nav variant="tabs">
            <Nav.Item>
              <Nav.Link href="generate/retainer_agreement">Retainer Agreement</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="generate/written_plea">Written Plea</Nav.Link>
            </Nav.Item>
          </Nav>
        </div>

          <div>
            <GenericForm />
          </div>
        </Stack>
    )
}
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import GenericForm from "../GenericForm"
import { Container, Row } from 'react-bootstrap';

function GenerateModal({clientInfo, show, onHide}) {
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Generate Retainer Agreement
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
            <Row className="justify-content-md-center">
                <GenericForm initalForm={clientInfo}/>
            </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default GenerateModal;
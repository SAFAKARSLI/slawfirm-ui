import Alert from 'react-bootstrap/Alert';
import { Link } from 'react-router-dom';

function ClientGenerateSuccessAlert({showAlert, clientInfo, hide}) {

  setTimeout(hide, 3000)

  return (
      <Alert show={showAlert} variant="success">
        {`${clientInfo["fullName"]} (A# ${clientInfo["alienNumber"]}) is successfully created. `}<Alert.Link as={Link} to={`/clients/${clientInfo["id"]}`}>See client details.</Alert.Link>
      </Alert>
  );
}

export default ClientGenerateSuccessAlert;
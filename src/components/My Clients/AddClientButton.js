import { Button } from "react-bootstrap"
import { Link } from "react-router-dom";

function AddClientButton() {
    return  <Button 
    variant="light" 
    as={Link}
    to={"/clients/add_client"}
    >
        Add Client +
    </Button>
}

export default AddClientButton;
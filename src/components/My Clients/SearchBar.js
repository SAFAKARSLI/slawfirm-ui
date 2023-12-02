import Form from "react-bootstrap/Form"

export default () => {
    return <Form.Control size="m" type="text" placeholder="Type client info" onChange={(e) => console.log(e.target.value)}/>
}
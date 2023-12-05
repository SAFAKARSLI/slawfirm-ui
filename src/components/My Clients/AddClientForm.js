import { base_axios } from "../Util";
import { useEffect, useRef, useState } from "react";
import { 
    Form, 
    Row, 
    Col, 
    Button
} from "react-bootstrap";
import ClientGenerateSuccessAlert from "./ClientGenerateSuccessAlert";

export default function AddClientForm() {

    const [form, setForm] = useState({})
    const [alertInfo, setAlertInfo] = useState({
        showAlert: false,
        buttonLoad: false
    })

    const triggerGenerate = async () => {
        setAlertInfo({buttonLoad: true})

        await base_axios({ 
            url: "clients",
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            data: {...form},
            responseType: "json"
        }).then((res) => {
            setAlertInfo({
                showAlert: true,
                clientInfo: res.data
            })
            setForm({
                fullName: "",
                alienNumber: ""
            })
        }).catch((e) => {
            console.log(e)
        })

        
    }
    
    return (
        <Form>
            <h3>Add Client</h3>
            <hr />
            <Row>
                <Col lg={6} md={8} className="mb-3">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control
                    autoFocus
                    type="text" 
                    placeholder="John Doe"
                    value={form["fullName"]}
                    onChange={(e) => setForm({...form, fullName: e.target.value})}/>
                </Col>

                <Col lg={6} md={8} className="mb-3">
                    <Form.Label>Alien Number</Form.Label>
                    <Form.Control 
                    type="text" 
                    placeholder="*** *** ***" 
                    value={form["alienNumber"]}
                    onChange={e => setForm({...form, alienNumber : e.target.value})}
                    />
                </Col>
            </Row>
            <Row>
                <Col className="mb-3" lg={6} md={8}>
                        <Button 
                            variant="primary" 
                            disabled={alertInfo["buttonLoad"]}
                            onClick={alertInfo["buttonLoad"] ? null : () => triggerGenerate()} 
                        >
                            {alertInfo["buttonLoad"] ? 'Loading...' : 'Add Client'}
                        </Button>
                </Col>
            </Row>
            {alertInfo["showAlert"] && <ClientGenerateSuccessAlert {...alertInfo} hide={() => { setAlertInfo({showAlert: false})}} clientInfo={alertInfo["clientInfo"]}/>}
        </Form>
  );
}
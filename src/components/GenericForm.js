import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { 
    Form, 
    Row, 
    Col, 
    Button,
    InputGroup,
    DropdownButton,
    Dropdown,
} from "react-bootstrap";

import { paymentParser, MONTHS } from "./Util";


export default function GenericForm() {

    const [form, setForm] = useState({})
    const downloadLink = useRef();
    const [document, setDocument] = useState("62ae3b52-8ff0-11ee-b9d1-0242ac120002")

    // Setting initial values for form elements
    useEffect(() => {
        const today = new Date()
        setForm({...form, 
            day: today.getDate(),
            month: MONTHS.at(today.getMonth()),
            year: today.getFullYear(),
        
            total_fee: 6000,
            initial_payment: 500,
            monthly: 500
        })
    }, [])

    const triggerGenerate = async () => {
        setForm({...form, payment_plan: paymentParser(form)})

        const generatedDoc = await axios({ 
            url: "http://localhost:8080/documents/"+document.toString(),
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            data: form,
            responseType: "arraybuffer"
        }).then((res) => {
            const blob = new Blob([res.data], {type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'})
            downloadLink.current.href = URL.createObjectURL(blob)
            downloadLink.current.download = `${form["client_name"]} Retainer Agreement.docx`
            downloadLink.current.click()
        }).catch((e) => {
            console.log(e)
        })
    }


    return (
        <Form>
            <Row>
                <Col lg={4} md={8} className="mb-3">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control
                    type="text" 
                    placeholder="John Doe" 
                    onChange={e => setForm({...form, client_name : e.target.value})}/>
                </Col>

                <Col lg={4} md={8} className="mb-3">
                    <Form.Label>Alien Number</Form.Label>
                    <Form.Control 
                    type="text" 
                    placeholder="245 145 233" 
                    onChange={e => setForm({...form, a_number : e.target.value})}
                    />
                </Col>
            </Row>

            <Row>
                <Col className="mb-3" lg={4} md={8}>
                    <Form.Label>Date of Agreement</Form.Label>
                    <InputGroup className="mb-3" >
                        <DropdownButton
                        variant="outline-dark"
                        id="month-dropdown"
                        title={form["month"]}
                        >
                            {MONTHS.map((e,i) => {
                                return <Dropdown.Item 
                                key={i}
                                value={i}
                                active={form["month"] == e}
                                onClick ={() => setForm({...form, month: e})}
                                >{e}</Dropdown.Item>
                            })}
                        </DropdownButton>
                        <Form.Control type="number" id="day" value={form["day"]} onChange={e => setForm({...form, day : parseInt(e.target.value)})}/>
                        <DropdownButton
                            variant="secondary"
                            id="year-dropdown"
                            title={form["year"]}
                            disabled
                        />
                    </InputGroup>
                </Col>

                <Col className="mb-3" lg={4} md={8}>
                    <Form.Label>Payment Type</Form.Label>
                    <InputGroup>
                            <Form.Control 
                                type="number" 
                                value={form["total_fee"]} 
                                onChange={e => setForm({...form, total_fee : parseInt(e.target.value)})}/>
                            <Form.Control 
                                type="number" 
                                value={form["initial_payment"]} 
                                onChange={e => setForm({...form, initial_payment : parseInt(e.target.value)})}/>
                            <Form.Control 
                                type="number" 
                                value={form["monthly"]} 
                                onChange={e => setForm({...form, monthly : parseInt(e.target.value)})}/>
                    </InputGroup>

                    
                </Col>
            </Row>
            <Row>
                <Col lg={8} md={8}>
                        <Button variant="primary" onClick={(e) => triggerGenerate(e)} >Generate</Button>
                        <a ref={downloadLink}></a>
                </Col>
            </Row>
        </Form>
  );
}
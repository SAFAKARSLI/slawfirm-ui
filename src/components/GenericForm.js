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

import { paymentParser, MONTHS, dateParser } from "./Util";

export default function GenericForm({initalForm}) {

    const downloadLink = useRef();
    const [buttonLoad, setButtonLoad] = useState(false)
    const [checked, setChecked] = useState(true)
    const [document, setDocument] = useState("62ae3b52-8ff0-11ee-b9d1-0242ac120002")
    const [form, setForm] = useState({...initalForm, 
        document_name: `${initalForm["client_name"]} Retainer Agreement`,
        day: new Date().getDate(),
        month: MONTHS.at(new Date().getMonth()),
        year: new Date().getFullYear(),

        total_fee: 6000,
        initial_payment: 500,
        monthly: 500})



    const triggerGenerate = async () => {

        console.log(form)

        setButtonLoad(true)

        await axios({ 
            url: "http://localhost:8080/documents/"+document.toString(),
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            data: {...form, 
                payment_plan: paymentParser(form), 
                date_of_agreement: `${form["month"]} ${form["day"]}, ${form["year"]}`},
            responseType: "json"
        }).then((res) => {
            
            
            console.log(res)
            window.open(res.data.cloudUrl).onload = setButtonLoad(false)

            // const blobDocx = new Blob([res.data], {type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'})
            // downloadLink.current.href = URL.createObjectURL(blobDocx)
            // downloadLink.current.download = `${form["client_name"]} Retainer Agreement.docx`
            // downloadLink.current.click()

            // downloadLink.current.href = URL.createObjectURL(blobPdf)
            // downloadLink.current.download = `${form["client_name"]} Retainer Agreement.pdf`
            // downloadLink.current.click()

        }).catch((e) => {
            console.log(e)
        })

        
    }



    const onChangeName = (value) => {
        if (checked) {
            setForm({...form, client_name: value, document_name: `${value} Retainer Agreement`})
        } else {
            setForm({...form, client_name: value})
        }
        
    }
    
    return (
        <Form>
            <Row>
                <Col lg={6} md={8} className="mb-3">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control
                    type="text" 
                    placeholder="John Doe"
                    value={form["client_name"]} 
                    onChange={(e) => onChangeName(e.target.value)}/>
                </Col>

                <Col lg={6} md={8} className="mb-3">
                    <Form.Label>Alien Number</Form.Label>
                    <Form.Control 
                    type="text" 
                    placeholder="*** *** ***" 
                    value={form["alien_number"]}
                    onChange={e => setForm({...form, a_number : e.target.value})}
                    />
                </Col>
            </Row>

            <Row>
                <Col className="mb-3" lg={6} md={8}>
                    <Form.Label>Date of Agreement</Form.Label>
                    <InputGroup>
                        <DropdownButton
                        variant="outline-dark"
                        id="month-dropdown"
                        title={form["month"]}
                        >
                            {MONTHS.map((e,i) => {
                                return <Dropdown.Item 
                                key={i}
                                value={i}
                                active={form["month"] === e}
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

                <Col className="mb-3" lg={6} md={8}>
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
                <Col className="mb-3" lg={6} md={8}>
                    <Form.Label>File Name</Form.Label>
                    <InputGroup >
                        <InputGroup.Checkbox 
                        checked={checked} 
                        onChange={() => setChecked(!checked)} 
                        aria-label="Checkbox for following text input" />
                        <Form.Control 
                            value={form["document_name"]}
                            disabled={checked} 
                            onChange={e => setForm({...form, document_name : e.target.value})}/>         
                    </InputGroup>
                </Col>
            </Row>
            <Row>
                <Col className="mb-3" lg={6} md={8}>
                        <Button 
                            variant="primary" 
                            disabled={buttonLoad}
                            onClick={buttonLoad ? null : (e) => triggerGenerate(e)} 
                        >
                            {buttonLoad ? 'Loading...' : 'Generate'}
                        </Button>
                        <a ref={downloadLink}></a>
                </Col>
            </Row>
        </Form>
  );
}
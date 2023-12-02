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



export default function GenericForm() {

    const [form, setForm] = useState({year: 2023})
    const downloadLink = useRef();
    const MONTHS = ["January", "February", "March", "April",
            "May", "June", "July", "August", "September", "October", "November", "December"]
    const [document, setDocument] = useState("62ae3b52-8ff0-11ee-b9d1-0242ac120002")

    useEffect(() => {
        const today = new Date()
        setForm({...form, 
            day: today.getDate(),
            month: MONTHS.at(today.getMonth()),
            year: today.getFullYear(),
        
            total: 6000,
            initial_deposit: 500,
            monthly: 500
        })
    }, [])

    const triggerGenerate = async (e) => {
        e.preventDefault()
        setForm({...form, payment_plan: paymentParser(form)})
        console.log(form)

        const generatedDoc = await axios({ 
            url: "http://localhost:8080/documents/"+document.toString(),
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            data: form,
            responseType: "arraybuffer"
        }).catch((e) => {
            console.log(e)
        })

        console.log(generatedDoc)

        const blob = new Blob([generatedDoc.data], {type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'})
        
        downloadLink.current.href = URL.createObjectURL(blob)
        downloadLink.current.download = `${form["client_name"]} Retainer Agreement.docx`
        downloadLink.current.click()
        
    }


    const paymentParser = (data) => {

        var total = data["total"]
        var initial_deposit = data["initial_deposit"]
        var monthly = data["monthly"]
        var day = data["day"]
        var month = MONTHS.indexOf(data["month"])
        var year = data["year"]

        data = {...data, total, initial_deposit, monthly}

        var currentDate = new Date(year, month, day)
        const formatter = new Intl.DateTimeFormat('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' });
        var formattedDate = formatter.format(currentDate)
        
        var output = `For the above services, the Client shall compensate Sinan Sari,  Ahmet Seyithanoglu, and Sinan Turhan according to the following fee schedule: A legal fee of $${total} is to be paid as follows: $${initial_deposit} to start case preparation, and then; \n\n`
        
        // Initial payment is processed
        total -= initial_deposit;
        currentDate.setMonth(currentDate.getMonth() + 1)
        
        while (total > 0) {
            
            formattedDate = formatter.format(currentDate)
            
            if (total - monthly <= 0) { // If last payment
             output += `${formattedDate}: $${total}`
            break;
            } 
            else {
            // Intallment is processed
            output += `${formattedDate}: $${monthly}\n`
            currentDate.setMonth(currentDate.getMonth() + 1);
            total -= monthly;
            } 
            
        }
        return output
    }

    return (
        <Form>
            <Row className="mb-3">
                <Form.Group as={Col}>
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control 
                    type="text" 
                    placeholder="John Doe" 
                    onChange={e => setForm({...form, client_name : e.target.value})}/>
                </Form.Group>

                <Form.Group as={Col}>
                    <Form.Label>Alien Number</Form.Label>
                    <Form.Control 
                    type="text" 
                    placeholder="245 145 233" 
                    onChange={e => setForm({...form, a_number : e.target.value})}
                    />
                </Form.Group>
            </Row>

            <Row className="mb-3">
                <Form.Group as={Col}>
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
                </Form.Group>

                <Form.Group as={Col}>
                    <Form.Label>Payment Type</Form.Label>
                    <InputGroup>
                            <Form.Control 
                                type="number" 
                                value={form["total"]} 
                                onChange={e => setForm({...form, total : parseInt(e.target.value)})}/>
                            <Form.Control 
                                type="number" 
                                value={form["initial_deposit"]} 
                                onChange={e => setForm({...form, initial_deposit : parseInt(e.target.value)})}/>
                            <Form.Control 
                                type="number" 
                                value={form["monthly"]} 
                                onChange={e => setForm({...form, monthly : parseInt(e.target.value)})}/>
                    </InputGroup>
                </Form.Group>

                <Form.Group controlId="signatue" className="mb-3" as={Col}>
                    <Form.Label >Signature</Form.Label>
                    <Form.Control type="file" onChange={e => setForm({...form, signature : e.target.value})}/>
                </Form.Group>
            </Row>
        

            <Button variant="primary" onClick={(e) => triggerGenerate(e)} >
                Generate
            </Button>

            <a ref={downloadLink}></a>
        </Form>
  );
}
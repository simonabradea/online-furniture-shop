import { Button, Container, Row, Col, InputGroup, FormControl } from "react-bootstrap";
import { MdPermIdentity, MdOutlineEmail, MdOutlineHomeWork, MdOutlinePhoneInTalk } from 'react-icons/md';
import './pages.css';

const OrderForm = () => {
    return (
        <div className="order-form d-flex flex-lg-wrap">
            <Container>
                <div>
                    <img src="images/logo/10a.png" alt="logo" className="img-responsive order-img"></img>
                </div>
                <h5 className="text-center mb-3">Completați datele următoare:</h5>
                <div className="mt-5">
                    <Row>
                        <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-lg rounded-lg">
                            <InputGroup className="mb-3">
                                <InputGroup.Text id="basic-addon1"><MdPermIdentity /></InputGroup.Text>
                                <FormControl
                                    placeholder="Numele și prenumele dumneavoastră"
                                    aria-label="Nume și prenume"
                                    aria-describedby="basic-addon1"
                                />
                            </InputGroup>

                            <InputGroup className="mb-3">
                                <InputGroup.Text id="basic-addon1"><MdOutlinePhoneInTalk /></InputGroup.Text>
                                <FormControl
                                    placeholder="Introduceți numărul de telefon"
                                    aria-label="Număr de telefon"
                                    aria-describedby="basic-addon1"
                                />
                            </InputGroup>

                            <InputGroup className="mb-3">
                                <InputGroup.Text id="basic-addon1"><MdOutlineEmail /></InputGroup.Text>
                                <FormControl
                                    placeholder="Introduceți adresa de e-mail"
                                    aria-label="E-mail"
                                    aria-describedby="basic-addon1"
                                />
                            </InputGroup>

                            <InputGroup className="mb-3">
                                <InputGroup.Text id="basic-addon1"><MdOutlineHomeWork /></InputGroup.Text>
                                <FormControl
                                    placeholder="Introduceți adresa de livrare"
                                    aria-label="Adresa de livrare"
                                    aria-describedby="basic-addon1"
                                />
                            </InputGroup>
                            <Button variant="dark">Finalizează comanda</Button>{' '}
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    )
}

export default OrderForm;
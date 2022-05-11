import { Button, Container, Row, Col, Form } from "react-bootstrap";
import './pages.css';

const Register = () => {
    return (
        <>
            <Container>
                <div className="logoImgParent">
                    <img className="logoImg" src="images/logo/logo.png" alt="logo"></img>
                </div>
                <h3 className="text-center">Înregistrare:</h3>
                <Row>
                    <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg">
                        <Form>
                            <Form.Group className='mb-2' controlId="formBasicEmail">
                                <Form.Label>Nume</Form.Label>
                                <Form.Control type="email" placeholder="Numele tău" />
                            </Form.Group>

                            <Form.Group className='mb-2' controlId="formBasicEmail">
                                <Form.Label>Prenume:</Form.Label>
                                <Form.Control type="email" placeholder="Prenumele tău" />
                            </Form.Group>

                            <Form.Group className='mb-2' controlId="formBasicEmail">
                                <Form.Label>Email:</Form.Label>
                                <Form.Control type="email" placeholder="user@domeniu.com" />
                            </Form.Group>

                            <Form.Group className='mb-2' controlId="formBasicPassword">
                                <Form.Label>Parolă:</Form.Label>
                                <Form.Control type="password" placeholder="Parolă" />
                            </Form.Group>

                            <Form.Group className='mb-2' controlId="formBasicPassword">
                                <Form.Label>Confirmare parolă:</Form.Label>
                                <Form.Control type="password" placeholder="Confirmă parola" />
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Înregistrează-te!
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Register;
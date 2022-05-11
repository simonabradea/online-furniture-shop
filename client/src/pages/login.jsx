import { Button, Container, Row, Col, Form } from "react-bootstrap";
import './pages.css';

const Login = () => {
    return (
        <>
            <Container>
                <div className="logoImgParent">
                    <img className="logoImg" src="images/logo/logo.png" alt="logo"></img>
                </div>
                <h3 className="text-center">Autentificare:</h3>
                <Row>
                    <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg">
                        <Form>
                            <Form.Group className='mb-3' controlId="formBasicEmail">
                                <Form.Label>Email:</Form.Label>
                                <Form.Control type="email" placeholder="user@domeniu.com" />
                            </Form.Group>

                            <Form.Group className='mb-3' controlId="formBasicPassword">
                                <Form.Label>Parolă</Form.Label>
                                <Form.Control type="password" placeholder="Parolă" />
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Autentifică-te!
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Login;
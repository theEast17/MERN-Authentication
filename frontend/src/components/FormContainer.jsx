import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

const FormContainer = ({ children }) => {
  return(
    <Container>
        <Row className="justify-content-md-center mt-5">
            <Col xs={12} md={6} className="card p-5">
                {children}
            </Col>
        </Row>
    </Container>
  )
};

export default FormContainer;

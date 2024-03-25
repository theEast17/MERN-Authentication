/* eslint-disable react/no-unescaped-entities */
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
const Hero = () => {

  const { userInfo } = useSelector((state) => state.auth);
  return (
    <Card style={{ width: "48rem", margin: "50px auto" }}>
      <Card.Body>
        <Card.Title className="text-center">
          <b>MERN Authentication</b>
        </Card.Title>
        <Card.Text>
          This is a boilerplate for MERN authentication that stores a JWT in an
          HTTP-only cookie. It also uses Redux Toolkit and the React bootstrap
          library
        </Card.Text>

       {!userInfo &&  <div style={{ display: "flex", justifyContent: "center", gap: "15px" }}>
          <LinkContainer to="/login">
            <Button variant="primary">Sign In</Button>
          </LinkContainer>

          <LinkContainer to="/register">
            <Button variant="secondary">Sign Up</Button>
          </LinkContainer>
        </div>}
      </Card.Body>
    </Card>
  );
};

export default Hero;

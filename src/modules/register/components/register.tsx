"use client";

import { Button, Container } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import "../styles/register.scss";
import { useRouter } from "next/navigation";

// eslint-disable-next-line @next/next/no-async-client-component
const RegisterPage = () => {
  const router = useRouter();
  const handlerLogin = () => {
    router.push("login");
  };

  return (
    <Container className="login">
      <h2 className="mb-3 center">Register:</h2>
      <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3"
      >
        <Form.Control type="email" placeholder="name@example.com" />
      </FloatingLabel>
      <FloatingLabel
        className="mb-3"
        controlId="floatingPassword"
        label="Password"
      >
        <Form.Control type="password" placeholder="Password" />
      </FloatingLabel>
      <FloatingLabel
        className="mb-3"
        controlId="floatingCompany"
        label="Company"
      >
        <Form.Control type="text" placeholder="Company" />
      </FloatingLabel>
      <FloatingLabel
        className="mb-3"
        controlId="floatingAddress"
        label="Address"
      >
        <Form.Control type="text" placeholder="Address" />
      </FloatingLabel>
      <div className="login-adv">
        <Button className="ml-2">Register</Button>
        <Button
          variant="secondary"
          onClick={() => {
            handlerLogin();
          }}
        >
          Login
        </Button>
      </div>
    </Container>
  );
};
export default RegisterPage;

"use client";

import { Button, Container } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import "../styles/login.scss";
import { useRouter } from "next/navigation";

// eslint-disable-next-line @next/next/no-async-client-component
const LoginPage = () => {
  const router = useRouter();
  const handlerRegister = () => {
    console.log(111);
    router.push("register");
  };
  return (
    <Container className="login">
      <h2 className="mb-3">Login Page</h2>
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
      <div className="login-adv">
        <Button className="ml-2">Login</Button>
        <Button
          variant="secondary"
          onClick={() => {
            handlerRegister();
          }}
        >
          Register
        </Button>
      </div>
    </Container>
  );
};
export default LoginPage;

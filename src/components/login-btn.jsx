"use client";
import React from "react";
import Nav from "react-bootstrap/Nav";
import { Button } from "react-bootstrap";
import { signIn, signOut, useSession } from "next-auth/react";
const SigninButton = (props) => {
  const { data: session } = useSession();
  if (session && session.user) {
    return (
        <>
          <Nav.Link href="/user">{session.user.name}</Nav.Link>
          <Button onClick={() => signOut()} className="btn btn-danger">
            Sign Out
          </Button>
        </>
    );
  }
  return (
    <>
      <Nav.Link href="/login">Login</Nav.Link>
      <button onClick={() => signIn(props.name, { callbackUrl: process.env.NEXTAUTH_URL+'/user' })} className="btn btn-info">
        Sign In {props.name}
      </button>
      <Nav.Link href="/register">Register</Nav.Link>
  </>
  );
};

export default SigninButton;

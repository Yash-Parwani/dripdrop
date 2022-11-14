import { Form, Button } from "react-bootstrap";
import PlzLogin from "../assets/images/PlzLogin.png";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { auth } from "../firebase";
import db from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc, collection } from "firebase/firestore";

function Register() {
  const navigate = useNavigate();
  const email = useRef(null);
  const pass = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.formBasicEmail.value);

    // creating user
    createUserWithEmailAndPassword(
      auth,
      email.current.value,
      pass.current.value
    )
      .then(async (userCred) => {
        await setDoc(doc(db, "users", `${userCred.user.uid}`), {
          name: event.target.formBasicName.value,
          type: event.target.formBasicType.value,
          email: event.target.formBasicEmail.value,
          phone: event.target.formBasicPhoneNum.value,
        });
      })
      .catch((error) => alert(error.message));

    navigate("/");
  };
  return (
    <div
      className="Register"
      style={{
        backgroundImage: "url(" + PlzLogin + ")",
        opacity: "0.8",
        backgroundColor: "black",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "91.9vh",
        width: "99.99vw",
        position: "relative",
        zIndex: "0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Form
        style={{
          width: "40%",
        }}
        onSubmit={handleSubmit}
      >
        <Form.Group className="mb-3 " controlId="formBasicEmail">
          <Form.Label
            style={{
              color: "white",
            }}
          >
            Email address
          </Form.Label>
          <Form.Control ref={email} type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3 " controlId="formBasicName">
          <Form.Label
            style={{
              color: "white",
            }}
          >
            Name
          </Form.Label>
          <Form.Control type="text" placeholder="Enter your name" />
        </Form.Group>
        <Form.Group className="mb-3 " controlId="formBasicType">
          <Form.Label
            style={{
              color: "white",
            }}
          >
            Enter Type: P for personal , G for goverenment
          </Form.Label>
          <Form.Control type="text" placeholder="Enter type" />
        </Form.Group>
        <Form.Group className="mb-3 " controlId="formBasicPhoneNum">
          <Form.Label
            style={{
              color: "white",
            }}
          >
            Phone{" "}
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your 10 digit phone number"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label
            style={{
              color: "white",
            }}
          >
            Password
          </Form.Label>
          <Form.Control ref={pass} type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Register;

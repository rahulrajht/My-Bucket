import React, { useRef, useState } from "react";
import "../styles/login.css";
import { useAuth } from "../context/AuthProvider";
import { Link, useHistory } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Account() {
  toast.configure();
  const { SignUp } = useAuth();
  const [isLoading, setLoading] = useState(false);
  const [err, setErr] = useState("");
  const emailRef = useRef();
  const passRef = useRef();
  const nameRef = useRef();
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const history = useHistory();

  async function handleSignIN() {
    setLoading(true);
    setErr(null);

    try {
      const response = await SignUp(
        nameRef.current.value,
        emailRef.current.value,
        passRef.current.value
      );
      if (response.status === 200) {
        toast.dark("Account created Successfully Please Login to Continue.", {
          autoClose: 5000
        });
        history.push("/login");
      }
    } catch (err) {
      setErr("Something went wrong");
    }

    setLoading(false);
  }
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title>Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {err && <div className="alert-d">{err}</div>}
          <img
            className="img"
            src="https://1000logos.net/wp-content/uploads/2016/11/New-Google-Logo.jpg"
            alt="Google"
          />
          <input
            className="inputs"
            ref={nameRef}
            type="name"
            name="name"
            placeholder="Name"
          />

          <input
            className="inputs"
            ref={emailRef}
            type="email"
            name="email"
            placeholder="Email"
          />

          <input
            className="inputs"
            ref={passRef}
            type="password"
            name="Password"
            placeholder="Password"
          />
          <Link className="link" to="/login">
            {" "}
            Already Have an Account? Log In{" "}
          </Link>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handleSignIN} variant="primary">
            Sign In
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

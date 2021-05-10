import React, { useRef, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { Link, useHistory, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useAuth } from "../context/AuthProvider";
import "../styles/login.css";

export default function Login() {
  const { Login, dispatchData } = useAuth();
  const emailRef = useRef();
  const passRef = useRef();
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);
  const history = useHistory();
  const location = useLocation();
  const SET_USER = "setUser";

  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  async function HandleLogin() {
    try {
      setLoading(true);
      setError("");
      const result = await Login(emailRef.current.value, passRef.current.value);

      localStorage.setItem("token", JSON.stringify(result.data.token));
      localStorage.setItem("email", JSON.stringify(result.data.email));
      localStorage.setItem("name", JSON.stringify(result.data.name));
      localStorage.setItem("isUserLogin", JSON.stringify(true));
      if (result.status === 200) {
        dispatchData({
          type: SET_USER,
          currentUser: result.data.email
        });
        history.push(location.state ? location.state.from : "/");
      }
    } catch (err) {
      setError("Failed to Log In");
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
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {error && <div className="alert-d">{error}</div>}
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
          <Link className="link" to="/account">
            {" "}
            New Here? Sign Up{" "}
          </Link>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={HandleLogin} variant="primary">
            Log In
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

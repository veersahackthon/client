import React from "react";
import img from "../../assets/s-9.png";
import cake from "../../assets/s-8.png";
import logo from "../../assets/s-7.png";
import "./login.css";
import { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import app from "../../Utils/Firebase.js";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";

import useStore from "../../Utils/store";

const Login = (props) => {
  let navigate = useNavigate();
  const [number, setNumber] = useState("");
  const setPhoneNumber = useStore((state) => state.setPhoneNumber);
  const [error, setError] = useState("");
  const isLoggedIn = useStore((state) => state.isLoggedIn);
  const setResult = useStore((state) => state.setResult);
  const auth = getAuth(app);
  const user = useStore((state) => state.user);

  function setUpRecaptha(number) {
    const recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      { size: "invisible" },
      auth
    );
    recaptchaVerifier.render();
    return signInWithPhoneNumber(auth, number, recaptchaVerifier);
  }

  const getOtp = async (e) => {
    e.preventDefault();
    setError("");
    if (number === "" || number === undefined)
      return toast("Enter valid number", { type: "error" });
    try {
      //for signup checking with document id oc customer
      const phoneNumber = "+91" + number;
      const response = await setUpRecaptha(phoneNumber);
      setResult(response);
      setPhoneNumber(number);
      navigate("/verify", { replace: true });
    } catch (err) {
      toast(err.message, { type: "error" });
    }
  };

  // useEffect(() => {
  //   if (isLoggedIn !== undefined && isLoggedIn && user !== undefined) {
  //     navigate(`/`, { replace: true });
  //   }
  // }, []);

  const mystyle = {
    backgroundImage: `url(${img})`,
    height: "100vh",
  };

  return (
    <div style={mystyle} className="login-page">
      <div className="login-main">
        <h2 className="heading">Login</h2>
        <div className="mid-sec">
          <img src={cake} alt="cake" className="cakeimg" />
          <div class="vl"></div>
          <div className="middle-right-div">
            <div className="mid-right">
              <img src={logo} alt="seal" className="sealimg" />

              <Form onSubmit={getOtp}>
                <Form.Control
                  type="text"
                  placeholder="Phone Number"
                  onChange={(e) => setNumber(e.target.value)}
                />
                <div id="recaptcha-container"></div>
                <Button type="submit" variant="primary" className="verify">
                  Submit
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

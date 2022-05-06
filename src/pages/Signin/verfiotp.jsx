import React from "react";
import Form from "react-bootstrap/Form";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

import img from "../../assets/s-9.png";
import cake from "../../assets/s-8.png";
import logo from "../../assets/s-7.png";

import "./verifyotp.css";

import { userLogin } from "../../Utils/api";

import useStore from "../../Utils/store";
import { useNavigate } from "react-router-dom";

function OTPPage() {
  const navigate = useNavigate();

  const [otp, setOtp] = useState("");
  const result = useStore((state) => state.result);
  const phoneNumber = useStore((state) => state.phoneNumber);
  const setUser = useStore((state) => state.setUser);
  const setJwt = useStore((state) => state.setJwt);
  const login = useStore((state) => state.login);
  const isLoggedIn = useStore((state) => state.isLoggedIn);
  const user = useStore((state) => state.user);

  const getUserDetails = async () => {
    var response = await userLogin({
      phoneNumber: phoneNumber,
    });
    try {
      if (response[0]) {
        const newUser = {
          id: response[1].user._id,
          name: response[1].user.name,
          phoneNumber: response[1].user.phoneNumber,
          wallet: response[1].user.wallet,
        };
        setUser(newUser);
        setJwt(response[1].token);
        login();
        navigate("/", { replace: true });
        toast(`Log-in Success`, { type: "success" });
      } else {
        console.log("User Not Found Please Make Profile");
        navigate("/signup");
      }
    } catch (error) {
      toast(error.message, { type: "error" });
    }
  };

  const verifyOtp = async (e) => {
    e.preventDefault();
    if (otp === "" || otp === null) {
      toast(`Please enter otp`, { type: "error" });
    }

    try {
      await result.confirm(otp);
      console.log("Verified the user");
      await getUserDetails();
    } catch (err) {
      toast(`${err.message}`, { type: "error" });
      navigate("/login");
    }
  };
  const mystyle = {
    backgroundImage: `url(${img})`,
    height: "100vh",
  };

  // useEffect(() => {
  //   if (isLoggedIn !== undefined && isLoggedIn && user !== undefined) {
  //     navigate(`/`, { replace: true });
  //   }
  // }, []);

  return (
    <div style={mystyle} className="verify-page">
      <div className="verify-main">
        <h2 className="verify-heading">Verify OTP</h2>
        <div className="verify-mid-sec">
          <img src={cake} alt="cake" className="cakeimg" />
          <div class="vl"></div>
          <div className="middle-right-div">
            <div className="verify-mid-right">
              <img src={logo} alt="seal" className="sealimg" />
              <Form onSubmit={verifyOtp}>
                <Form.Group>
                  <Form.Label className="enter-otp">ENTER THE OTP</Form.Label>
                  <Form.Control
                    type="text"
                    id="otp"
                    placeholder="OTP"
                    onChange={(e) => setOtp(e.target.value)}
                  />
                </Form.Group>
                <button type="submit" className="verify-button">
                  Verify
                </button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OTPPage;

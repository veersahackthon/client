import React from "react";
import img from "../../assets/s-9.png";
import cake from "../../assets/s-8.png";
import { toast } from "react-toastify";

import { useRef, useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";

import { userSignup } from "../../Utils/api";
import useStore from "../../Utils/store";
import { useNavigate } from "react-router-dom";
import "./SignUp.css";

const SignUp = () => {
  const navigate = useNavigate();
  const [image, setImage] = useState();
  const [preview, setPreview] = useState("");
  const [name, setName] = useState("");
  const isLoggedIn = useStore((state) => state.isLoggedIn);
  const user = useStore((state) => state.user);
  const setUser = useStore((state) => state.setUser);
  const setJwt = useStore((state) => state.setJwt);
  const login = useStore((state) => state.login);
  const fileInputRef = useRef(HTMLInputElement);
  const phoneNumber = useStore((state) => state.phoneNumber);

  const handleChange = async (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("name", name);
    formData.append("profilePhoto", preview);
    formData.append("phoneNumber", phoneNumber);
    console.log("on click ", formData, formData.get("name"));

    var response = await userSignup(formData);
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
      console.log(response[1].message);
      toast(response[1].message.toString(), { type: "error" });
    }
  };
  const mystyle = {
    backgroundImage: `url(${img})`,
    height: "100vh",
  };

  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result + "");
      };
      reader.readAsDataURL(image);
    } else {
      setPreview(null);
    }
  }, [image]);

  // useEffect(() => {
  //   if (isLoggedIn !== undefined && isLoggedIn && user !== undefined) {
  //     navigate(`/`, { replace: true });
  //   }
  // }, []);

  return (
    <div style={mystyle} className="profile-page">
      <div className="profile-main">
        <h2 className="profile-heading">Profile</h2>
        <div className="profile-mid-sec">
          <img src={cake} alt="cake" className="cakeimg" />
          <div class="vl"></div>
          <div className="middle-right-div">
            <div className="profile-mid-right">
              {preview ? (
                <img
                  className="profile-image"
                  src={preview}
                  style={{ objectFit: "cover" }}
                  alt="profile"
                  onClick={() => {
                    setImage(null);
                  }}
                />
              ) : (
                <div
                  className="circle"
                  onClick={(event) => {
                    event.preventDefault();
                    fileInputRef.current.click();
                  }}
                >
                  <center className="circle-name">Abcd</center>
                </div>
              )}
              <input
                type="file"
                style={{ display: "none" }}
                ref={fileInputRef}
                accept="image/*"
                onChange={(event) => {
                  const file = event.target.files[0];
                  if (file && file.type.substr(0, 5) === "image") {
                    setImage(file);
                  } else {
                    setImage(null);
                  }
                }}
              />
              <Form className="profile-details" onSubmit={handleChange}>
                <Form.Group>
                  <Form.Control
                    type="text"
                    placeholder="Name"
                    onChange={(e) => setName(e.target.value)}
                  />
                </Form.Group>

                <Button
                  type="submit"
                  variant="primary"
                  className="profile-button"
                >
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

export default SignUp;

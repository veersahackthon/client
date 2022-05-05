import React from "react";
import axios from "axios";

const URL = "https://localhost:5000";

export const userSignup = async (data) => {
  try {
    var response = await axios.post(`${URL}/user/signup`, data);
    if (response.status === 200) {
      return [true, response.data];
    } else {
      return [false, response.data];
    }
  } catch (error) {
    return [false, error];
  }
};

export const userLogin = async (data) => {
  try {
    var response = await axios.post(`${URL}/user/login`, data);
    if (response.status === 200) {
      return [true, response.data];
    }
    return [false, response.data];
  } catch (error) {
    return [false, error];
  }
};

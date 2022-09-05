import React from "react";
import { useNavigate } from "react-router-dom";
import DashBoard from "../pages/DashBoard/DashBoard";

const PrivateOutlet = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  if (!token) {
    navigate("/login");
  }
  return <DashBoard />;
}

export default PrivateOutlet;
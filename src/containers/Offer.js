import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";

const Offer = () => {
  return (
    <div>
      <Header />
      Offer
      <Link to="/">HomePage</Link>
    </div>
  );
};

export default Offer;

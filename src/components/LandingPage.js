// components/LandingPage.js
import React from "react";
import Home from "./home";
import Services from "./services";
import Consult from "./consult";
import Contact from "./Contact";
import MessageForm from "./MessageForm";
import Card from "./card";

const LandingPage = () => {
  return (
    <>
      <Home />
      <Services />
      <Consult />
      <Contact />
      <MessageForm />
      <Card />
    </>
  );
};

export default LandingPage;

import React, { useEffect, useState } from "react";
import { CardShared } from "../components/CardShared";

import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <CardShared />
      <Footer />
    </div>
  );
};

export default Homepage;

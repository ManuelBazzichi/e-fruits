import React from "react";
// import Modal from "./components/Modal";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import CardShared from "./components/CardShared"


const App = () => {

    return (
      <div>
        {/* <Navbar /> */}
        {/* <Modal /> */}
        <LandingPage /> 
        {/* <CardShared /> */}
        <Footer />
      </div>
    );
  };
  
  export default App;

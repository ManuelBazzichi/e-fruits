import React from "react";
// import Modal from "./components/Modal";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import LandingPage from "./pages/LandingPage";


const App = () => {

    return (
      <div>
        <Navbar />
        {/* <Modal /> */}
        <LandingPage /> 
        <Footer />
      </div>
    );
  };
  
  export default App;

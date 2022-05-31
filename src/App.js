import React from "react";
// import Modal from "./components/Modal";
import CardShared from "./components/CardShared";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";


const App = () => {
    return (
      <div>
        <Navbar />
        <CardShared />
        {/* <Modal /> */}
        <Footer />
      </div>
    );
  };
  
  export default App;

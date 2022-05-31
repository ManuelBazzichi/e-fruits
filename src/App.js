import React from "react";
// import Modal from "./components/Modal";
import CardShared from "./components/CardShared";
import { Footer } from "./pages/Footer";
import { Navbar } from "./pages/Navbar";


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

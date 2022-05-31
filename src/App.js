import React from "react";
import CardShared from "./components/CardShared";
import { Footer } from "./pages/Footer";

import { Navbar } from "./pages/Navbar";


const App = () => {
    return (
      <div>
        
        <Navbar />
        <CardShared />
        <Footer />
        
      </div>
    );
  };
  
  export default App;
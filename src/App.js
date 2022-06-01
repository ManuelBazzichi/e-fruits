import React from "react";
import { BrowserRouter , Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import LandingPage from "./pages/LandingPage";



const App = () => {

  return (
    <div>
            <BrowserRouter>
            <Routes>
                    <Route exact path='/' element={<LandingPage />} />
                    <Route path='/homepage' element={<Homepage />} />
            </Routes>
            </BrowserRouter> 
      

    </div>
  );
};

export default App;

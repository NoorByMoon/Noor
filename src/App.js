
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegistrationForm from "./Auth/RegistrationForm";
import LandingPage from "./LandingPage"
import Dashboard from "./Dashboard"


function App() {
  return (
    <BrowserRouter className="App">
      <Routes>
        <Route path="/" element={<RegistrationForm/>} />
       
        <Route path='/Landing-page' element={<LandingPage/>}/>
        <Route path='/Dashboard' element={<Dashboard/>}/>                                        
      </Routes>
    </BrowserRouter>

  );
}

export default App;


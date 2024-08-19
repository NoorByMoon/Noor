
import Login from './Auth/login'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ForgetPassword from "./Auth/forgetPassword";


function App() {
  return (
    <BrowserRouter className="App">
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/Forget-Password" element={<ForgetPassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

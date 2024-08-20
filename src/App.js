
import Login from './Auth/login'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ForgetPassword from "./Auth/forgetPassword";
import ResetPassword from './Auth/resetPassword';


function App() {
  return (
    <BrowserRouter className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Forget-Password" element={<ForgetPassword />} />
        <Route path='/Reset-Password' element={<ResetPassword/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

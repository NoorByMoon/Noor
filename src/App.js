

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Components/Shared/Footer";
import HomePage from "./pages/HomePage/HomePage";


function App() {
  return (
    <BrowserRouter className="App">
      <Routes>
        <Route path="/" element = {<HomePage/>}/>
        <Route path="/" element={<Footer/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;

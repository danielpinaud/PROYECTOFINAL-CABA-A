import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar"; 
import Footer from "./components/Footer";
import Login from "./pages/Login";
import QuienesSomos from "./pages/QuienesSomos";
import Cabañas from "./pages/Cabañas";
import Servicios from "./pages/Servicio";

function App() {
  

  return (
    <Router>
          
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/quienessomos" element={<QuienesSomos />} />
                <Route path="/cabañas" element={<Cabañas />} />
                <Route path="/servicios" element={<Servicios />} />
            </Routes>
            <Footer />
    </Router>
  )
}

export default App

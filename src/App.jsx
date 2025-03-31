import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar"; 
import Footer from "./components/Footer";
import Register from "./pages/Register";
import Login from "./pages/Login";
import QuienesSomos from "./pages/QuienesSomos";
import Cabañas from "./pages/Cabañas";
import Servicios from "./pages/Servicios";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/quienessomos" element={<QuienesSomos />} />
          <Route path="/cabañas" element={<Cabañas />} />
          <Route path="/servicios" element={<Servicios />} />
        </Routes>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
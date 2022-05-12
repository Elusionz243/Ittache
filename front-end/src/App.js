import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import LandingPage from "./components/landingPage/LandingPage";
import ServiceForm from "./components/forms/ServiceForm";

export default function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/service/form" element={<ServiceForm />} />
        </Routes>
      </Router>
    </>
  );
}

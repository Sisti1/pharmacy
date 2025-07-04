import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from "./components/header";
import Footer from "./components/footer";

import Home from "./components/home";
import Services from "./components/services";
import Consult from "./components/consult";
import Contact from "./components/Contact";
import MessageForm from "./components/MessageForm";
import Card from "./components/card";
import LandingPage from "./components/LandingPage"; 
function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Routes>
             <Route path="/" element={<LandingPage />} />
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/consult" element={<Consult />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/messageform" element={<MessageForm />} />
          <Route path="/card" element={<Card />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import About from "./component/About";
import Contact from "./component/ContactUs";
import Service from "./component/Service";
import Footer from "./component/Footer";


const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About/>} />
          <Route path="/services" element={<Service />} />
          <Route path="/contact-us" element={<Contact />} />
        </Routes>
      </Router>
      <Footer />

    </>
  );
}

export default App;

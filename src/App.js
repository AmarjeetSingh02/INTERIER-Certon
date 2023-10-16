// import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import About from "./component/About";
// import ContactUs from "./component/ContactUs";
import Footer from "./component/Footer";
// import Home from "./component/Home";
import Navbar from "./component/Navbar";
// import Service from "./component/Service";


const App = () => {
  return (
    <div className="App">
      {/* <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Header />} />
        </Routes>
        <Footer />
      </Router> */}
        <Navbar/>
      {/* <ContactUs /> */}
      {/* <Service/> */}
      <About/>
      <Footer/>
      
    </div>
  );
}

export default App;

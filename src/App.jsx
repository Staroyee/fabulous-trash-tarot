import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home/Home";
import Card from "./Pages/Card/Card";
import "./App.css";


function App() {
  return (
    <>
      <section className="background">
        <Router>
          <Header />
          <section className="container">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/card" element={<Card />} />
            </Routes>
          </section>
          <Footer />
        </Router>
      </section>
    </>
  );
}

export default App;

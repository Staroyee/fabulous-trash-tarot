import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home/Home";
import "./App.css";

function App() {
  return (
    <>
    <section className="background">
      <Header />
      <section className="container">
        <Home />
      </section>
      <Footer />
      </section>
    </>
  );
}

export default App;

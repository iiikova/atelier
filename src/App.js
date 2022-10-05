import "./App.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Portfolio from "./components/Portfolio";
import Service from "./components/Service";
import Social from "./components/Social";
import Subscribe from "./components/Subscribe";
import Footer from "./components/Footer";
import About from "./components/About";

function App() {
  return (
    <>
      <Navbar />
      <Main />
      <Portfolio />
      <About />
      <Service />
      <Social />
      <Subscribe />
      <Footer />
    </>
  );
}

export default App;

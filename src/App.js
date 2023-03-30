import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import './App.css';
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Section1 from "./components/section1/Section1";
import Section2 from "./components/section2/Section2";
import Section3 from "./components/section3/Section3";

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Hero/>
    <Section1/>
    <Section2/>
    <Section3/>
    </div>
  );
}

export default App;

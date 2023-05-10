import Navbar from "./components/navabar";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import About from "./components/about";
import Portfolio from "./components/portfolio";
import Experience from "./components/Experience";


function App() {
  return (
    <div>
       <Navbar />
       <Home />
       <About />
       <Portfolio />
       <Experience />

       <SocialLinks />
       
    </div>
   
  );
}

export default App;

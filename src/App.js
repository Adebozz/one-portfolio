import Navbar from "./components/navabar";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import About from "./components/about";
import Portfolio from "./components/portfolio";


function App() {
  return (
    <div>
       <Navbar />
       <Home />
       <About />
       <Portfolio />

       <SocialLinks />
       
    </div>
   
  );
}

export default App;

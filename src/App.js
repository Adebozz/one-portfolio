import Navbar from "./components/navabar";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import About from "./components/about";


function App() {
  return (
    <div>
       <Navbar />
       <Home />
       <About />

       <SocialLinks />
       
    </div>
   
  );
}

export default App;

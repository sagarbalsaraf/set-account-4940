import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Footer from "./Components/Footer"
import BgImage from './Components/BgImage';
import CardLink from './Components/Cards';
import SupportSection from "./Components/Support&Learn";
import FooterTop from './Components/Footer2';

function App() {
  return (
    <div className="App" >
  
  <Navbar/>
  <BgImage/>
  <CardLink/>
  <SupportSection />
  <FooterTop/>
  <Footer/>

    </div>
  );
}

export default App;

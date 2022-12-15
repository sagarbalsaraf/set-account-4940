import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Footer from "./Components/Footer"
import BgImage from './Components/BgImage';

function App() {
  return (
    <div className="App">
  <Navbar/>
  <BgImage/>
  <Footer/>
    </div>
  );
}

export default App;

import Navbar from '../Components/Navbar';
import Footer from "../Components/Footer"
import BgImage from '../Components/BgImage';
import CardLink from '../Components/Cards';
import SupportSection from "../Components/Support&Learn";
import FooterTop from '../Components/Footer2';
import Poster from '../Components/CustomerPoster';
import AllRoutes from '../Components/AllRoutes';

function Home(){
    return (
        <>
        <AllRoutes />
        <Navbar/>
        <BgImage/>
        <CardLink/>
        <Poster/>
        <SupportSection />
        <FooterTop/>
        <Footer/>
        
        </>
    )
}

export default Home;
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homebar from './Pages/Homebar';
import RoadTravel from './Pages/SliderPages/RoadTravel';
import Family from './Pages/SliderPages/Family';
import CoupleTravel from './Pages/SliderPages/CoupleTravel';
import FriendsTravel from './Pages/SliderPages/FriendsTravel';
import Historical from './Pages/SliderPages/Historical';
import JungleTravel from './Pages/SliderPages/JungleTravel';
import MountainTravel from './Pages/SliderPages/MountainTravel';
import OceanTravel from './Pages/SliderPages/OceanTravel';
import OldCity from './Pages/SliderPages/OldCity';
import SoloTravel from './Pages/SliderPages/SoloTravel';
import GalleryPage from './Pages/GalleryPage';
import LoginPage from './Pages/LoginPage';
import SignUpPage from './Pages/SignUpPage';
import IndividualBlog from './Pages/IndividualBlog'
import Subscription from './Pages/Subscription';
import Login from './Pages/LoginPage';
import Geographical from "./Pages/GeographicalPage";
import S from './Pages/S';

// import  Slider from "../src/Components/Slider"

function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/homebar"element={<Homebar/>} />
        <Route path="/:category" element={<RoadTravel/>} />
        <Route path="/oceanTravel" element={<OceanTravel/>} />
        <Route path="/mountainTravel" element={<MountainTravel/>} />
        <Route path="/oldCityTravel" element={<OldCity/>} />
        <Route path="/historicalTravel" element={<Historical/>} />
        <Route path="/soloTravel" element={<SoloTravel/>} />
        <Route path="/jungleTravel" element={<JungleTravel/>} />
        <Route path="/friendsTravel" element={<FriendsTravel/>} />
        <Route path="/familyTravel" element={<Family/>} />
        <Route path="/coupleTravel" element={<CoupleTravel/>} />
        <Route path="/gallery" element={<GalleryPage/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/signup" element={<SignUpPage/>} />
        <Route path="/eachpost/:postId" element={<IndividualBlog/>} />
        <Route path="/geographical" element={<Geographical/>} />
        <Route path="/subscription"  element ={<Subscription/>}/>
        <Route path="/s"  element ={<S/>}/>

        {/* <Route path="/slider" element={<Slider/>} /> */}
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;

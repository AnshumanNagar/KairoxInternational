import "./App.css"  
import NavbarComp from "../Components/Navbar.jsx";
import HomeDecorComp from "../Components/HomeDecor.jsx";
import HomeStaffComp from "../Components/HomeStaff.jsx";
import HomeMainStaffComp from "../Components/HomeMainStaff.jsx";
import HomeLocationComp from "../Components/HomeLocation.jsx";
import MyMap from "../Components/Map.jsx";
import FooterComp from "../Components/Footer.jsx";

function App(){
  return(
    <>
      <NavbarComp />
      <HomeDecorComp/>
      <HomeStaffComp/>
      <HomeMainStaffComp/>
      <FooterComp/>
    </>
  )
}

export default App;
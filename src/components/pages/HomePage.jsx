
import HeroSection from "./HeroSection";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";
function HomePage() {
    
    return (
       <div id="homepage">
         <Navbar/>
         <HeroSection/>
       </div>
    );
}

export default HomePage;

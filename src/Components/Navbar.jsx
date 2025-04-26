import "bootstrap-icons/font/bootstrap-icons.css";  
import "/src/pages/App.css"

import { Outlet, Link } from "react-router-dom";

function NavbarComp(){
        return(
        <>
            <div className="flex w-full p-4 flex-wrap justify-between items-center bg-stone-100">
                <Link to="/"><img src="/src/assets/logo10.png" width={200} className="cursor-pointer"/></Link>
                <div className="p-5 rounded-3xl flex flex-wrap w-3xl justify-evenly mr-5 ml-5 text-stone-800">
                    <Link to="/"><button className="cursor-pointer hover:text-black transition mr-2">Home</button></Link>
                    <Link to="/aboutPage"><button className="cursor-pointer hover:text-black transition mr-2 ml-2">About</button></Link>
                    <Link to="/infraTechPage"><button className="cursor-pointer hover:text-black transition mr-2 ml-2">Infrastructure & Technology</button></Link>
                    <Link to="/curriculumPage"><button className="cursor-pointer hover:text-black transition mr-2 ml-2">Curriculum</button></Link>
                    <Link to="/studentLifePage"><button className="cursor-pointer hover:text-black transition mr-2 ml-2">Student Life</button></Link>
                    <Link to="/admissionPage"><button className="cursor-pointer hover:text-black transition ml-2">Admission</button></Link>
                </div>
            </div>

            <Outlet/>
        </>
    )
}

export default NavbarComp;
import { Outlet } from "react-router-dom";
import NavBar from "../Shared/Navbar";
import Footer from "../Shared/Footer";


const Main = () => {
    return (
        <div className="max-w-screen-2xl mx-auto">
            <NavBar></NavBar>
            
            <Outlet></Outlet>

            <Footer></Footer>
     
        </div>
    );
};

export default Main;
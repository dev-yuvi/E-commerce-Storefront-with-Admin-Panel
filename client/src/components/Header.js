import Home from "../pages/Home";

import Search from "./Search";
import { Link } from "react-router-dom";


export default  function Headers(){
    return  <nav className="navbar row">
        <div className="col-12 col-md-3">
            <div className="navbar-brand">
                <Link to="/"><img width="150px" src="/images/logo2.png" /></Link>
            
            </div>
        </div>

        <div className="col-12 col-md-6 mt-2 mt-md-0">
            <Search/>
        </div>
        <div>
            
        </div>
       
        <nav>
            <Link to="/" className="px-3" >Home</Link>
            <Link to="/cart" className="px-3">Cart</Link>
            <Link to="/login" className="px-3">Login</Link>
            <Link to='/admin' className="px-3">Admin</Link>

         </nav>
        </nav>
}
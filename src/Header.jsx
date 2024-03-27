import React from "react";
import { Link } from 'react-router-dom'
import Home from "./Component/Home";
import banner from "./assets/pngwing 1.png"
import Banner from "./Banner";


const Links=
<>
<li><Link className="text-lg font-normal" to="/">Home</Link></li>
<li> <Link className="text-lg font-normal" to="/book">Book List </Link> </li>
<li><Link className="text-lg font-normal" to="read">ReadPage  </Link></li>
</>
function Header(){
    return(
        <>
        <header>
            <div className="container max-w-screen-lg mx-auto">
                        <div class="navbar bg-base-100">
            <div class="navbar-start">
                <div class="dropdown">
                <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </div>
                <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              
                        {Links}
                </ul>
                </div>
                <a class="btn btn-ghost font-bold text-3xl">Book Vibe</a>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal px-1">
                    {Links}
                </ul>
            </div>
            <div class="navbar-end gap-4">
                <a class="btn bg-[#23BE0A] text-white text-lg text-center font-semibold ">Sign In</a>
                <a class="btn bg-[#59C6D2] text-lg text-white text-center semiblod   " >Sign Up</a>
            </div>
                        </div>

                       

            </div>
          

        </header>
        
        </>
    )
        
}

export default Header;
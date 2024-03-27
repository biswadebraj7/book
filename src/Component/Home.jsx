import React from "react";
import Books from "../CardComponent/Books";
import Booklist from "./Booklist";


function Home (){
    return(
        <>
        <div className="mx-auto container max-w-screen-lg">
           <Booklist></Booklist>

        </div>
        
        </>
    )
}
export default Home;
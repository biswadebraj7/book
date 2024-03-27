import React, { useEffect, useState } from "react";
import Books from "../CardComponent/Books.jsx";


function Booklist(){
    const [data, setData]=useState([])
    useEffect(()=>{
        fetch("data.json")
        .then(res=>res.json())
        .then(data=>setData(data))
    },[])
    return(
        <>
       <div className="container mx-auto max-w-screen-lg"> 
       <div className="mx-auto">
            <h1 className="text-center text-3xl font-bold">Books</h1>

        </div>
       
       <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 justify-center items-center">
            {
                data.map((books)=> <Books books={books}></Books>)

            }
        </div>
       </div>
        
        </>
    )
}
export default Booklist;
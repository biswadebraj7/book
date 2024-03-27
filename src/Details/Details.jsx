import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { AiOutlineStar } from "react-icons/ai";

function Details(){
    const booksdata=useLoaderData();
    const {id}=useParams();
    const intId=parseInt(id);
    const books=booksdata.find(books=>books.id===intId)

    console.log(books)
    return(
        <>
        <div className="container max-w-screen-lg mx-auto">
        <div className="card shadow-md flex justify-between items-center">
            <div className="mx-auto">
                <img src={books.image} alt="" />

            </div>
            <div>
                <ul className="flex py-4 justify-between items-center pr-10">
                    <li className="text-[#23BE0A] font-medium text-lg">{books.author.slice(0,7)}</li>
                    <li className="text-[#23BE0A] font-medium text-lg">{books.category.slice(0,7)}</li>
                </ul>
                <h1 className="text-xl font-bold text-center py-4">{books.bookName.slice(0,16)}</h1>
                
            </div>
            <div className="py-4">
                <hr />
            </div>
            <div className="flex justify-between items-center">
                <span>{books.tags}</span>
               <p className="flex items-center gap-1"> {books.rating} <AiOutlineStar /></p>

            </div>
            <div>
           
            </div>

        </div>

        </div>
        
               </>
    )
}
export default Details;
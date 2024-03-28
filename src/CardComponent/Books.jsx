import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineStar } from "react-icons/ai";

function Books({books}){
    console.log(books)
    const {id,image,bookName,author,category,tags,totalPages,publisher,yearOfPublishing,rating}=books;
   
    return(
        <>
        
      <div className="container mx-auto max-w-screen-lg">
        
       <Link to={`/detail/${id}`}>
       <div className="card shadow-md">
            <div className="mx-auto">
                <img src={image} alt="" />

            </div>
            <div>
                <ul className="flex py-4 justify-between items-center pr-10">
                    <li className="text-[#23BE0A] font-medium text-lg">{author.slice(0,7)}</li>
                    <li className="text-[#23BE0A] font-medium text-lg">{category.slice(0,7)}</li>
                </ul>
                <h1 className="text-xl font-bold text-center py-4">{bookName.slice(0,14)}</h1>
                
            </div>
            <div className="py-4">
                <hr />
            </div>
            <div className="flex justify-between items-center">
                <span className="text-lg font-bold gap-1">Tag{tags}</span>
               <p className="flex items-center gap-1"> {rating} <AiOutlineStar /></p>

            </div>
            <div>
           
            </div>

        </div>
       </Link>

      </div>
        </>
    )
}
export default Books;
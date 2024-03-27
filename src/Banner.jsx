import React from "react";

function Banner(){
    return(
        <>
         {/* <!--banner secttion> */}
         <div className="grid  lg:grid-cols-2 py-16 grid-cols-1 gap-4  justify-between items-center">
                            <div className="mx-auto">
                                <h1 className="lg:text-left text-center  text-5xl  text-bold">
                                Books to freshen up your bookshelf
                                </h1>

                            </div>
                            <div className="mx-auto ">
                                <img src={banner} className=" " alt="" />
                            </div>

                          </div>
                            {/* <!--banner secttion> */}
        </>
    )
}
export default Banner;
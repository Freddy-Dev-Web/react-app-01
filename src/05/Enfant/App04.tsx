import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { LuSend } from "react-icons/lu";
import { CiBookmarkCheck } from "react-icons/ci";
import {useState} from 'react'
import { BiCommentDetail } from "react-icons/bi";
import { CgArrowLongRight } from "react-icons/cg";


        export default function App03()  {
       

    const [liked, setLiked] = useState(false);

    return (
        <div className="flex items-center justify-center mt-50 ">
            <div className="bg-gray-50  rounded-lg w-60 h-71 flex flex-col shadow-black-700 hover:shadow-2xl transition-shadow duration-50 transform hover:scale-103" >

                {/******************************** Header ***************************/}
                <div className="h-8">
                    <div className="flex space-x-2">
                        <img src="img/F.Roosevelt.jpeg" alt="@Aurele"   className="w-7 h-7 pt-2 pl-2 rounded-3xl"/>                            
                        <p className="text-gray-900 text-sm mt-1.5 mr-2 ">@F.Roosevelt</p>
                    </div> 
                </div>

                {/******************************** Image **************************/}
                <div className="bg-yellow-100 flex-1">
                      
                        <img src="img/F.Roosevelt.jpeg" alt="img2" className="w-70 h-56 object-cover  object-top" />
                    <div className="absolute inset-0 flex items-center justify-center flex-col">
                        <div className="flex items-center justify-between mb-24 gap-x-28">
                            <h3 className="text-gray-200 text-sm font-bold text-shadow-lg  ">@F.Roosevelt</h3>
                            <CgArrowLongRight className="text-gray-200 size-7" />
                        </div>

                        <div className="mt-4 ">
                            <div className="bg-black  px-6 py-2 rounded-lg opacity-55">
                            <p className="text-center text-white  ">
                                Soyez sincère, soyez <br /> bref, restez assis.
                            </p>
                            </div>
                        </div>
                    </div> 
                </div>

                {/************************** Footer ********************************/}
                <div className="h-8 flex items-center px-2">
                    <div className="flex w-1/2 space-x-2">
                        { liked ?  
                            <button className="cursor-pointer" onClick={() => setLiked(false)}>
                                <FaHeart className="text-red-500" />
                            </button>
                            : 
                            <button className="cursor-pointer" onClick={() => setLiked(true)}>
                                <FaRegHeart />
                            </button>
                        }
                        <BiCommentDetail />
                        <LuSend />
                    </div>
                    <div className="flex place-content-end  w-1/2">
                        <CiBookmarkCheck />
                    </div>
                </div>
            </div>
         </div> 
    )
}
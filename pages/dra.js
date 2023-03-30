import { FiHome,FiTrendingUp,FiCompass,FiStar,FiSettings,FiMenu } from "react-icons/fi";
import {BsChevronDown} from "react-icons/bs"

import React from "react";

function Lio() {
  return (
    <>
    <div className=" flex items-start justify-end px-4 pb-6">
      <button className="relative z-30 peer h-10 w-10 aspect-square-full  transition">
        <span><BsChevronDown /></span>
      </button>
      <div className="z-20 fixed  -top-96 -right-96 w-64 h-48 bg-white shadow-2xl peer-focus:top-10 peer-focus:right-1 peer:transition ease-out delay-150 duration-300">
      <div>
         
        <ul className="text-gray-600 text-2xl  ">
          <li>
            <a href="#" className="flex items-center justify-start">
             
             <span>Profile</span>
            </a>
          </li>
          <li>
            <a href="#"  className="flex items-center justify-start">
              
            <span>Setting</span>
            </a>
          </li>
          <li>
            <a href="#"  className="flex items-center justify-start">
             
            <span>Billing</span>
            </a>
          </li>
          <li>
            <a href="#"  className="flex items-center  justify-start">
              
            <span>Sign out</span>
            </a>
          </li>
         
        </ul>
        </div>

      </div>
      {/* <div className="z-10 fixed top-0 left-0 w-screen h-screen bg-gray-900 bg-opacity-30 opacity-0 peer-focus:opacity-100 peer:transition duration-200">

      </div> */}
    </div>
   </>
  )
}

export default Lio;
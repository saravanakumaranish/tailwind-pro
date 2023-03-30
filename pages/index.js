import React, {useState} from "react"
import Image from "next/image"

import {FiArrowDown,FiMenu, FiBell,FiCompass,FiHome,FiSettings,FiStar,FiTrendingUp} from "react-icons/fi"
import { BsChevronDown,BsFillArrowDownSquareFill } from "react-icons/bs";
import Jio from "./Jio"
import Trend from "./Trend";
import Explore from "./Explore";
import Favourties from "./Favourties";
import Settings from "./Settings";
import Billing from "./Billing";

function Home()  {
  function Form1() {
    alert('Anish')
  }

  function Form2() {
    alert('Are You Sure,want To Sign Out')
  }

  function Form3() {
    alert('You, Have No Messages Yet')
  }

  

  const[menudata,setMenudata] = React.useState("")
  
  return (
    <div >
             
      <main className=" flex items-center justify-between border-b-2 border-black   bg-white  h-20 ">
      
        
        <div className="h-screen flex items-center justify-start px-4 pb-6">
      <button className=" mt-7 relative z-30 peer pl-2 h-10 w-10 aspect-square-full border-2 border-gray-100 transition">
        <span><FiMenu /></span>
      </button>
      <div className="z-20 fixed top-0 -left-96 w-80 h-screen bg-white shadow-2xl peer-focus:left-0 peer:transition ease-out delay-150 duration-300">
      <div>
          <h1  className="text-gray-900 font-semibold text-3xl mt-16 flex ml-12" >
            
            <span className="cursor-text">Logo</span>
          </h1>
        <ul className=" text-gray-900 text-2xl mt-9  ">
          <li>
            <button  onClick={()=>setMenudata("Jio")} className=" text-xl  flex items-center ml-12 mb-2  hover:bg-sky-300 w-52 p-2 rounded-md hover:text-white">
             
            < FiHome   /> <span className="ml-4 font-thin">Home</span>
            </button>
          </li>
          <li>
            <button  onClick={()=>setMenudata("Trend")} className=" text-xl flex items-center ml-12 mb-2  hover:bg-sky-300 w-52 p-2 rounded-md hover:text-white">
              <FiTrendingUp />
            <span className="ml-4 font-thin">Trending</span>
            </button>
          </li>
          <li>
            <button  onClick={()=>setMenudata("Explore")} className=" text-xl flex items-center ml-12 mb-2  hover:bg-sky-300 w-52 p-2 rounded-md hover:text-white">
              < FiCompass />
            <span className="ml-4 font-thin">Explore</span>
            </button>
          </li>
          <li>
            <button  onClick={()=>setMenudata("Favourties")} className=" text-xl flex items-center ml-12 mb-2  hover:bg-sky-300  w-52 p-2 rounded-md hover:text-white">
              <FiStar />
            <span className="ml-4 font-thin">Favourties</span>
            </button>
          </li>
          <li>
            <button  onClick={()=>setMenudata("Settings")} className=" text-xl flex items-center ml-12 mb-2  hover:bg-sky-300 w-52 p-2 rounded-md hover:text-white">
              <FiSettings />
            <span className="ml-4 font-thin">Settings</span>
            </button>
          </li>
        </ul>
        </div>

      </div>
      <div className="z-10 fixed top-0 left-0 w-screen h-screen bg-gray-900 bg-opacity-30 opacity-0 peer-focus:opacity-100 peer:transition duration-200">

      </div>
    </div>

    <div>
      <h1 className="text-red-700 font-extrabold text-3xl">LOGO</h1>
    </div>

        
          <div className="flex">
      
       
          <button onClick={Form3}>

          <span>
          <FiBell className="relative z-10  w-7 peer transition   h-7 mr-8  hover:border-sky-300 " />
            </span>  

            
       
        </button>
       
       





        <div>
        <div class="flex items-center space-x-4">
    <Image className=" -mr-2 rounded-full" width='45' height='45' src="/photo.jpg" alt="Avatar" />
    <div class="  dark:text-white">
        <div className="hidden md:block text-2xl">Jastina Clark</div>
        <div class="hidden md:block  text-sm text-gray-500 dark:text-gray-400">Admin</div>
    </div>
    <div className=" flex items-end justify-end px-4 pb-6">
      <button className="relative z-10 peer h-10 w-10 mt-8 -ml-6  transition">
        <span><BsChevronDown /></span>
      </button>
      <div className="z-20 fixed  -top-96 -right-96 w-64 h-48 bg-white shadow-2xl peer-focus:top-20 peer-focus:right-1 peer:transition ease-out delay-150 duration-300">
      <div>
         
        <ul className="text-black text-lg  ">
          <li className="mt-1">
          
            <button onClick={Form1} className=" pr-48 pl-5 p-1 hover:bg-gray-100">
             
             <span>Profile</span>
            </button>

          </li>
          <li className="mt-2">
            <button  onClick={()=>setMenudata("Settings")} className=" pr-48 pl-5 p-1  hover:bg-gray-100">
              
            <span>Setting</span>
            </button>
          </li>
          <li className="mt-2">
            <button onClick={()=>setMenudata("Billing")} className=" pr-48 pl-5 p-1  hover:bg-gray-100">
             
            <span>Billing</span>
            </button>
          </li>
          <li className="mt-5 border-t-2 border-gray-700">
            <button onClick={Form2} className=" pr-44 pl-3 p-1   hover:bg-gray-100">
              
            <span>Sign out</span>
            </button>
          </li>
         
        </ul>
        </div>

      </div>
   
    </div>
    
</div>
                  </div>
              </div>   
      </main>

      <div>
        {menudata == "Jio" && <Jio />}
        {menudata == "Trend" && <Trend />}
        {menudata == "Explore" && <Explore />}
        {menudata == "Favourties" && <Favourties />}
        {menudata == "Settings" && <Settings />}
        {menudata == "Billing" && <Billing />}
      </div>
   
    </div>
  )
}

export default Home;
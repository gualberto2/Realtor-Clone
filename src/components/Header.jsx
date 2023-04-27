import React, { useEffect, useState } from 'react'
import {useLocation, useNavigate} from "react-router-dom"
import {getAuth, onAuthStateChanged} from "firebase/auth"

export default function Header() {
  const [pageState, setPageState] = useState("Sign In")
  const location = useLocation();
  const navigate = useNavigate();
  const auth = getAuth();
  useEffect(()=> {
    onAuthStateChanged(auth, (user)=>{
      if (user){
        setPageState("Profile")
      }else{
        setPageState("Sign In")
      }
    })
  }, [auth])
  function pathMatchRoute(route){
    if (route === location.pathname){
      return true;
    }
}
  return (
    <div className="bg-white border-b shadow-sm sticky top-0 z-40">
      <header className="flex justify-between items-center px-3 mxa-w-6xl mx-auto">
        <div>
          <img src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg" alt="logo" className="h-5 cursor-pointer" onClick={()=>navigate("/")}/>
        </div>
        <div>
          <ul className="flex space-x-10">
            <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${pathMatchRoute("/") && "text-[color:black] border-b-red-600"}`} onClick={()=>navigate("/")}>Home</li>
            <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${pathMatchRoute("/offers") && "text-[color:black] border-b-red-600"}`}
            onClick={() => navigate("/offers")}>
            Offers
            </li>
            <li 
            className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${pathMatchRoute("/sign-in") || pathMatchRoute("/profile") && "text-[color:black] border-b-red-600"}`}
            onClick={()=>navigate("/profile")}>
              {pageState}
            </li>
          </ul>
        </div>
      </header>
    </div>
  )
}

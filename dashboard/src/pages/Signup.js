import React from "react"

import Header from "../components/Auth/Header";
import Signup from "../components/Auth/Signup";

export default function SignupPage(){
    return(
        <div className=" w-[max-content] h-[max-content] p-4 flex justify-between m-auto shadow-2xl" >
             <div className="w-[30rem] m-auto bg-slate-300 p-12 rounded-[20px] shadow-xl mb-8 mt-8 max-[768px]:w-[25rem] h-[fit-content]">
            <Header
              heading="Signup to create an account"
              paragraph="Already have an account? "
              linkName="Login"
              linkUrl="/"
            />
            <Signup/>
            </div>
            <div  className="relative top-0 max-[950px]:hidden ml-8"  >
                <img src={require("../assets/pic3.jpg")} className='w-[50rem] h-full' alt=""  />
                </div>
        </div>
    )
}
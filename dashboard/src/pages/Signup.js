import React from "react"

import Header from "../components/Auth/Header";
import Signup from "../components/Auth/Signup";

export default function SignupPage(){
    return(
        <div className=" w-full space-y-0 flex justify-between m-auto shadow-2xl">
             <div className="m-auto bg-slate-300 p-10 rounded-[20px] shadow-xl mb-8 mt-8">
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
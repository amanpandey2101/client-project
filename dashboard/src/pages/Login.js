import React from "react"
import Header from "../components/Auth/Header"
import Login from "../components/Auth/Login"

export default function LoginPage(){
    return(
        <div className=" w-full space-y-0 flex justify-between m-auto shadow-2xl max-[768px]:h-screen">
            <div className="m-auto bg-slate-300 p-10 rounded-[20px] shadow-2xl">

            <Header
                heading="Login to your account"
                paragraph="Don't have an account yet? "
                linkName="Signup"
                linkUrl="/signup"
                />
                <Login/>
            </div>
                <div  className="relative max-[950px]:hidden ml-4 "  >
                <img src={require("../assets/pic3.jpg")} className='w-[48rem] h-[88vh]' alt=""  />

                </div>
        </div>
    )
}
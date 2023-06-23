import React from "react"

import Header from "../components/Auth/Header";
import Signup from "../components/Auth/Signup";

export default function SignupPage(){
    return(
        <div className="max-w-md w-full space-y-8">
            <Header
              heading="Signup to create an account"
              paragraph="Already have an account? "
              linkName="Login"
              linkUrl="/"
            />
            <Signup/>
        </div>
    )
}
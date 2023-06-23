import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { signupFields } from "../../constants/formFields"
import FormAction from "./FormAction";
import Input from "./Input";
import axios from 'axios';

const fields=signupFields;
let fieldsState={};

fields.forEach(field => fieldsState[field.id]='');

export default function Signup(){
  const [signupState,setSignupState]=useState(fieldsState);
  const [signupSuccess, setSignupSuccess] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const handleChange=(e)=>setSignupState({...signupState,[e.target.id]:e.target.value});

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(signupState)
    createAccount()
  }


  const createAccount = () => {
    const { firstName, lastName, email, password, role } = signupState;
  
    // Determine the API endpoint based on the selected role
    let apiEndpoint;
    switch (role) {
      case 'admin':
        apiEndpoint = 'http://localhost:3000/api/admin/signup';
        break;
      case 'superadmin':
        apiEndpoint = 'http://localhost:3000/api/superadmin/signup';
        break;
      case 'distributor':
        apiEndpoint = 'http://localhost:3000/api/distributor/signup';
        break;
      default:
        console.error("invalid role")
        return;
    }
  
    // Prepare the user object
    const user = {
      firstName,
      lastName,
      email,
      password,
      role,
     
    };
  
    // Make the API request to create the account
    axios.post(apiEndpoint, user)
      .then(response => {
        console.log(response.data);
        setSignupSuccess(true);
        
      })
      .catch((error) => {
        // Handle the error (e.g., show error message, etc.)
        console.log(error);
        if (error.response && error.response.status === 409) {
          
          setEmailError(true);
          alert("This email is already registered");
        }
      });
    
      
    };
    if (signupSuccess) {
      // Redirect to the login page after successful signup
      return <Navigate to="/" state={{ successMessage: `Successfully registered .` }} />;
    }
  const radioOptions = [
    { label: 'Admin', value: 'admin' },
    { label: 'Superadmin', value: 'superadmin' },
    { label: 'Distributor', value: 'distributor' },
  ];

    return(
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <div className="">
        {
                fields.map(field=>
                        <Input
                            key={field.id}
                            handleChange={handleChange}
                            value={signupState[field.id]}
                            role={signupState[field.role]}
                            labelText={field.labelText}
                            labelFor={field.labelFor}
                            id={field.id}
                            name={field.name}
                            type={field.type}
                            isRequired={field.isRequired}
                            placeholder={field.placeholder}
                            options={field.type === 'radio' ? radioOptions : null}
                    />
                
                )
            }
          <FormAction handleSubmit={handleSubmit} text="Signup" />
        </div>

         

      </form>
    )
}
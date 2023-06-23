import { useState } from 'react';
import { loginFields } from "../../constants/formFields";
import FormAction from "./FormAction";
import FormExtra from "./FormExtra";
import Input from "./Input";
import axios from 'axios';
import { Navigate , Routes, Route} from 'react-router-dom';
import AdminDashboard from "../AdminDashboard/index"
import SuperAdminDashboard from "../SuperAdminDashboard/index"
import DistributorDashboard from "../DistributorDashboard/index"

const fields=loginFields;
let fieldsState = {};
fields.forEach(field=>fieldsState[field.id]='');

export default function Login(){
    const [loginState,setLoginState]=useState(fieldsState);
    const [loginSuccess, setLoginSuccess] = useState(false);
    const [loginError, setLoginError] = useState(null);


    const handleChange=(e)=>{
        setLoginState({...loginState,[e.target.id]:e.target.value})
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        authenticateUser();
    }

  
    const authenticateUser = () =>{
        const { email, password, role } = loginState;
  
        // Determine the API endpoint based on the selected role
        let apiEndpoint;
        switch (role) {
          case 'admin':
            apiEndpoint = 'http://localhost:3000/api/admin/signin';
            break;
          case 'superadmin':
            apiEndpoint = 'http://localhost:3000/api/superadmin/signin';
            break;
          case 'distributor':
            apiEndpoint = 'http://localhost:3000/api/distributor/signin';
            break;
          default:
            console.error("invalid role")
            alert("Invalid role")
            return;
        }
      
        // Prepare the user object
        const user = {
         
          email,
          password,
          role,
         
        };
      
        // Make the API request to create the account
        axios.post(apiEndpoint, user)
          .then(response => {
            console.log(response.data);
            const token = response.data.token;
            localStorage.setItem('token', token);

            setLoginSuccess(true);
            
          })
          .catch(error => {
            // Handle the error (e.g., show error message, etc.)
            console.log(error);
            alert("Invalid credentials")
          });
          
        };
       
        if (loginSuccess) {
            const { role } = loginState;
            let dashboardPath;
        
            switch (role) {
              case 'admin':
                dashboardPath = '/adminDashboard';
                break;
              case 'superadmin':
                dashboardPath = '/superadminDashboard';
                break;
              case 'distributor':
                dashboardPath = '/distributorDashboard';
                break;
              default:
                dashboardPath = '/dashboard';
            }
        
            return <Navigate to={dashboardPath} />;
          }
        
          
      const radioOptions = [
        { label: 'Admin', value: 'admin' },
        { label: 'Superadmin', value: 'superadmin' },
        { label: 'Distributor', value: 'distributor' },
      ];
  

    return(
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <div className="-space-y-px">
            {
                fields.map(field=>
                        <Input
                            key={field.id}
                            handleChange={handleChange}
                            value={loginState[field.id]}
                            role={loginState[field.role]}
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
        </div>

        <FormExtra/>
        <FormAction handleSubmit={handleSubmit} text="Login"/>
        {loginError && <p>{loginError}</p>}

      </form>
    )
}
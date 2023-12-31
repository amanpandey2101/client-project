import { useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import axios from 'axios';

import { loginFields } from "../../constants/formFields";
import Input from "./Input";
import FormExtra from "./FormExtra";
import FormAction from "./FormAction";

const fields = loginFields;
const fieldsState = {};
fields.forEach(field => (fieldsState[field.id] = ''));

const Login = ({onLoginSuccess}) => {
  const navigate = useNavigate();
  const [loginState, setLoginState] = useState(fieldsState);
  const [loginError, setLoginError] = useState(null);

  const handleChange = (e) => {
    setLoginState({ ...loginState, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    authenticateUser();
  };

  const authenticateUser = () => {
    const { email, password, role } = loginState;

    // Determine the API endpoint based on the selected role
    let apiEndpoint;
    switch (role) {
      case 'admin':
        apiEndpoint = 'https://client-project-sxwg.onrender.com/api/admin/signin';
        break;
      case 'superadmin':
        apiEndpoint = 'https://client-project-sxwg.onrender.com/api/superadmin/signin';
        break;
      case 'distributor':
        apiEndpoint = 'https://client-project-sxwg.onrender.com/api/distributor/signin';
        break;
      default:
        console.error("invalid role");
        alert("Invalid role");
        return;
    }

    // Prepare the user object
    const user = {
      email,
      password,
      role,
    };

    // Make the API request to authenticate the user
    axios.post(apiEndpoint, user)
      .then(response => {
        console.log(response.data);
        const token = response.data.token;
        localStorage.setItem('token', token);
        localStorage.setItem('role', role);
        onLoginSuccess(role);

        navigate(`/${role}Dashboard`);
      })
      .catch(error => {
        // Handle the error (e.g., show error message, etc.)
        console.log(error);
        alert("Invalid credentials");
      });
  };

  const radioOptions = [
    { label: 'Admin', value: 'admin' },
    { label: 'Superadmin', value: 'superadmin' },
    { label: 'Distributor', value: 'distributor' },
  ];

  return (
    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
      <div className="-space-y-px">
        {fields.map(field => (
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
        ))}
      </div>

      <FormExtra />
      <FormAction handleSubmit={handleSubmit} text="Login" />
      {loginError && <p>{loginError}</p>}
    </form>
  );
};

export default Login;

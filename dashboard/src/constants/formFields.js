const loginFields = [
    {
        labelText:"Email address",
        labeFor:"email",
        id:"email",
        name:"email",
        type:"email",
        autoComplete:"email",
        isRequired:"true",
        placeholder:"Email address"
    },
    {
        labelText:"Password",
        labelFor:"password",
        id:"password",
        name:"password",
        type:"password",
        autoComplete:"current-password",
        isRequired:true,
        placeholder:"Password"   
    },
    {
        labelText: "Role",
        labelFor: "role",
        id: "role",
        name: "role",
        type: "radio",
        isRequired: true,
       
      },
]

const signupFields=[
    {
        labelText:"fistName",
        labelFor:"fistname",
        id:"firstName",
        name:"firstname",
        type:"text",
        autoComplete:"firstname",
        isRequired:true,
        placeholder:"Firstname"   
    },
    {
        labelText:"lastname",
        labelFor:"lastName",
        id:"lastName",
        name:"lastname",
        type:"text",
        autoComplete:"lastname",
        isRequired:true,
        placeholder:"Lastname"   
    },
    {
        labelText:"Email address",
        labelFor:"email-address",
        id:"email",
        name:"email",
        type:"email",
        autoComplete:"email",
        isRequired:true,
        placeholder:"Email address"   
    },
    {
        labelText:"Password",
        labelFor:"password",
        id:"password",
        name:"password",
        type:"password",
        autoComplete:"current-password",
        isRequired:true,
        placeholder:"Password"   
    },
    // {
    //     labelText:"Confirm Password",
    //     labelFor:"confirm-password",
    //     id:"confirm-password",
    //     name:"confirm-password",
    //     type:"password",
    //     autoComplete:"confirm-password",
    //     isRequired:true,
    //     placeholder:"Confirm Password"   
    // }
    {
        labelText: "Role",
        labelFor: "role",
        id: "role",
        name: "role",
        type: "radio",
        isRequired: true,
        options: [
          { label: "Admin", value: "admin" },
          { label: "Superadmin", value: "superadmin" },
          { label: "Distributor", value: "distributor" },
        ],
      },
]

export {loginFields,signupFields}
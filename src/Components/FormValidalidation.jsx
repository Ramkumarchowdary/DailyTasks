import React, { useEffect, useState } from "react";

const FormValidalidation = () => {
  let [validat, setValidat] = useState({
    username: "",
    email: "",
    password: "",
  });
  let [validatErrors, setValidatErrors] = useState({});
  let [isSubmit, setIsSubmit] = useState(false);
  let Update = (e) => {
    let { name, value } = e.target;
    setValidat({ ...validat, [name]: value });
    console.log(validat);
  };
  let handleSubmit = (e) => {
    e.preventDefault();
    setValidatErrors(error(validat));
    setIsSubmit(true);
   

  };
  useEffect(() => {
    // console.log(validatErrors);
    if (Object.keys(validatErrors).length === 0 && isSubmit) {
    //   console.log(validatErrors);
    }
  }, [validatErrors]);
  let error = (value) => {
    let errors = {};
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!value.username) {
      errors.username = "username is required!";
    }
    if (!value.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(value.email)) {
      errors.email = " This Email Address is not valid!";
    }
    if (!value.password) {
      errors.password = "password is required!";
    } else if (value.password.length < 4) {
      errors.password = "password required 4 charcaters!";
    } else if (value.password.length > 10) {
      errors.password =
        "password Can't have more that 10 characxters charcaters!";
    }
    return errors;
  };
  return (
    <div>
      {Object.keys(validatErrors).length === 0 && isSubmit ? (
        <div style={{color:"green",border:"2px solid green",width:"100px",margin:"10px auto"}}>hiiii</div>
      ) : (
        <pre>{JSON.stringify(validat, undefined, 2)}</pre>
      )}

      <form className="form-valid" onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div>
          <div>
            <label>username</label>
            <input
              type="text"
              placeholder="username"
              value={validat.username}
              name="username"
              onChange={Update}
            />
          </div>
          <p style={{color:"red"}}>{validatErrors.username}</p>
          <div>
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={validat.email}
              onChange={Update}
            />
          </div>
          <p style={{color:"red"}}>{validatErrors.email}</p>
          <div>
            <label>PassWorld</label>
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={validat.passworld}
              onChange={Update}
            />
          </div>
          <p style={{color:"red"}}>{validatErrors.password}</p>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default FormValidalidation;

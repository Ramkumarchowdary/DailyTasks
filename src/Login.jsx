import React, { useContext, useState } from "react";
import { MianData } from "./Components/FormValidation";
import Tasks from "./Components/Tasks";
import { useNavigate } from "react-router-dom";

function FormData({ setmob }) {
  let [formData, setFormData] = useState({ fn: "", mob: "" });
  let [validation, setValidatiob] = useState(false);
  let [error,setError]=useState({})
  let toTask = useNavigate();
  let Change = ({ target: { name, value } }) => {
    setFormData({ ...formData, [name]: value });

   
  };
  let submit = (e) => {
    if (validation === false) {
      e.preventDefault();
    } else {
      setmob(formData.mob);
      toTask("/task");
    }
  };
  let validat = (e) => {
    let data = JSON.parse(localStorage.getItem(`${formData.mob}`));
    console.log(data);
    if (data === null) {
      setError( "wrong form data")
      // alert("wrong form data");
    } else if (formData.fn === data.fn && formData.mob === data.mob) {
      console.log("hii");
      setValidatiob(true);
    } else {
      e.preventDefault();
      alert("novalidate");
    }
  };

  return (
    <div>
      <div>
        <form action="" onSubmit={submit}>
          <h1>{JSON.stringify(error)}</h1>
          <input
            type="text"
            placeholder="Enter Your Name"
            name="fn"
            onChange={Change}
            value={formData.fn}
          />

          <input
            type="tel"
            placeholder=" your Mobile Number"
            name="mob"
            onChange={Change}
            value={formData.mob}
          />
          <button type="submit" onClick={validat}>
            {" "}
            submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default FormData;

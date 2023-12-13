import React, { useState } from "react";

function FormData() {
  let [formData, setFormData] = useState({ fn: "", mob: "", email: "" });
  let [error, setError] = useState({});

  let Change = ({ target: { name, value } }) => {
    setFormData({ ...formData, [name]: value });
    // console.log(formData)
  };
  let submit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <div>
        <form onSubmit={submit}>
          <input
            type="text"
            placeholder="Enter Your Name"
            name="fn"
            onChange={Change}
            value={formData.fn}
          />
          <small>{}</small>
          <input
            type="tel"
            placeholder=" your Mobile Number"
            name="mob"
            onChange={Change}
            value={formData.mob}
          />
          <button type="submit"> submit</button>
        </form>
      </div>
    </div>
  );
}

export default FormData;

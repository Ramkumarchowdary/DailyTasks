import React, { createContext, useContext } from "react";
import { useEffect, useState } from "react";

import {
  FormLabel,
  RadioGroup,
  FormControlLabel,
  FormControl,
  Radio,
} from "@mui/material";
import { ThemeContext } from "@emotion/react";
import FormData from "../Login";
export const MianData = createContext();
export default function FormValidation() {
    let [formData,setFormData] =useState({fn:"",mob:"",email:"",pass:""});
    let [storeData,setStoreData] =useState([]);
    
    let Change=({target:{name,value}})=>{
        setFormData({...formData,[name]:value})
       

    }
    let submit=(e)=>{
      setStoreData(formData);
      setFormData({fn:"",mob:"",email:"",pass:""})
    }
  return (
    <div>
      {/* {JSON.stringify(storeData) } */}
      {localStorage.setItem(`${storeData.mob}`, JSON.stringify(storeData))}
      <form action="/login" onSubmit={submit} >
       { console.log(formData)}
        <input type="text" placeholder="firstname"  name='fn' value={formData.fn} onChange={Change}/>
        <hr />
        <input type="tel" placeholder="Mobile" name='mob' value={formData.mob} onChange={Change} />
        <hr />
        <input type="email" placeholder="Email"  name='email' value={formData.email} onChange={Change} />
        <hr />
        
        <input type="PassWord" placeholder="Pass" name='pass' value={formData.pass} onChange={Change} />
        <hr />
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label"  sx={{color:"white"}}>Gender</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="male"
            name="radio-buttons-group"
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
              
            />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
          </RadioGroup>
          {/* skils */}
          <FormLabel id="demo-radio-buttons-group-label " sx={{color:"white"}}>skils</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="Web-developer"
            name="radio-buttons-group"
          >
            <FormControlLabel
              value="Web-developer"
              control={<Radio />}
              label="Web-developer"
            />
            <FormControlLabel value="ui" control={<Radio />}  label="UI" />
            <FormControlLabel value="Backend" control={<Radio />} label="Backend" />
            <FormControlLabel value="Devops" control={<Radio />} label="Devops" />
          </RadioGroup>
        </FormControl>
        <hr />
       
        <button type="Submit">SUbmit</button>
      </form>
    </div>
  );
}

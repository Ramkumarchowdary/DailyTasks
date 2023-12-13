import { Button } from "@mui/material";
import React, { useState } from "react";

const CardDeleter = () => {
  let arr = ["PlayCricket", "PauseCricket", "PlayPauseCricket"];

  let [Arr, setArr] = useState(arr);

  let DeleatIteam = (Itemindex) => {
    let newArr = Arr;
    console.log(Itemindex);
    let filterdeArr = newArr.filter((ele, index) => {
      return index !== Itemindex;
    });
    setArr(filterdeArr);
  };

  return (
    <div>
      <h1>{Arr.join(",")}</h1>
      <ul>
        {Arr.map((element, index) => {
          return (
            <div key={index}>
              <li>
                {element}
                <Button variant="contained" sx={{mb:"10px",ml:"10px"}} onClick={() => DeleatIteam(index)}>Delate</Button>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default CardDeleter;

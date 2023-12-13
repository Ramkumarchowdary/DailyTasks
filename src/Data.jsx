import React, { useState } from 'react'

const Data = () => {
    let [update,setUpdate]=useState(false)
    let [network,setNetWork]=useState()
    let [value,setValue]=useState()
  return (
    <div>
      {/* {setNetWork(navigator.connection.effectiveType)} */}
      {console.log(navigator.connection.effectiveType)}
      <h1>fehuf</h1>
      {/* <h1>{network}</h1> */}
        {/* {!update || <div><input type="text"  onChange={(e)=>{setValue(e.target.value)}}/> <button>ADD</button></div>}
     <button onClick={()=>{setUpdate(true)}} >add</button>
     <input type="text" value={value} /> */}
    </div>
  )
}

export default Data

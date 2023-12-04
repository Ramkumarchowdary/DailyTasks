import React from 'react'

const ButtonProps = {
    type :"submit" ,
    title:"string" |"number",


}

const Button = ({type,title}=ButtonProps) => {
  return (
    <div>
      <button type={type} onClick={(e)=>{console.log(e.target)}}>{title}</button>
    </div>
  )
}

export default Button

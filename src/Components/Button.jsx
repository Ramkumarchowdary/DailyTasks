import React from 'react';
import Button from '@mui/material/Button';
import { Box, ListItem} from '@mui/material';

const ButtonProps = {
    type :"submit" ,
    title:"string" |"number",


};

let  BTn = ({type,title}=ButtonProps) => {
  return (
    <div>
      {/* <button type={type} onClick={(e)=>{console.log(e.target)}}>{title}</button> */}
      <Button variant="contained" type={type} sx={{mb:"20px"}}>{title}</Button>

      <Box
  sx={{
    display: 'grid',
    gap: 1,
    gridTemplateColumns: 'repeat(4, 4fr)',
  }}
>
  <ListItem sx={{border: 1,mb:"20px",Type:'right',color:"white" ,p:"10px"  }}>Ram</ListItem>
  <ListItem sx={{border: 1,mb:"20px",Type:'right',color:"white" ,p:"10px"  }}>Ram</ListItem>
  <ListItem sx={{border: 1,mb:"20px",Type:'right',color:"white" ,p:"10px" }}>Kumar</ListItem>
  <ListItem sx={{border: 1,mb:"20px",Type:'right',color:"white" ,p:"10px" }}>Chowdary</ListItem>
  <ListItem sx={{border: 1,mb:"20px",Type:'right',color:"white" ,p:"10px" }}>Payyala</ListItem>
</Box>
    </div>
  )
}

export default BTn

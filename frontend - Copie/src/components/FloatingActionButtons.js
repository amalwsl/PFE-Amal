import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import '../pages/styles.css'


export default function FloatingActionButtons() {
  return (
    <Box sx={{ '& > :not(style)': { m: 1 }, position:'fixed',marginLeft:'80%',marginTop:'-2%',marginRight:'2%'}}>
      <Fab  aria-label="add" className='addButtonFloat' sx={{ backgroundColor:'#053E5D',color:'white'}} >
        <AddIcon />
      </Fab>
      <Fab  aria-label="edit" sx={{ backgroundColor:'#C90F0F',color:'white'}}>
        <EditIcon />
      </Fab>
      
        
    </Box>
  );
}
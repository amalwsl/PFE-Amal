import LoginForm from '../components/LoginForm';
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import './styles.css';


const card = (
  <React.Fragment>
    <CardContent> 
      <LoginForm/> 
    </CardContent>
    
  </React.Fragment>
);
const Login =()=>{
    return(
    <Box sx={{ Width: '50%' }} className="cardLogin">
        <Card variant="outlined" sx={{ Width: '50%' }}>{card}</Card>
    </Box>
  );
}

    
export default Login;
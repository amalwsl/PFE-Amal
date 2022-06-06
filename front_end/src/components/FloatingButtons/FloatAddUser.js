import * as React from 'react';
import Box from '@mui/material/Box';
import AddUser from './AddUser';
import EditProfile from './AddMeeting';
import '../../pages/styles.css';

export default function FloatingActionButtons({ reload }) {
  return (
    <Box
      sx={{
        '& > :not(style)': { m: 1 },
        position: 'relative',
        marginLeft: '90%',
        marginTop: '0%',
        marginBottom: '0%',
      }}
    >
      <AddUser reload={reload} />
      
    </Box>
  );
}

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
        position: 'fixed',
        marginLeft: '80%',
        marginTop: '-2%',
        marginRight: '2%',
      }}
    >
      <AddUser reload={reload} />
      <EditProfile reload={reload} />
    </Box>
  );
}

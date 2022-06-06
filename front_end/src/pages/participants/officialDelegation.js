import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { faker } from '@faker-js/faker';
import { sample } from 'lodash';
import Avatar from '../../components/avatar';
import IconButton from '@mui/material/IconButton';
import DateRangeIcon from '@mui/icons-material/DateRange';
import '../styles.css'
import FloatAddUser from '../../components/FloatingButtons/FloatAddUser';



const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    {
        field: "user",
        headerName: "User",
        width: 200,
        renderCell: (params) => {
          console.log(params);
          return (
            <>
            <div className="avatarIcon">
              <Avatar fullName={params.value.username}  />
              </div>
              {params.value.username}
            </>
          );
        }
      },
    

    { field: 'company', headerName: 'Company', alignRight: false },
    { field: 'role', headerName: 'Role', alignRight: false },
    { field: 'isVerified', headerName: 'Verified', alignRight: false },
    { field: 'tag', headerName: 'Tag', alignRight: false },
    { field: 'type', headerName: 'Type', alignRight: false },
    { field: 'status', headerName: 'Status', alignRight: false },

    {field: 'filter'},
    { field: 'agenda' ,
      headerName: " ",
      width: 100,
      renderCell: () => {
        return (
          <>
          <IconButton  className="agendaIcon">
            <DateRangeIcon />
            </IconButton >
            
          </>
        );
      }
  }  
]



const rows = [...Array(24)].map((_, index) => ({
    id: faker.datatype.uuid(),
    user: {
        username: faker.name.firstName()+' ' + faker.name.lastName(),
        avatar: ''
      },
    
    
    company: faker.company.companyName(),
    isVerified: faker.datatype.boolean(),
    status: sample(['active', 'banned']),
    role: sample([
      'CEO',
      'Hr Manager',
      'Exhibitions responsible',
      'Head of Communication',
      'PR responsible',
      'Project Manager',
      'Chairman',
      'President',
      'General Director',
      'other'
    ]),
    tag: sample(['aerospace', 'defense','space','robotics','AI','others']),
    type: sample(['O.Delegation'])
  
  
  }));

export default function DataTableOffDeleg() {

  return (
    <>
    
    <div style={{ height: 370,width: '80%' ,marginLeft:'10%',marginTop:'3%'}}>
    
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />

    </div>
    <FloatAddUser />
    

    </>
    
  );
}

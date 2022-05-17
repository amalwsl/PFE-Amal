import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { faker } from '@faker-js/faker';
import { sample } from 'lodash';
import Avatar from '../components/avatar';
import './styles.css'
import { Button,FormControl,Form } from 'react-bootstrap';




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

    { field: '' }   ]



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
    type: sample(['exhibitor', 'pro.Visitor','O.Delegation'])
  
  
  }));

export default function DataTable() {
  return (
    <>
    <Form className="searchBarusers">
    <FormControl
      type="search"
      placeholder="Search"
      className="me-2"
      aria-label="Search"
      
    />
    <Button variant="outline-light" className='searchButton'>Search</Button>
  </Form>
    <div style={{ height: 400, width: '80%' ,marginLeft:'10%',marginTop:'1%'}}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />

    </div>
    </>
    
  );
}

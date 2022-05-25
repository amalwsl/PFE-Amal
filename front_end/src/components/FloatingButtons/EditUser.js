import {Modal,Form,Button} from 'react-bootstrap'
import React,{useState} from 'react';
import CountrySelector from "../../components/Selectors/countrySelector.js";
import EditIcon from '@mui/icons-material/Edit';
import Fab from '@mui/material/Fab';
import IconButton from '@mui/material/IconButton';
import '../../pages/styles.css'
import Axios from 'axios';








export default function EditProfile() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  const [first_name, setName] = useState('')
  const [last_name, setLastName] = useState('')
  const [country, setCountry] = useState('Tunisia')
  const [login, setLogin] = useState('')
  const [email1, setEmail1] = useState('')
  const [email2, setEmail2] = useState('')
  const [phone_pro, setPhonePro] = useState(0)
  const [phone_perso, setPhonePerso] = useState(0)
  const [mobile, setMobile] = useState(0)
  const [adresse, setAdresse] = useState('')
  const [company, setCompany] = useState('')
  const [current_position, setCurrentPosition] = useState('')
  const [civil_title, setCivilTitle] = useState('Mr')
  const [note, setNote] = useState('')
  const [isAdmin, setIsAdmin] = useState('false')
  const [isExhibitor, setIsExhibitor] = useState('false')
  const [isManager, setIsManager] = useState('false')
  const [tag, setTag] = useState('')


  
  const EditUser = () => {
    Axios.put('http://localhost:5000/api/users/update/628e6c4211677b605446fc4c',{first_name,login ,last_name,email1,email2, phone_pro,phone_perso,mobile,adresse,country,company,current_position,civil_title,note,isAdmin,isManager,isExhibitor})
  }



  
    return (
      <>
        <IconButton onClick={handleShow}>
        <Fab  aria-label="add" className='addButtonFloat' sx={{ backgroundColor:'#053E5D',color:'white'}} >
         <EditIcon/>
        </Fab>
        </IconButton>
          
        <Modal show={show} onHide={handleClose}>
          
          <Modal.Header closeButton>
            <Modal.Title>Edit Profile</Modal.Title>
          </Modal.Header>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Modal.Body>
            
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="type your name"
                  autoFocus
                  onChange={(e) => {setName(e.target.value)}}
                />
              </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Last name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="type your name"
                  autoFocus
                  onChange={(e) => {setLastName(e.target.value)}}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Company</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="type your company name"
                  autoFocus
                  onChange={(e) => {setCompany(e.target.value)}}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Current position</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="type your current position"
                  autoFocus
                  onChange={(e) => {setCurrentPosition(e.target.value)}}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Civil title</Form.Label>
                <Form.Select size="sm" onChange={(e) => {setCivilTitle(e.target.value)}}>
                  <option>Mr</option>
                  <option>Mrs</option>
                  <option>Ms</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email </Form.Label>
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  autoFocus
                  onChange={(e) => {setEmail1(e.target.value)}}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email 2</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="type another email if you want"
                  autoFocus
                  onChange={(e) => {setEmail2(e.target.value)}}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Phone </Form.Label>
                <Form.Control
                  type="number"
                  placeholder="type phone number"
                  autoFocus
                  onChange={(e) => {setPhonePro(e.target.value)}}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Mobile </Form.Label>
                <Form.Control
                  type="number"
                  placeholder="type mobile number if you want"
                  autoFocus
                  onChange={(e) => {setMobile(e.target.value)}}
                />
                
              </Form.Group>

              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                
              </Form.Group>

              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Adresse </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="type adresse"
                  autoFocus
                  onChange={(e) => {setAdresse(e.target.value)}}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Country </Form.Label>
                <CountrySelector onChange={(e) => {setCountry(e.target.value)}} />                
              </Form.Group>

              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Participant Nature</Form.Label>
                <Form.Select size="sm">
                  <option onChange={(e) => {setIsExhibitor(e.target.value)}}>Exhibitor</option>
                  <option>Professional Visitor</option>
                  <option>Official Delegation</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Role</Form.Label>
                <Form.Select size="sm">
                  <option onChange={(e) => {setIsManager(e.target.value)}}>Manager</option>
                  <option>user</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>tag</Form.Label>
                
                <Form.Check  aria-label="option 1" label="aeronautics" onChange={(e) => {setTag(e.target.value)}}/>
                <Form.Check  aria-label="option 1" label="defense" onChange={(e) => {setTag(e.target.value)}}/>
                <Form.Check  aria-label="option 1" label="space" onChange={(e) => {setTag(e.target.value)}}/>
                <Form.Check  aria-label="option 1" label="AI" onChange={(e) => {setTag(e.target.value)}}/>
                <Form.Check  aria-label="option 1" label="robotics" onChange={(e) => {setTag(e.target.value)}} />
              </Form.Group>


              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Note</Form.Label>
                <Form.Control as="textarea" rows={3} onChange={(e) => {setNote(e.target.value)}}/>
              </Form.Group>
            
          </Modal.Body>
          <Modal.Footer className='modalFooter'>

          <Form.Group className="mb-3">
          <Form.Check
              required
              label="Agree to terms and conditions"
              feedback="You must agree before submitting."
              feedbackType="invalid"
            />
          </Form.Group>

          <Form.Group className="mb-submit-close">
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            
            <Button type="submit" className='submitBtn' onClick={EditUser}>Submit form</Button>
            </Form.Group>
          </Modal.Footer>
          </Form>
        </Modal>
      </>
    );
  }
  
  
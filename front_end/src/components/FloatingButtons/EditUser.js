import {Modal,Form,Button} from 'react-bootstrap'
import React,{useState} from 'react';
import CountrySelector from "../../components/Selectors/countrySelector.js";
import EditIcon from '@mui/icons-material/Edit';
import Fab from '@mui/material/Fab';
import IconButton from '@mui/material/IconButton';
import '../../pages/styles.css'








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
                <Form.Label>Full name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="type your name"
                  autoFocus
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Company</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="type your company name"
                  autoFocus
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Current position</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="type your current position"
                  autoFocus
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Civil title</Form.Label>
                <Form.Select size="sm">
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
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email 2</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="type another email if you want"
                  autoFocus
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Phone </Form.Label>
                <Form.Control
                  type="number"
                  placeholder="type phone number"
                  autoFocus
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Mobile </Form.Label>
                <Form.Control
                  type="number"
                  placeholder="type mobile number if you want"
                  autoFocus
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
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Country </Form.Label>
                <CountrySelector />                
              </Form.Group>

              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Participant Nature</Form.Label>
                <Form.Select size="sm">
                  <option>Exhibitor</option>
                  <option>Professional Visitor</option>
                  <option>Official Delegation</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Role</Form.Label>
                <Form.Select size="sm">
                  <option>Manager</option>
                  <option>user</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>tag</Form.Label>
                
                <Form.Check  aria-label="option 1" label="aeronautics" />
                <Form.Check  aria-label="option 1" label="defense" />
                <Form.Check  aria-label="option 1" label="space" />
                <Form.Check  aria-label="option 1" label="AI" />
                <Form.Check  aria-label="option 1" label="robotics" />
              </Form.Group>


              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Note</Form.Label>
                <Form.Control as="textarea" rows={3} />
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
            
            <Button type="submit" className='submitBtn'>Submit form</Button>
            </Form.Group>
          </Modal.Footer>
          </Form>
        </Modal>
      </>
    );
  }
  
  
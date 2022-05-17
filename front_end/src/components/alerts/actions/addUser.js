import React,{useState} from 'react';
import {Modal,Button,Form} from 'react-bootstrap'


function AddUser({ajoutFilm}) {
    const [title,setTitle]=useState("")
    const [description,setDescription]=useState("")
    const [posterUrl,setPosterUrl]=useState("")
    const [rate,setRate]=useState(0)


    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Add New User
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Adding User</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicText">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" placeholder="Enter title" onChange={e=>setTitle(e.target.value)} />
            </Form.Group>
            <Form.Group controlId="formBasicText">
                <Form.Label>description</Form.Label>
                <Form.Control type="text" placeholder="Enter description"  onChange={e=>setDescription(e.target.value)} />
            </Form.Group>
            <Form.Group controlId="formBasicText">
                <Form.Label>poster posterUrl</Form.Label>
                <Form.Control type="text" placeholder="Enter poster posterUrl" onChange={e=>setPosterUrl(e.target.value)}  />
            </Form.Group>
            <Form.Group controlId="formBasicNumber">
                <Form.Label>rate</Form.Label>
                <Form.Control type="number" placeholder="Enter rate" onChange={e=>setRate(e.target.value)}  />
            </Form.Group>
            </Form>

          </Modal.Body>


          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={()=>{ajoutFilm({title,description,posterUrl,rate});handleClose()}}>
              Confirm
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
export default AddUser;
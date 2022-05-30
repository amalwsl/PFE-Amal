import { Modal, Form, Button } from 'react-bootstrap';
import React, { useState } from 'react';
import CountrySelector from '../../components/Selectors/countrySelector.js';
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import '../../pages/styles.css';
import Fab from '@mui/material/Fab';
import Axios from 'axios';

export default function AddUser({ reload }) {
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

  const [first_name, setName] = useState('');
  const [last_name, setLastName] = useState('');
  const [country, setCountry] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const addNewUser = async () => {
    const res = await Axios.post('http://localhost:5000/api/users/add', {
      first_name,
      last_name,
      country,
      login,
      password,
    });
    reload();
    if (res) setShow(true);
  };

  return (
    <>
      <IconButton onClick={handleShow}>
        <Fab
          aria-label="add"
          sx={{ backgroundColor: '#C90F0F', color: 'white' }}
        >
          <AddIcon />
        </Fab>
      </IconButton>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Profile</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="type your name"
              autoFocus
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Last name</Form.Label>
            <Form.Control
              type="text"
              placeholder="type your last name"
              autoFocus
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Login </Form.Label>
            <Form.Control
              type="email"
              placeholder="name@example.com"
              autoFocus
              onChange={(e) => {
                setLogin(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Country </Form.Label>
            <CountrySelector
              onSelect={(e) => {
                setCountry(e.target.value);
              }}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer className="modalFooter">
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

            <Button type="submit" className="submitBtn" onClick={addNewUser}>
              Submit form
            </Button>
          </Form.Group>
        </Modal.Footer>
      </Modal>
    </>
  );
}

import { Modal, Form, Button } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';

import Fab from '@mui/material/Fab';
import IconButton from '@mui/material/IconButton';
import '../../pages/styles.css';
import Axios from 'axios';
import AddIcon from '@mui/icons-material/Add';
import Select from 'react-select';
import DatePicker from 'react-date-picker';

export default function AddMeeting({ reload }) {
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



  const [users, setUsers] = useState([]);
  const [state, setState] = useState({
    guest: '',
    start_time: '',
    end_time: '',
    title: '',
    title: '',
  });

  const addMeet = async () => {
    const res = await Axios.post(
      'http://localhost:5000/api/meetings/add',
      state
    );
    reload();
    setShow(false);
  };

  const getUsers = async () => {
    const res = await Axios.get('http://localhost:5000/api/users/usersList');
    setUsers([...res.data]);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <IconButton onClick={handleShow}>
        <Fab
          aria-label="add"
          className="addButtonFloat"
          sx={{ backgroundColor: '#053E5D', color: 'white' }}
        >
          <AddIcon />
        </Fab>
      </IconButton>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Meeting</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Title </Form.Label>
            <Form.Control
              type="text"
              placeholder="type your name"
              onChange={(e) => setState({ ...state, title: e.target.value })}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Start Date</Form.Label> <br />
            <DatePicker
              onChange={(e) => setState({ ...state, start_time: e })}
              value={state.start_time}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>End Date</Form.Label> <br />
            <DatePicker
              onChange={(e) => setState({ ...state, end_time: e })}
              value={state.end_time}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Participant</Form.Label>
            <Select
              options={users.map((user) => ({
                value: user._id,
                label: `${user.first_name} ${user.last_name}`,
              }))}
              onChange={(e) => setState({ ...state, guest: e.value })}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer className="modalFooter">
          <Form.Group className="mb-submit-close">
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>

            <Button type="submit" className="submitBtn" onClick={addMeet}>
              Add Meeting
            </Button>
          </Form.Group>
        </Modal.Footer>
      </Modal>
    </>
  );
}

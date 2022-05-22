import {Modal,Form,Button,Row,Col} from 'react-bootstrap'
import {useState} from 'react';
import IconButton from '@mui/material/IconButton';
import '../pages/styles.css'
import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import SettingsIcon from '@mui/icons-material/Settings';
import ReactLanguageSelect from 'react-languages-select';
import 'react-languages-select/css/react-languages-select.css';
import TranslateIcon from '@mui/icons-material/Translate';
import KeyIcon from '@mui/icons-material/Key';
import InterestsIcon from '@mui/icons-material/Interests';
import MatchInterest from './Match'
import Switch from '@mui/material/Switch';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import HelpIcon from '@mui/icons-material/Help';
import BugReportIcon from '@mui/icons-material/BugReport';
import LogoutIcon from '@mui/icons-material/Logout';








export default function SettingsModal() {
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


  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);



  const handleClick1 = () => {
    setOpen1(!open1);
  };

  const handleClick2 = () => {
    setOpen2(!open2);
  };

  const handleClick3 = () => {
    setOpen3(!open3);
  };


  const [switched, setSwitched] = React.useState(true);

  const handleSwitch = () => {
    setSwitched(!switched);
  };


  const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
  }


  
    return (
      <>
        
        <IconButton onClick={handleShow}>
          <SettingsIcon sx= {{fontSize:'initial'}} />
        </IconButton>
          
        <Modal show={show} onHide={handleClose}>
          
          <Modal.Header closeButton>
            <Modal.Title>Settings</Modal.Title>
          </Modal.Header>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>


          <Modal.Body className='modalBody'>
            <List
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                Settings List
                </ListSubheader>
            }
            >
            
            <ListItemButton onClick={handleClick1}>
                <ListItemIcon>
                <TranslateIcon />
                </ListItemIcon>
                <ListItemText primary="Language" />
                {open1 ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open1}  >
            <ReactLanguageSelect defaultLanguage="en" searchable={true} searchPlaceholder="Search for a language" />
            </Collapse>

            <ListItemButton onClick={handleClick2}>
                <ListItemIcon>
                <KeyIcon />
                </ListItemIcon>
                <ListItemText primary="Change Password" />
                {open2 ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open2} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                <Form>
                    <Row>
                        <Col>
                        <Form.Control placeholder="old password" type ="password"/>
                        </Col>
                        <Col>
                        <Form.Control placeholder="new password" type ="password" />
                        </Col>
                    </Row>
                    </Form>
                </List>
            </Collapse>

            <ListItemButton onClick={handleClick3}>
                <ListItemIcon>
                <InterestsIcon />
                </ListItemIcon>
                <ListItemText primary="Edit interest" />
                {open3 ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open3} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                <MatchInterest/>
                </List>
            </Collapse>

            <ListItemButton >
                <ListItemIcon>
                <MarkEmailReadIcon />
                </ListItemIcon>
                <ListItemText primary="Email notification" />
                <Switch defaultChecked onClick={handleSwitch} />
            </ListItemButton>

            <ListItemButton >
                <ListItemIcon>
                <EventAvailableIcon />
                </ListItemIcon>
                <ListItemText primary="Enable Meetings" />
                <Switch defaultChecked onClick={handleSwitch} />
            </ListItemButton>

            <ListItemButton >
                <ListItemIcon>
                <HelpIcon />
                </ListItemIcon>
                <ListItemText primary="Help" />
            </ListItemButton>

            <ListItemButton >
                <ListItemIcon>
                <BugReportIcon />
                </ListItemIcon>
                <ListItemText primary="Bug Report" />
            </ListItemButton>

            <ListItemButton onClick={handleLogout}>
                <ListItemIcon>
                <LogoutIcon />
                </ListItemIcon>
                <ListItemText primary="Logout" />
            </ListItemButton>
            </List>

          </Modal.Body>    
            
          <Modal.Footer>
          <Form.Group className="mb-submit-close">
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            
            <Button type="submit" className='submitBtn'>Save changes</Button>
            </Form.Group>
          </Modal.Footer>
          </Form>
        </Modal>
      </>
    );
  }
  
  
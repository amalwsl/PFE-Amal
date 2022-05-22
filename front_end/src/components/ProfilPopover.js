import React,{useRef,useState} from 'react';
import { Overlay,Popover } from 'react-bootstrap';
import IconButton from '@mui/material/IconButton';
import Avatar from '../components/avatar';
import ProfileModal from './EditProfileModal'
import SettingsModal from '../components/SettingsModals';

import '../pages/styles.css'





 
        function ProfilPopover() {
            const [show, setShow] = useState(false);
            const [target, setTarget] = useState(null);
            const ref = useRef(null);
          
            const handleClick = (event) => {
              setShow(!show);
              setTarget(event.target);
            };

            const name='amal wesleti'
            const company='IADE'
            const country='Tunisia'
            const nature='admin'
            const mail='awesleti@iadeorganiser.com'
           
              
          
            return (
              <div ref={ref} className="btnProfPop" >
                <IconButton onClick={handleClick} className='profilepopoverbtn'  ><Avatar  fullName={name}  /></IconButton>
                
                <Overlay
                  show={show}
                  target={target}
                  placement="bottom"
                  container={ref}
                  containerPadding={20}
                >
                  <Popover id="popover-contained">
                    <Popover.Header className='headerPopover'><b>Profile</b></Popover.Header>
                    <Popover.Body>
                    <div className='headBodyPopover'><Avatar  fullName={name}/> {name}<br/>  </div>
                    <span className='mailProfil' >{mail}</span><br/><br/>
                    <div className='bodypopver'>
                        <span>company : <strong>{company}</strong> <br/></span>
                       <span> country : <strong>{country}</strong> <br/></span>
                       <span> nature : <strong>{nature}</strong> <br/></span>
                       </div>
                    <hr/>
                    <div className='btnsPopover'>
                    <ProfileModal/>
                    <SettingsModal/>
                    
                    </div>
                    

                      
                    </Popover.Body>
                  </Popover>
                </Overlay>
              </div>
            );
          }
          
          
    

export default ProfilPopover;
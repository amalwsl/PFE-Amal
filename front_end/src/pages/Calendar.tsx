import React from 'react'
import { useEffect,useState } from 'react';
import Fullcalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin,{DateClickArg} from '@fullcalendar/interaction';
import {initializeApp} from 'firebase/app';
import {query,onSnapshot,getFirestore,addDoc,collection} from 'firebase/firestore';
import listPlugin from '@fullcalendar/list'
import timeGridPlugin from '@fullcalendar/timegrid';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import resourceTimelinePlugin from '@fullcalendar/resource-timeline';
import bootstrap5Plugin from '@fullcalendar/bootstrap5';
import './styles.css';


import { firebaseConfig } from '../config';
import FloatingActionButtons from '../components/FloatingActionButtons';


const app = initializeApp(firebaseConfig);
const db=getFirestore(app);

const Calendar=()=> {

  const [data,setData]= useState<any[]> ([]);
  useEffect(()=>{
    //mounts
    const q = query (collection(db,'agenda'));
    const unsub = onSnapshot(q,(snap)=>{
      const array : any[] = snap.docs.map(doc=>{
        return {
          id:doc.id,
          title:doc.get('title'),
          start:doc.get('start').toDate(),
          allDay:doc.get('allDay')
        }
        
      });
      setData([...array]);
      console.log('data retrieved')
    })
    //unmounts
    return()=>{unsub()}
  },[])

  const handleDateClick=(e:DateClickArg)=>{
    if (e.jsEvent.altKey) 
      {
        const title = prompt('enter title',e.dateStr);
        const event ={
          title:title?title : e.dateStr ,
          start:e.date,
          allDay:true
        }
        addDoc(collection(db,'agenda'),event)
      }
  }

  


  

  return (
    <>
    <div className="calendar">
       <Fullcalendar
       events={data}
       plugins ={[dayGridPlugin,interactionPlugin,listPlugin,timeGridPlugin,bootstrap5Plugin, resourceTimelinePlugin ]}
       initialView='resourceTimeline'
       themeSystem= 'bootstrap5'
       eventColor= '#053E5D'
       displayEventTime={true}
       editable={true}
       schedulerLicenseKey= 'CC-Attribution-NonCommercial-NoDerivatives'



       headerToolbar={{ center: 'resourceTimeline,timeGridWeek,listWeek' }} // buttons for switching between views

       views={{
                dayGridMonth: { // name of view
                titleFormat: { year: 'numeric', month: '2-digit', day: '2-digit' }},
             }}

            businessHours={[ // free hours to schedule
            {
              daysOfWeek: [ 3,4,5 ], 
              startTime: '10:00', 
              endTime: '12:00' 
            },
            {
              daysOfWeek: [ 3,4,5 ], 
              startTime: '14:00', 
              endTime: '17:00' 
            }]}


    scrollTime={'08:00'}
    aspectRatio={2.5}
    
    
   


 

  resourceAreaHeaderContent= 'Participants'

  resources='./ressources.json'

      
    

 
 
  dateClick={handleDateClick}
       
  />
    

  </div>
  <FloatingActionButtons/>
  </>
  );
}

export default Calendar;

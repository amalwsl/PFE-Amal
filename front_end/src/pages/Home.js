import React from 'react';
import CarouselHome from '../components/Carrousel';
import CountUp from 'react-countup';
import HailIcon from '@mui/icons-material/Hail';
import PublicIcon from '@mui/icons-material/Public';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import SectorsImgHover from '../components/SectorsImgHover'
import './styles.css'
import { Button } from '@mui/material';



 const Home=()=>{
    return(
        <div className='homeContainer'>
            
          <div className='ContainerCarouselCounter'>
          <CarouselHome className='carousel' />
            <div className='counterContainer'>
              
              <div className='counter' >
                <div>
                  <HailIcon/>
                  <CountUp end={1000} />
                </div>
                
                <span>Exhibitors</span>
              </div>

              <div className='counter' >
                <div>
                  <PublicIcon/>
                  <CountUp end={1000} />
                </div>
                <span>countries</span>
              </div>

              <div className='counter' >
                <div>
                  <NewspaperIcon/>
                  <CountUp end={1000}  />
                </div>
                <span>journalists</span>
              </div>


            </div>
            
            
          </div>  
            <h3><strong> International meeting for Tunisia, Africa & Middle-East</strong></h3>
            
            <h5 style={{color:'#053E5D'}}>12th to 16th October 2022 <span style={{color:'#C90F0F'}} > |</span> INTERNATIONAL DJERBA ZARZIS AIRPORT</h5>
            <div className='IADEcard'>
              <img className='IADEimg' alt='IADE' width="50%" src="https://www.iadetunisia.com/wp-content/uploads/2021/02/DSC_0270-scaled.jpg"/>
              
              <div className='IADEtext'>
                <h3 style={{color:'#053E5D'}}><strong>IADE Tunisa</strong></h3>
                
                <p>The event will showcase over 200 exhibiting companies from around the world, and will host a large number of African delegations and decision makers from Tunisia, Africa and the Middle East.
                This base of companies is a part of development schemes that cover a wide range of aerospace & defence activities. So, whether you are looking to meet new buyers, to sign new deals or to present your new products, this event is for you!</p>
                
                <hr style={{color:"#C90F0F"}} />
                
                <span style={{color:'#053E5D'}}><strong>IADE TUNISIA IS MORE THAN JUST AN EXHIBITION !!</strong></span>
                <p className='lastP'>IADE Tunisia will provide diverse opportunities to meet international key players of the aerospace and defence industry to expand your network and to build new partnerships.</p>
                
                <Button variant='outlined' className='IADEbtn' sx={{color:"#C90F0F",borderColor:"#C90F0F",width:"fit-content"}}  >learn more.. </Button>
              </div>
            </div>
            
            
            
            
            <SectorsImgHover/>
            <h1>this is Home page3</h1>
            <span>lorem ipsum,bndkjbJVBKJVBZKVBZJBZVKJBZVKS.SSVN VN VNZLVNZLEKVNLKVNLVKNZVLNZVLZNVZS</span>
            <h1> trnslate zone :</h1>
            

        </div>
            
    )}; 

    export default Home;
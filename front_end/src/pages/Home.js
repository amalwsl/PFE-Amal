import React from 'react';
import CarouselHome from '../components/Carrousel';
import CountUp from 'react-countup';
import './styles.css'



 const Home=()=>{
    return(
        <div className='homeContainer'>
            
          <div className='ContainerCarouselCounter'>
          <CarouselHome className='carousel' />
            <div className='counterContainer'>
                <CountUp end={1000} />
            </div>
            
          </div>  
            <h1>this is Home page</h1>
            
            <h1>this is Home page2</h1>
            
            <h1>this is Home page3</h1>
            <span>lorem ipsum,bndkjbJVBKJVBZKVBZJBZVKJBZVKS.SSVN VN VNZLVNZLEKVNLKVNLVKNZVLNZVLZNVZS</span>
            <h1> trnslate zone :</h1>
            

        </div>
            
    )}; 

    export default Home;
import React from 'react'
import pict  from './BOOKMARKMANAGER IMAGES/illustration-features-tab-1.svg';
import { useState } from 'react';


const Oneclick = () => {

  const [kachi, setKachi]=useState('Organize your bookmarks however you like. Our simple drag-and -drop interface gives you complete control over how  you manage your favourite sites')


function garri( ){



  if (kachi=='Organize your bookmarks however you like. Our simple drag-and -drop interface gives you complete control over how  you manage your favourite sites'){

    setKachi('i am a web developer')
  
  }else if(kachi=='i am a web developer'){
    setKachi('Organize your bookmarks however you like. Our simple drag-and -drop interface gives you complete control over how  you manage your favourite sites')
  }
}

// let garrri=()=>{

  
// }

  return (
    <div className='contain'>
        <div className='bord'>
         <img className='illustration' src={pict} alt=''></img>
         <div className='empty1'></div>
        </div>

        <section className='click'>
           <h1 className='head'>Bookmark in one click</h1>
          
          
           <p className='parrra'>  {kachi}    </p>
          
          
           <button className='bttn' onClick={()=>{garri()}}>More Info</button>
       </section>
    
    </div>
  )
}

export default Oneclick
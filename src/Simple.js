import React from 'react'
import picc from './BOOKMARKMANAGER IMAGES/illustration-hero (1).svg';
import {useState} from 'react'


const Simple = () => {

      
  return (
    <div className='flex'>
      <div className='simplebook'>
         <h1 className='header'>A Simple Bookmark Manager</h1>


         <p className='para'>
             A clean and simple interface to organize your favourites websites. Open a new browser tab and see your sites load instantly. Try it for free.
          
          </p>

          
         <a className='chromes' href='https://google.com'>Get it on Chrome</a>
        

         <a className='chromes' href='https://firefox.com'>Get it on Firefox</a>
      </div>
     <img className='img' src={picc} alt=''></img>
     <div className='empty'></div>
      

     


    </div>
  )
}

export default Simple
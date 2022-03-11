import React from 'react'
import chrome from './BOOKMARKMANAGER IMAGES/logo-chrome.svg';
import dots from './BOOKMARKMANAGER IMAGES/bg-dots.svg'
import firefox from './BOOKMARKMANAGER IMAGES/logo-firefox.svg'
import  Opera from './BOOKMARKMANAGER IMAGES/logo-opera.svg'

const Extension = () => {
  return (
    <div className='pad'>
        <div className='Down'>
           <h5 className='load'>Download the extension</h5>
          <p className='we'>
              We've got more browsers in the pipeline. Please do let us know if  you'd like us to prioritize
           </p>
        </div>

            <section className='brow'>
             <div className='chro'>
                    <img className='imgg' src={chrome} alt=''></img>
                    <h5>Add to Chrome</h5>
                    <p className='font'>Minimum Version 62</p>
                    <img className='dots' src={dots} alt=''></img>
                    <button className='btnchrome'>Add & Install Extension</button>
             </div>
              

             <div className='firefox' >
                    <img className='imgg' src={firefox} alt=''></img>
                    <h5>Add to Firefox</h5>
                    <p className='font'>Minimum Version 55</p>
                    <img className='dots' src={dots} alt=''></img>
                    <button className='btnchrome'>Add & Install Extension</button>
              </div>
            

                <div className='opera'>
                    <img className='imgg' src={Opera} alt=''></img>
                    <h5>Add to Opera</h5>
                    <p className='font'>Minimum Version 46</p>
                    <img className='dots' src={dots} alt=''></img>
                    <button className='btnchrome'>Add & Install Extension</button>
                </div>
                
            </section>
       


    </div>
  )
}

export default Extension
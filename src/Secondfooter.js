import React from 'react'
import pic from './BOOKMARKMANAGER IMAGES/logo-bookmark.svg'
import facebook from './BOOKMARKMANAGER IMAGES/icon-facebook.svg'
import twitter from './BOOKMARKMANAGER IMAGES/icon-twitter.svg'

const Secondfooter = () => {
  return (
    <div className='blackfooter'>
       <div className='bk'>
            <img className='fo' src={pic} alt=''></img>

          <ul className='footflex'>
                <li className='list'><a className='na' href='' >FEATURES</a></li>
                <li className='list'><a className='na' href=''>PRICING</a></li>
                <li className='list'><a className='na' href=''>CONTACT</a></li> 
                {/* <li className='list'><a className='na' href=''>LOGIN</a></li> */}
          </ul>
          
          <img className='face' src={facebook} alt=''></img>
          <img className='face' src={twitter} alt=''></img>
     </div>
 
    </div>
  )
}

export default Secondfooter
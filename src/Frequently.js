import React from 'react'
import Accordion from 'react-bootstrap/Accordion'

const Frequently = () => {
  return (
    <div className='general'>
        <div className='fre'>
        <h1 className='que'>Frequently Asked Questions</h1>
        <p className='aske'>Here are some of our FAQS. If you have any other Questions you'd like answered please feel free to email us.</p>
        </div>


        <section className='asked'>
         <Accordion>
             <Accordion.Item  eventKey="0">
                    <Accordion.Header>What is Bookmark?</Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                        est laborum.
                    </Accordion.Body>
              </Accordion.Item>
             <Accordion.Item eventKey="1">
                 <Accordion.Header>How can I request a new browser?</Accordion.Header>
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                        est laborum.
                    </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="2">
                 <Accordion.Header>Is there a mobile App?</Accordion.Header>
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                        est laborum.
                    </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                 <Accordion.Header>What about other chronium browser?</Accordion.Header>
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                        est laborum.
                    </Accordion.Body>
              </Accordion.Item>
          </Accordion>
            
        </section>
        <div className='moveinfo'>
       <button className='info'>More Info</button>
       </div>
    </div>

  )
}

export default Frequently
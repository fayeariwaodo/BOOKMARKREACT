import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Bookmark from './Bookmark';
import Simple from './Simple';
import Features from './Features';
import Oneclick from './Oneclick';
import Extension from './Extension';
import Frequently from './Frequently';
import Footerone from './Footerone';
import Secondfooter from './Secondfooter';
const App = () => {
  return (
    <div className='App'>
        <Bookmark/>
        <Simple/>
        <Features/>
        <Oneclick/>
        <Extension/>
        <Frequently/>
        <Footerone/>
        <Secondfooter/>
    </div>
  )
}

export default App;



import React from 'react'
import {
    BrowserRouter as Router, Routes, Route,
} from "react-router-dom";

import{
    MainPage, AboutPage, PostsDetails, Posts,
} from "../../pages";
import Navbar from '../Navbar/Navbar';



const App = () => {
  return (
   <Router>
    <Navbar/>
    <Routes>
        <Route path='/main' element={<MainPage/>}/>
    </Routes>
    <Routes>
        <Route path='/about' element={<AboutPage/>}/>
    </Routes>
    <Routes>
        <Route path='/' element={<Posts/>}/>
    </Routes>
    <Routes>
        <Route path='/posts/:id' element={<PostsDetails/>}/>
    </Routes>
   
   </Router>
  )
}


export default App
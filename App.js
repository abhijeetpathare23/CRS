import React from 'react';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import './App.css';
import Navbarr from './Navbarr';
import Main from './Main';
import Footer from "./Footer";
import Placement from './Placement';
import Contact from './Contact';
import Login from './Login';
import Dashboard from './Dashboard';
import Study from './Study';
import Appti from './pages/Appti';
import Hr from './pages/Hr';
import Verbal from './pages/Verbal';
import Tech from './pages/Tech';
import Profile from './Profile';


function App() {
  return (
    <div className='app'>
    <BrowserRouter>
    <Navbarr/>
    <Routes>
      <Route path='/' element={<Main/>}></Route>
      <Route path='/placement' element={<Placement/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/dashboard' element={<Dashboard/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/study' element={<Study/>}></Route>
      <Route path='/profile' element={<Profile/>}></Route>
      <Route path='/appti' element={<Appti/>}/>
      <Route path='/hr' element={<Hr/>}/>
      <Route path='/verbal' element={<Verbal/>}/>
      <Route path='/tech' element={<Tech/>}/>  
    </Routes>
    <Footer/>
    </BrowserRouter>
   </div>
  );
}

export default App;

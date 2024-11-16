import React, { Component } from 'react';
import { Routes, Route, BrowserRouter, NavLink, Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Contact from './components/Contact';
import AboutUs from './components/AboutUs';
import UserDetails from './components/UserDetails';
import UserList from './components/UserList';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Axios and Navigation</h1>
        {/*UserList />*/}
        <BrowserRouter>
        <nav>
          <Link to='/home'>Home</Link> |
          <Link to='/about?college=GBC'>About</Link> |
          <NavLink to='/contact/Camila'>Contact</NavLink> |
          <NavLink to='/userlist'>User List</NavLink> |
        </nav>
          <Routes>
            <Route path='/home' element={ <Home/> }/>
            <Route path='/about' element={ <AboutUs/> }/>
            <Route path='/contact/:name' element={ <Contact/> }/>
            <Route path='/userlist' element={ <UserList/> }/>
            <Route path='/user/:userid' element={ <UserDetails/> }/>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}



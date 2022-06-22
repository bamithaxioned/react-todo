import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Completed from '../pages/Completed';
import Home from '../pages/Home';
import List from '../pages/List';

const Navbar = () => {
  return (
    <>
      <Router>
        <header className="header">
          <div className="wrapper">
            <h1 className='primary__heading'>
              <Link to="/" title='Todo App.' className='primary__heading-logo'>Todo App.</Link>
            </h1>
            <nav className='navigation'>
              <ul className="navigation__menu">
                <li className='navigation__menu-list'>
                  <Link to="/" title='Home'>Home</Link>
                </li>
                <li className='navigation__menu-list'>
                  <Link to="/lists" title='Lists'>Lists</Link>
                </li>
                <li className='navigation__menu-list'>
                  <Link to="/completed" title='Completed'>Completed</Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/lists" element={<List />}></Route>
          <Route path="/completed" element={<Completed />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default Navbar;
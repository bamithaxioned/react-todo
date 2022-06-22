import React from 'react';

const Navbar = () => {
  return (
    <>
      <header className="header">
        <div className="wrapper">
          <h1 className='primary__heading'>
            <a href="/" title='Todo App.' className='primary__heading-logo'>Todo App.</a>
          </h1>
          <nav className='navigation'>
            <ul className="navigation__menu">
              <li className='navigation__menu-list'>
                <a href="/" title='Home'>Home</a>
              </li>
              <li className='navigation__menu-list'>
                <a href="/" title='Lists'>Lists</a>
              </li>
              <li className='navigation__menu-list'>
                <a href="/" title='Completed'>Completed</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Navbar;
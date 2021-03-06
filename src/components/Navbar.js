import React, {useState} from 'react'

const Navbar = () => {
  const [isActive, setIsActive] = useState(false)
  const toggleIsActive = () => setIsActive(!isActive)

  return (
    <nav className='navbar' role='navigation' aria-label='main navigation'>
      <div className='navbar-brand'>
        <a
          role='button'
          className={`navbar-burger burger ${isActive && 'is-active'}`}
          aria-label='menu'
          aria-expanded='false'
          data-target='navbarBasicExample'
          onClick={toggleIsActive}
        >
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
        </a>
      </div>

      <div id='navbarBasicExample' className={`navbar-menu ${isActive && 'is-active'}`}>
        <div className='navbar-start'>
          <a className='navbar-item'>Home</a>

          <a className='navbar-item'>Documentation</a>

          <div className='navbar-item has-dropdown is-hoverable'>
            <a className='navbar-link'>More</a>

            <div className='navbar-dropdown'>
              <a className='navbar-item'>About</a>
              <a className='navbar-item'>Jobs</a>
              <a className='navbar-item'>Contact</a>
              <hr className='navbar-divider' />
              <a className='navbar-item'>Report an issue</a>
            </div>
          </div>
        </div>

        <div className='navbar-end'>
          <div className='navbar-item'>
            <div className='buttons'>
              <a className='button is-primary'>
                <strong>Sign up</strong>
              </a>
              <a className='button is-light'>Log in</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

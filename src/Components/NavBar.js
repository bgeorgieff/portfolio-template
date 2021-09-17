import avatar from '../img/1626854735796.png'
import { NavLink } from 'react-router-dom'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const NavBar = () => {
  return (
    <div className='navbar'>
      <nav className='nav'>
        <div className='profile-container'>
          <div className='profile'>
            <img src={avatar}  alt='' />
          </div>
        </div>
        <ul className='nav-items'>
          <li className='nav-item'>
            <NavLink to='/' exact activeClassName='active'>Home</NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to='/about' exact activeClassName='active'>About</NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to='/projects' exact activeClassName='active'>Projects</NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to='/contact' exact activeClassName='active'>Contact</NavLink>
          </li>
        </ul>
        <footer className='footer'>
          <p>
            Created with <FontAwesomeIcon icon={faHeart} style={{color: 'red'}} /><br/> by Blagovest Georgiev
            <br/>
            2021 
          </p>
        </footer>
      </nav>
    </div>
  )
}
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faMailBulk } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"

export const Home = () => {
  return (
    <div className='home-page'>
      <header className='header'>
        <h1 className='header-text'>
          Blagovest Georgiev
          <span>Marketing Specialist who is in love with Javascript</span>
        </h1>
      </header>
      <p>
        Hi there and welcome to one of my latest creations - my portfolio website! 
        
      </p>
      <div className='icons'>
        <Link to='facebook.com' className='icon-container'>
          <FontAwesomeIcon icon={faFacebook} className='icon' />
        </Link>
        <Link to='facebook.com' className='icon-container'>
          <FontAwesomeIcon icon={faGithub} className='icon' />
        </Link>
        <Link to='facebook.com' className='icon-container'>
          <FontAwesomeIcon icon={faLinkedin} className='icon' />
        </Link>
        <Link to='facebook.com' className='icon-container'>
          <FontAwesomeIcon icon={faMailBulk} className='icon' />
        </Link>
      </div>
    </div>
  )
}


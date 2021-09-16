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
        Having started my professional journey about 10 years ago, I have been working as a digital marketing specialist up until recently. 
        My primary tasks required me to create and optimize automated email campaigns for a number of markets around the globe including Australia, the UK, and the USA. 
        In the process I gained extensive knowledge of the specifics of HTML and CSS, as those were two of the main tools I relied on when crafting my email templates. 
        Having scratched just the surface of the infinite possibilities offered by web development, my curiosity towards technology and the digital inspired me to make a bold career shift. 
        I’m passionate about JavaScript …
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


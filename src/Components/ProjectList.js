import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const ProjectList = ({list}) => {

  return (
    <div className='project-l-container'>
      {
        list.map((item) => 
        <div className='project' key={item.id}>
          <div className='project-item'>
            <div className='project-item-p'>
              <img src={item.picture} alt='' />
              <ul className='project-icon'>
                <li>
                  <a href={item.link}><FontAwesomeIcon icon={faGithub} /></a>
                </li>
              </ul>
            </div>
            <a href={item.link}> 
              <h5>{item.name}</h5>
              <p>{item.description}</p>
            </a>
          </div>
        </div>
        )
      }
    </div>
  )
}
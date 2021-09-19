import { ProjectList } from "../Components/ProjectList"
import { Title } from "../Components/Title"
import { ProjectsList } from "../Projects"

export const Projects = () => {

  return (
    <div className='projects-container'> 
      <Title titleText={'Projects'} span={'Projects'} />
      <div className='projects-list'>
        <ProjectList list={ProjectsList} />
      </div>
    </div>
  )
}
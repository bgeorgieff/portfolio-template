export const Skills = ({skillTitle, skillProgress}) => {
  return (
    <div className='skill-section'>
      <div className='skill-container'>
        <h5 className='skill-title'>{skillTitle}</h5>
        <div className='skill-bar'>
          <p className='skill-text'>{skillProgress}</p>
          <div className='skill-progress' progress={skillProgress} >
            <div className='i-skill-progress' style={{width: skillProgress}}></div>
          </div>
        </div>
      </div>
    </div>
  )
}
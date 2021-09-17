export const Title = ({titleText, span}) => {
  return (
    <div className='title'>
      <h3>{titleText}
        <span>{span}</span>
      </h3>
    </div>
  )
}
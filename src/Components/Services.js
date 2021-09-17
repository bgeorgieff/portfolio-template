export const Services = ({image, serviceName, serviceText}) => {
  return (
    <div className='services-section'>
      <div className='services'>
        <img src={image} alt='' />
        <h5 className='service-title'>{serviceName}</h5>
        <p className='service-text'>{serviceText}</p>
      </div>
    </div>
  )
}
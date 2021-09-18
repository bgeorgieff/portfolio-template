export const ContactProp = ({icon, text, title, link}) => {
  return (
    <div className='contact-prop'>
      <div className='contact'>
        <div className='contact-image-container'>
          <img src={icon} alt='' />
        </div>
        <div className='contact-items'>
          <h6><a href={link}>{title}</a></h6>
          <p><a href={link}>{text}</a></p>
        </div>
      </div>
    </div>
  )
}
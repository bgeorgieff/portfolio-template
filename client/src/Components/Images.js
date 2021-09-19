import image from '../img/1626854735796.png'

export const Images = () => {
  return (
    <div className='image-section'>
      <div className='image-container'>
        <img src={image} alt='' />
      </div>
      <div className='about-info'>
        <h4>I am<span>some text</span></h4>
        <p className='about-info-text'>
        Having started my professional journey about 10 years ago, I have been working as a digital marketing specialist up until recently. 
        My primary tasks required me to create and optimize automated email campaigns for a number of markets around the globe including Australia, the UK, and the USA. 
        In the process I gained extensive knowledge of the specifics of HTML and CSS, as those were two of the main tools I relied on when crafting my email templates. 
        Having scratched just the surface of the infinite possibilities offered by web development, my curiosity towards technology and the digital inspired me to make a bold career shift. 
        I’m passionate about JavaScript …
        </p>
        <div className='details-container'>
          <div className='left-section'>
            <p>Full Name</p>
            <p>Age</p>
            <p>Languages</p>
          </div>
          <div className='right-section'>
            <p>: Blagovest Georgiev</p>
            <p>: 34</p>
            <p>: Bulgarian, English, Russian</p>
          </div>
        </div>
        <button>Download cv</button>
      </div>
    </div>
  )
}
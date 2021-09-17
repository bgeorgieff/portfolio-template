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
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
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
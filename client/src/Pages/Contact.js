import { Title } from '../Components/Title'
import { ContactProp } from '../Components/ContactProp'
import phone from '../img/telephone.svg'
import email from '../img/gmail.svg'
import { ContactForm } from '../Components/ContactForm'

export const ContactPage = () => {
  return (
    <div className='contact-container'>
      <Title titleText={'Contact Me'} span={'Contact Me'} />
      <div className='contact-page'>
        <div className='map-section'>
        <iframe title='location' src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d11630.398806181327!2d27.90779405!3d43.2178847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sbg!2sbg!4v1631960661625!5m2!1sbg!2sbg" width="600" height="450" allowFullScreen="" loading="lazy"></iframe>
        </div>
        <div className='contact-section'>
          <ContactProp icon={phone} text={'Contact via LinkedIn'} title={'LinkedIn'} link={'https://linkedIn.com'}/>
          <ContactProp icon={email} text={'bgeorgieff87@gmail.com'} title={'Email'} link={'mailto:bgeorgieff87@gmail.com'}/>
        </div>
        <div className='form-container'>
          <ContactForm />
        </div>
      </div>
    </div>
  )
}
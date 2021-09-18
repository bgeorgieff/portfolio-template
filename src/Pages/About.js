import { Images } from "../Components/Images"
import { Services } from "../Components/Services"
import { Skills } from "../Components/Skills"
import { Title } from "../Components/Title"
import email from '../img/email.svg'
import reactImg from '../img/science-symbol.svg'

export const About = () => {
  return (
    <div className='about-page'>
      <Title titleText={'About Me'} span={'About Me'} />
      <Images />
      <Title titleText={'Skills'} span={'Skills'} />
      <div className='skills-container'>
        <Skills skillTitle={'Javascript'} skillProgress={'85%'} />
        <Skills skillTitle={'NodeJS'} skillProgress={'75%'} />
        <Skills skillTitle={'ExpressJS'} skillProgress={'85%'} />
        <Skills skillTitle={'Mongoose'} skillProgress={'73%'} />
        <Skills skillTitle={'MongoDB'} skillProgress={'70%'} />
        <Skills skillTitle={'ReactJS'} skillProgress={'78%'} />
        <Skills skillTitle={'Handlebars'} skillProgress={'87%'} />
        <Skills skillTitle={'HTML5/CSS3'} skillProgress={'89%'} />
        <Skills skillTitle={'UI/UX Design'} skillProgress={'87%'} />
        <Skills skillTitle={'Custom Email Templates'} skillProgress={'95%'} />
      </div>
      <div className='services-container'>
        <Title titleText={'Services'} span={'Services'} />
        <div className='services-list'>
          <Services image={email} serviceName={'Email Templating'} 
            serviceText={'Professional, fast and reliable creation of custom email templates'} />
          <Services image={reactImg} serviceName={'SPA'} 
            serviceText={'In need of Portfolio website or simply a place to put out your thoughts? Let me help!'} />
        </div>
      </div>
    </div>
  )
}
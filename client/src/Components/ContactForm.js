import { useState } from 'react'
import { isVerified } from '../utils/isVerified'

export const ContactForm = () => {
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('') 
  const [sent, setSent] = useState(false)
  const [sentConfirmation, setSentConfirmation] = useState(false)
  const [failedEmailVerification, setFailedEmailVerification] = useState(false)
  const [failedNameVerification, setFailedNameVerification] = useState(false)
  const [failedMSGVerification, setFailedMSGVerification] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()

    const data = {
      name,
      lastName,
      email,
      message
    }

    const verifiedMSG = isVerified(data)

    if(!verifiedMSG.verify.nameBool) {
      setFailedNameVerification(true)
    } else if (!verifiedMSG.verify.emailBool) {
      setFailedEmailVerification(true)
    } else if (!verifiedMSG.verify.msgBool) {
      setFailedMSGVerification(true)
    } else {
      setName('')
      setLastName('')
      setMessage('')
      setEmail('')

      try {
        const promise = await fetch('/api/submit', {
          method: 'POST',
          body: JSON.stringify(data),
          headers: {
            'Content-type': 'application/json'
          }
        })
  
        if (promise.status === 400) {
          setSent(true)
          setSentConfirmation(true)
        }
      }
      catch (e) {
        console.error(e)
      }
    }
  }

  if(sent) {
    setTimeout(() => {
      setSentConfirmation(false)
    }, 10000);
  }

  if(failedEmailVerification) {
    setTimeout(() => {
      setFailedEmailVerification(false)
    }, 8000);
  }

  if(failedNameVerification) {
    setTimeout(() => {
      setFailedNameVerification(false)
    }, 8000);
  }

  if(failedMSGVerification) {
    setTimeout(() => {
      setFailedMSGVerification(false)
    }, 8000);
  }

  return (
    <div className='email-form'>
      <div className='form-header'>
        <p>Or Message me via this form</p>
      </div>
      { failedNameVerification ? 
        <div className='error-message'>Please fill in your name</div> : null }
      { failedEmailVerification ? 
        <div className='error-message'>Wrong email format</div> : null }
      { failedMSGVerification ? 
        <div className='error-message'>Please fill in your message</div> : null }
      <form onSubmit={handleSubmit}>
        <div className='form-item'>
          <label htmlFor='Name'>Name</label>
          <input type='text' name='name' value={name} className='form-name' placeholder='Your Name' onChange={e => setName(e.target.value)} />
        </div>
        <div className='form-item'>
          <label htmlFor='Last Name'>Last Name</label>
          <input type='text' name='l-name' value={lastName} className='form-l-name' placeholder='Last Name' onChange={e => setLastName(e.target.value)} />
        </div>
        <div className='form-item'>
          <label htmlFor='Name'>Email</label>
          <input type='text' name='email' value={email} className='form-email' placeholder='Your email' onChange={e => setEmail(e.target.value)} />
        </div>
        <div className='form-item'>
          <label htmlFor='Message'>Your Message</label>
          <textarea name='message' rows='5' value={message} cols='30' placeholder='Your message' onChange={e => setMessage(e.target.value)} ></textarea>
        </div>
        { sentConfirmation ? <div className='message' style={{position: 'absolute'}}>Message has been sent!</div> : null}
        <div className='email-submit'>
          <button className='submit-btn' type='submit'>Submit</button>
        </div>
      </form>
    </div>
  )
}
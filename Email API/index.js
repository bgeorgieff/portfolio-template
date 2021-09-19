require('dotenv').config()

const express = require('express')
const cors = require('cors')
const nodemailer = require('nodemailer')

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({
  extended: true,
}))

app.post('/api/submit', async (req, res, next) => {
  const message = req.body

  const messageData = nodemailer.createTransport({
    service: 'Gmail',
    port: 465,
    to: 'bgeorgieff87@gmail.com',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASS
    }
  })

  const mailOptions = {
    from: message.name,
    to: 'bgeorgieff87@gmail.com',
    subject: `Message from ${message.name}`,
    html: `
      <h3>Contact Info</h3>
      <ul>
        <li>Name: ${message.name}</li>
        <li>Last Name: ${message.lastName}</li>
        <li>Email: ${message.email}</li>
      <ul>

      <h3>Message:</h3>
      <p>${message.message}</p>
    `
  }

  try {
    const sentMSG = await messageData.sendMail(mailOptions)
    if(sentMSG) {
      res.status(400).send('success')
    }
  }
  catch(e) {
    console.error(e)
  }

  messageData.close()
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`Email Server Started on ${PORT}`);
})
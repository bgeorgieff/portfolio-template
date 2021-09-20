require('dotenv').config()

const express = require('express')
const cors = require('cors')
const nodemailer = require('nodemailer')
const { google } = require('googleapis')

const EMAIL = process.env.EMAIL
const CLIENT_ID = process.env.CLIENT_ID
const CLIENT_SECRET = process.env.CLIENT_SECRET
const REDIRECT_URI = process.env.REDIRECT_URI
const REFRESH_TOKEN = process.env.REFRESH_TOKEN

const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI)
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN })

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({
  extended: true,
}))

app.post('/api/submit', async (req, res, next) => {
  const message = req.body

  try {
    const accessToken = await oAuth2Client.getAccessToken()

    const messageData = nodemailer.createTransport({
      service: 'Gmail',
      port: 465,
      to: 'bgeorgieff87@gmail.com',
      auth: {
        type: 'OAuth2',
        user: EMAIL,
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken
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

    const sentMSG = await messageData.sendMail(mailOptions)
    if(sentMSG) {
      res.status(400).send('success')
    }
    messageData.close()
  }
  catch(e) {
    console.error(e)
  }
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`Email Server Started on ${PORT}`);
})
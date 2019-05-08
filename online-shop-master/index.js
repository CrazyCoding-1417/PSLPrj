const express = require('express')
const dotenv = require('dotenv')
const bodyParser = require('body-parser')
const cors = require('cors')
const webpush = require('web-push')

const app = express()

dotenv.config()

app.use(cors())
app.use(bodyParser.json())

webpush.setVapidDetails(process.env.WEB_PUSH_CONTACT, process.env.PUBLIC_VAPID_KEY, process.env.PRIVATE_VAPID_KEY)

app.get('/', (req, res) => {
  res.send('Hello server is working!')
})

app.post('/notifications/discount', (req, res) => {
  const discount = req.body

  console.log({discount})

  const payload = JSON.stringify({
    title: '10% Discount!!',
    body: 'SHOP at Lowes',
    icon: 'http://image.ibb.co/frYOFd/tmlogo.png',
  })

  webpush.sendNotification(discount, payload)
    .then(result => console.log(result))
    .catch(e => console.log(e.stack))

  res.status(200).json({'success': true, payload})
});

app.listen(9000, () => console.log('The server has been started on the port 9000'))

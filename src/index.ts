import express from 'express'
import bodyParser from 'body-parser'

const app = express()
const router = express.Router()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(router)

app.listen(3000, () => {
  console.log('Listening on port 3000');
})


import express from 'express'
import bodyParser from 'body-parser'
import { AppRouter } from './router'
import './controllers/MainController'

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(AppRouter.getInstance())

app.listen(3000, () => {
  console.log('Listening on port 3000');
})


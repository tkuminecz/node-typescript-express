import * as bodyParser from 'body-parser'
import * as compression from 'compression'
import * as cors from 'cors'
import * as express from 'express'
import * as morgan from 'morgan'

export default (app: express.Application) => {
  return app.use(bodyParser.json())
    .use(compression())
    .use(cors())
    .use(morgan('dev'))
}

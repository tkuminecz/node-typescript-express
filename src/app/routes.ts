import * as express from 'express'
import * as path from 'path'
import { Server } from 'typescript-rest'

export default (app: express.Application) => {
  Server.useIoC()

  const basePath = path.resolve(__dirname, '../controller')
  Server.loadServices(app, [`${basePath}/*.js`, `!${basePath}/*.js.map`])

  return app
}

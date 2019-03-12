import * as express from 'express'
import addMiddleware from './middleware'
import addRoutes from './routes'

export default async function prepareApp () {
  const server = addRoutes(addMiddleware(express()))
  const port = (process.env.PORT) ? parseInt(process.env.PORT, 10) : 8080

  return () => {
    server.listen(port, () => {
      console.log(`> Ready on http://localhost:$port}/`)
    })
  }
}

import 'reflect-metadata'
import prepareApp from '@app/app'

prepareApp()
  .then(start => start())
  .catch(err => console.error(err))

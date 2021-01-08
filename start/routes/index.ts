import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { greeting: 'Wellcome to API' }
})

import './auth'
import './health'
import './profile'

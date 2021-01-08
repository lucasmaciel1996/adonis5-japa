import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.get('/health', 'HealthController.index')
}).prefix('v1')

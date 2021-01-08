import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.get('/profile/me', 'ProfileController.me')
}).prefix('v1')

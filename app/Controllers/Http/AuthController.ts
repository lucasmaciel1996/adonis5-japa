import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AuthController {
  public async login({ request, auth }: HttpContextContract) {
    const { email, password } = request.only(['email', 'password'])

    return await auth.attempt(email, password)
  }
}

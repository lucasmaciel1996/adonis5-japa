import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class ProfileController {
  public async me({ response }: HttpContextContract) {
    return response.json(User.all())
  }
}

import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import { UserFactory } from 'Database/factories'
export default class ProfileController {
  public async me({}: HttpContextContract) {
    await UserFactory.createMany(20)
    const users = await User.query().whereNull('deleted_at')
    return users
  }
}

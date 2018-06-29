'use strict'

const User = use('App/Models/User')

class UserController {
  async register ({ request }) {
    const { email, password } = request.all()
    const user = await User.create({
      email,
      password,
      username: email
    })
    return user
  }
}

module.exports = UserController

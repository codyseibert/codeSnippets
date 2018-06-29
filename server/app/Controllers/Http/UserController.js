'use strict'

class UserController {
  register ({ request }) {
    const { email, password } = request.all()
    return {
      message: `Successfully registered with email - ${email} and password ${password}`
    }
  }
}

module.exports = UserController

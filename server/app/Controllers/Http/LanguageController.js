'use strict'

class LanguageController {
  async index ({ request }) {
    const { language, count } = request.all()
    const languages = await Language.all()
    return languages
  }
}

module.exports = LanguageController

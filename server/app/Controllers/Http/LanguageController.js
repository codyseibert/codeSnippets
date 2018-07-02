'use strict'

class LanguageController {
  async languages ({ request }) {
    const { language, count } = request.all()
    const languages = await Language.create({
      language,
      count
    })
    return languages
  }
}

module.exports = LanguageController

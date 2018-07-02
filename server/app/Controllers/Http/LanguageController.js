'use strict'

class LanguageController {
  async index () {
    const languages = await Language
      .query()
      .withCount('snippets')
      .fetch()
    return languages.toJSON()
  }
}

module.exports = LanguageController

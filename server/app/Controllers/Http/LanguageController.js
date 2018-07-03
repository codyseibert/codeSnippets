'use strict'

const Language = use('App/Models/Language');

class LanguageController {
  async index () {
    return await Language
      .query()
      .withCount('snippets')
      .fetch()
  }
}

module.exports = LanguageController

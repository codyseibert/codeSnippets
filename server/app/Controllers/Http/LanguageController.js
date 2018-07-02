'use strict'

class LanguageController {
  async index () {
    const languages = await Language.all()
    const count = await Snippet.count(Snippet.where('languageId', 'id'))
    console.log('aaa')
    return {
      languages, count
    }
  }
}

module.exports = LanguageController

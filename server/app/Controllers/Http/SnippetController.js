'use strict'

const Snippet = use('App/Models/Snippet');

class SnippetController {
  async index () {
    return await Snippet.all();
  }
}

module.exports = SnippetController

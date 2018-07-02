'use strict'

const Model = use('Model')

class Language extends Model {
  snippets () {
    return this.hasMany('App/Models/Snippet')
  }
}

module.exports = Language

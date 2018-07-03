'use strict'

const Model = use('Model')

class Snippet extends Model {
  language () {
    return this.belongsTo('App/Models/Language', 'languageId', 'id')
  }
}

module.exports = Snippet

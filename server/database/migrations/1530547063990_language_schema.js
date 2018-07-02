'use strict'

const Schema = use('Schema')

class LanguageSchema extends Schema {
  up () {
    this.create('languages', (table) => {
      table.increments()
      table.string('language', 80).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('languages')
  }
}

module.exports = LanguageSchema

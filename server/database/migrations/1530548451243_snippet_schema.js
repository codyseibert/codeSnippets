'use strict'

const Schema = use('Schema')

class SnippetSchema extends Schema {
  up () {
    this.create('snippets', (table) => {
      table.increments()
      table.string('code', 255)
      table.integer('languageId').unsigned().references('id').inTable('languages')
      table.timestamps()
    })
  }

  down () {
    this.drop('snippets')
  }
}

module.exports = SnippetSchema

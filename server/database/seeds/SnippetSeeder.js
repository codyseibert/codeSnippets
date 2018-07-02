'use strict'

/*
|--------------------------------------------------------------------------
| SnippetSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

const Factory = use('Factory')
const Database = use('Database')

class SnippetSeeder {
  async run () {
    const snippets = await Database.table('snippets')
    console.log(snippets)
  }
}

module.exports = SnippetSeeder
